import React from "react";
import useDropdownMenu1 from "./useDropdownMenu1";

export default function SubMenu({ menuItem }) {
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
          // if (typeof item === "object") {
          //   return (
          //     <li
          //       key={idx}
          //       className="sub-demo"
          //       {...itemProps[idx]}
          //       id={`menuitem${idx}`}
          //     >
          //       <DropDownMenu menuItem={item} />
          //     </li>
          //   );
          // } else {
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
          //}
        })}
      </div>
    </React.Fragment>
  );
}
