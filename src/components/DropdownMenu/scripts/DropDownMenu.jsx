import React from "react";
import useDropdownMenu1 from "./useDropdownMenu1";

export default function DropDownMenu({ menuItem }) {
  console.log("menuItem", menuItem);
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu1(
    menuItem.items.length
  );

  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <React.Fragment>
      <button {...buttonProps} className="demo-button">
        {menuItem.name}
      </button>
      <div className={`demo-menu ${isOpen ? "visible" : ""}`} role="menu">
        {menuItem.items.map((item, idx) => {
          return (
            <a
              key={idx}
              {...itemProps[idx]}
              href="https://example.com"
              id={`menuitem${idx}`}
            >
              {item}
            </a>
          );
        })}
      </div>
    </React.Fragment>
  );
}
