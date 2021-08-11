import React from "react";
import useDropdownMenu1 from "./useDropdownMenu1";

export default function SubMenu({ menuItem, parentItemProps, dataKey }) {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu1(
    menuItem.items.length
  );

  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <React.Fragment>
      <a {...buttonProps} {...parentItemProps} className="sub-demo-button">
        {menuItem.name}
      </a>

      <div className={`sub-demo-menu ${isOpen ? "visible" : ""}`} role="menu">
        {menuItem.items.map((itm, idx) => {
          return (
            <a
              className="demo-menuitem"
              key={idx}
              {...itemProps[idx]}
              href="https://example.com"
              id={`submenuitem${idx}_${dataKey}`}
            >
              {itm}
            </a>
          );
        })}
      </div>
    </React.Fragment>
  );
}
