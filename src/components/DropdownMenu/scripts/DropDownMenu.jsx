import React from "react";
import useDropdownMenu1 from "./useDropdownMenu1";

export default function DropDownMenu({ menuItem }) {
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
            const {
              buttonProps: buttonProps1,
              itemProps: itemProps1,
              isOpen: isOpen1,
              setIsOpen,
            } = useDropdownMenu1(item.items.length);

            return (
              <React.Fragment>
                {/* <a {...itemProps[idx]}> */}
                <a
                  {...buttonProps1}
                  {...itemProps[idx]}
                  className="sub-demo-button demo-button"
                >
                  {item.name}
                </a>

                <div
                  className={`sub-demo-menu demo-menu ${
                    isOpen1 ? "visible" : ""
                  }`}
                  role="menu"
                >
                  {item.items.map((itm, idx) => {
                    return (
                      <a
                        className="demo-menuitem"
                        key={idx}
                        {...itemProps1[idx]}
                        href="https://example.com"
                        id={`menuitem${idx}`}
                      >
                        {itm}
                      </a>
                    );
                  })}
                </div>
                {/* </a> */}
              </React.Fragment>
              // <a
              //   key={idx}
              //   className="sub-demo"
              //   {...itemProps[idx]}
              //   id={`menuitem${idx}`}
              //   // onClick={(e) => pressButton(e, itemProps[idx])}
              // >
              //   <DropDownMenu menuItem={item} />
              // </a>
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
