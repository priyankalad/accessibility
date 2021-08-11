import React, { createRef, useEffect, useMemo, useRef, useState } from "react";

export default function useDropdownMenu1(itemCount) {
  const [isOpen, setIsOpen] = useState(false);
  const currentFocusIndex = useRef(null);
  const firstRun = useRef(true);
  const clickedOpen = useRef(false);
  const buttonRef = useRef(null);
  let itemRefs = useMemo(
    function () {
      return Array.from({ length: itemCount }, function () {
        return createRef();
      });
    },
    [itemCount]
  );

  //Focus the first item when the menu opens
  useEffect(() => {
    // Stop if this is the first fire of the Hook, and update the ref
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    // If the menu is currently open, focus on the first item in the menu
    if (isOpen && !clickedOpen.current) {
      // && !clickedOpen.current) {
      moveFocus(0);
    } else if (!isOpen) {
      clickedOpen.current = false;
    }
  }, [isOpen]);

  //Handle listening for clicks and auto-hiding the menu
  useEffect(() => {
    // Ignore if the menu isn't open
    if (!isOpen) {
      return;
    }

    const handleEveryClick = (event) => {
      // Make this happen asynchronously
      setTimeout(() => {
        // Type guard
        if (!(event.target instanceof Element)) {
          return;
        }
        // Ignore if we're clicking inside the menu
        if (event.target.closest('[role="menu"]') instanceof Element) {
          return;
        }
        // Hide dropdown
        setIsOpen(false);
      }, 10);
    };
    setTimeout(() => {
      document.addEventListener("click", handleEveryClick);
    }, 1);

    // Return function to remove listener
    return function () {
      return document.removeEventListener("click", handleEveryClick);
    };
  }, [isOpen]);

  //Disable scroll when the menu is opened, and revert back when the menu is closed
  useEffect(() => {
    const disableArrowScroll = (event) => {
      if (isOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", disableArrowScroll);
    return function () {
      return document.removeEventListener("keydown", disableArrowScroll);
    };
  }, [isOpen]);

  const closePopup = () => {
    clickedOpen.current = false;
    setIsOpen(false);
  };

  // Create a handler function for the button's clicks and keyboard events
  const buttonListener = (e) => {
    // Detect if event was a keyboard event or a mouse event
    if (e.type === "mouseover") {
      const menuList = e.currentTarget.nextSibling;
      if (menuList.classList.contains("sub-demo-menu")) {
        clickedOpen.current = !isOpen;
        setIsOpen(!isOpen);
      } else {
        clickedOpen.current = true;
        setIsOpen(true);
      }

      if (!menuList.classList.contains("sub-demo-menu")) {
        menuList.addEventListener("mouseleave", closePopup);
      }
    } else if (isKeyboardEvent(e)) {
      const key = e.key;
      if (!["Enter", " ", "Tab", "ArrowDown", "Escape"].includes(key)) {
        return;
      }

      if (
        (key === "Tab" || key === "ArrowDown") &&
        clickedOpen.current &&
        isOpen
      ) {
        e.preventDefault();
        moveFocus(0);
      }
      if (key === "Enter" || key === " ") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    } else {
      if (e.currentTarget.classList.contains("sub-demo-button")) {
        e.preventDefault();
        clickedOpen.current = false;
        setIsOpen(true);
      } else {
        clickedOpen.current = !isOpen;
        setIsOpen(!isOpen);
      }
    }
  };

  // Create a function that handles menu logic based on keyboard events that occur on menu items
  const itemListener = (e) => {
    let _a;
    const key = e.key;
    // Handle keyboard controls
    if (
      ["Tab", "Shift", "Enter", "Escape", "ArrowUp", "ArrowDown", " "].includes(
        key
      )
    ) {
      // Create mutable value that initializes as the currentFocusIndex value
      let newFocusIndex = currentFocusIndex.current;

      // Controls whether the menu is open or closed, if the button should regain focus on close, and if a handler function should be called
      if (key === "Escape") {
        setIsOpen(false);

        if (e.currentTarget.parentElement.classList.contains("sub-demo-menu")) {
          _a = e.currentTarget.parentElement.previousSibling;
        } else {
          _a = buttonRef.current;
        }

        _a === null || _a === void 0 ? void 0 : _a.focus();
        return;
      } else if (key === "Tab") {
        setIsOpen(false);
        return;
      } else if (key === "Enter" || key === " ") {
        if (!e.currentTarget.href) {
          e.currentTarget.click();
        }

        if (!e.currentTarget.classList.contains("sub-demo-button")) {
          setIsOpen(false);
        }

        return;
      }
      // Controls the current index to focus
      if (newFocusIndex !== null) {
        if (key === "ArrowUp") {
          newFocusIndex -= 1;
        } else if (key === "ArrowDown") {
          newFocusIndex += 1;
        }
        if (newFocusIndex > itemRefs.length - 1) {
          newFocusIndex = 0;
        } else if (newFocusIndex < 0) {
          newFocusIndex = itemRefs.length - 1;
        }
      }
      // After any modification set state to the modified value
      if (newFocusIndex !== null) {
        moveFocus(newFocusIndex);
      }
      return;
    } else if (e.type === "mouseover") {
      if (e.currentTarget.classList.contains("sub-demo-button")) {
        const menuList = e.currentTarget.nextSibling;
        if (menuList.classList.contains("visible")) {
          menuList.addEventListener("mouseleave", closePopup);
        }
      }
    }
  };

  const isKeyboardEvent = (e) => {
    return e.key !== undefined;
  };

  const moveFocus = (itemIndex) => {
    let _a;
    currentFocusIndex.current = itemIndex;

    _a = itemRefs[itemIndex] && itemRefs[itemIndex].current;

    if (_a === null || _a === void 0) {
      void 0;
    } else {
      _a.focus();
    }
  };

  const buttonProps = {
    onKeyDown: buttonListener,
    onClick: buttonListener,
    onMouseOver: buttonListener,
    tabIndex: 0,
    ref: buttonRef,
    role: "button",
    "aria-haspopup": true,
    "aria-expanded": isOpen,
  };

  const itemProps = Array.from({ length: itemCount }, (_ignore, index) => {
    return {
      onKeyDown: itemListener,
      tabIndex: -1,
      role: "menuitem",
      ref: itemRefs[index],
    };
  });

  return {
    buttonProps: buttonProps,
    itemProps: itemProps,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };
}
