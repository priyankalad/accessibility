import React from "react";
import useDropdownMenu1 from "./useDropdownMenu1";

export default function DropDownMenu({ menuItem }) {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu1(
    menuItem.items.length
  );

  const handleClick = (e) => {
    // const dropdownButton = e.target.querySelector("button");
    // console.log(dropdownButton);
    // dropdownButton.
    // const keyboardEvent = new KeyboardEvent("keydown", {
    //   code: "Enter",
    //   key: "Enter",
    //   charCode: 13,
    //   keyCode: 13,
    //   view: window,
    //   bubbles: false,
    // });
    // dropdownButton.dispatchEvent(keyboardEvent);
  };
  return (
    <React.Fragment>
      <button {...buttonProps} className="demo-button">
        {menuItem.name}
      </button>
      <div className={`demo-menu ${isOpen ? "visible" : ""}`} role="menu">
        {menuItem.items.map((item, idx) => {
          if (typeof item === "object") {
            return (
              <a
                key={idx}
                className="sub-demo"
                {...itemProps[idx]}
                id={`menuitem${idx}`}
              >
                <DropDownMenu menuItem={item} />
              </a>
            );
          } else {
            return (
              <a
                className="demo-menuitem"
                key={idx}
                {...itemProps[idx]}
                href="https://example.com"
                id={`menuitem${idx}`}
              >
                {item}
              </a>
            );
          }
        })}
      </div>
    </React.Fragment>
  );
}
