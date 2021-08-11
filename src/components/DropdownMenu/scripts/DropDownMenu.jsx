import React from "react";
import SubMenu from "./SubMenu";
import useDropdownMenu1 from "./useDropdownMenu1";

export default function DropDownMenu({ dataKey, menuItem }) {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu1(
    menuItem.items.length
  );

  return (
    <React.Fragment>
      <button {...buttonProps} className="demo-button">
        {menuItem.name}
      </button>
      <div className={`demo-menu ${isOpen ? "visible" : ""}`} role="menu">
        {menuItem.items.map((item, idx) => {
          if (typeof item === "object") {
            return (
              <SubMenu
                dataKey={idx}
                menuItem={item}
                parentItemProps={itemProps[idx]}
              />
            );
          } else {
            return (
              <a
                className="demo-menuitem"
                key={idx}
                {...itemProps[idx]}
                href="https://example.com"
                id={`menuitem${idx}_${dataKey}`}
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
