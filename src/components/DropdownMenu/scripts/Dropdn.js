"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var react_1 = require("react");
function useDropdownMenu(itemCount) {
  // Use state
  var _a = react_1.useState(false),
    isOpen = _a[0],
    setIsOpen = _a[1];
  var currentFocusIndex = react_1.useRef(null);
  var firstRun = react_1.useRef(true);
  var clickedOpen = react_1.useRef(false);
  // Create refs
  var buttonRef = react_1.useRef(null);
  var itemRefs = react_1.useMemo(
    function () {
      return Array.from({ length: itemCount }, function () {
        return react_1.createRef();
      });
    },
    [itemCount]
  );
  // Create type guard
  var isKeyboardEvent = function (e) {
    return e.key !== undefined;
  };
  // Handles moving the focus between menu items
  var moveFocus = function (itemIndex) {
    var _a;
    currentFocusIndex.current = itemIndex;
    (_a = itemRefs[itemIndex].current) === null || _a === void 0
      ? void 0
      : _a.focus();
  };
  // Focus the first item when the menu opens
  react_1.useEffect(
    function () {
      // Stop if this is the first fire of the Hook, and update the ref
      if (firstRun.current) {
        firstRun.current = false;
        return;
      }
      // If the menu is currently open focus on the first item in the menu
      if (isOpen && !clickedOpen.current) {
        moveFocus(0);
      } else if (!isOpen) {
        clickedOpen.current = false;
      }
    },
    [isOpen]
  );
  // Handle listening for clicks and auto-hiding the menu
  react_1.useEffect(
    function () {
      // Ignore if the menu isn't open
      if (!isOpen) {
        return;
      }
      // This function is designed to handle every click
      var handleEveryClick = function (event) {
        // Make this happen asynchronously
        setTimeout(function () {
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
      // Add listener
      //  -> Force it to be async to fix: https://github.com/facebook/react/issues/20074
      setTimeout(function () {
        document.addEventListener("click", handleEveryClick);
      }, 1);
      // Return function to remove listener
      return function () {
        return document.removeEventListener("click", handleEveryClick);
      };
    },
    [isOpen]
  );
  // Disable scroll when the menu is opened, and revert back when the menu is closed
  react_1.useEffect(
    function () {
      var disableArrowScroll = function (event) {
        if (isOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
          event.preventDefault();
        }
      };
      document.addEventListener("keydown", disableArrowScroll);
      return function () {
        return document.removeEventListener("keydown", disableArrowScroll);
      };
    },
    [isOpen]
  );
  // Create a handler function for the button's clicks and keyboard events
  var buttonListener = function (e) {
    // Detect if event was a keyboard event or a mouse event
    if (isKeyboardEvent(e)) {
      var key = e.key;
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
      clickedOpen.current = !isOpen;
      setIsOpen(!isOpen);
    }
  };
  // Create a function that handles menu logic based on keyboard events that occur on menu items
  var itemListener = function (e) {
    var _a;
    // Destructure the key property from the event object
    var key = e.key;
    // Handle keyboard controls
    if (
      ["Tab", "Shift", "Enter", "Escape", "ArrowUp", "ArrowDown", " "].includes(
        key
      )
    ) {
      // Create mutable value that initializes as the currentFocusIndex value
      var newFocusIndex = currentFocusIndex.current;
      // Controls whether the menu is open or closed, if the button should regain focus on close, and if a handler function should be called
      if (key === "Escape") {
        setIsOpen(false);
        (_a = buttonRef.current) === null || _a === void 0
          ? void 0
          : _a.focus();
        return;
      } else if (key === "Tab") {
        setIsOpen(false);
        return;
      } else if (key === "Enter" || key === " ") {
        if (!e.currentTarget.href) {
          e.currentTarget.click();
        }
        setIsOpen(false);
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
    }
    // Handle printable keys
    if (/[a-zA-Z0-9./<>?;:"'`!@#$%^&*()\\[\]{}_+=|\\-~,]/.test(key)) {
      var index = itemRefs.findIndex(function (ref) {
        var _a, _b, _c, _d, _e, _f;
        return (
          ((_b =
            (_a = ref.current) === null || _a === void 0
              ? void 0
              : _a.innerText) === null || _b === void 0
            ? void 0
            : _b.toLowerCase().startsWith(key.toLowerCase())) ||
          ((_d =
            (_c = ref.current) === null || _c === void 0
              ? void 0
              : _c.textContent) === null || _d === void 0
            ? void 0
            : _d.toLowerCase().startsWith(key.toLowerCase())) ||
          ((_f =
            (_e = ref.current) === null || _e === void 0
              ? void 0
              : _e.getAttribute("aria-label")) === null || _f === void 0
            ? void 0
            : _f.toLowerCase().startsWith(key.toLowerCase()))
        );
      });
      if (index !== -1) {
        moveFocus(index);
      }
    }
  };
  // Define spreadable props for button and items
  var buttonProps = {
    onKeyDown: buttonListener,
    onClick: buttonListener,
    tabIndex: 0,
    ref: buttonRef,
    role: "button",
    "aria-haspopup": true,
    "aria-expanded": isOpen,
  };
  var itemProps = Array.from({ length: itemCount }, function (_ignore, index) {
    return {
      onKeyDown: itemListener,
      tabIndex: -1,
      role: "menuitem",
      ref: itemRefs[index],
    };
  });
  // Return a listener for the button, individual list items, and the state of the menu
  return {
    buttonProps: buttonProps,
    itemProps: itemProps,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };
}
exports.default = useDropdownMenu;
