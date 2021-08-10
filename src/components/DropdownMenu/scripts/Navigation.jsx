import React from "react";
import DropDownMenu from "./DropDownMenu";

export default function Navigation() {
  const menuItems = [
    {
      name: "example1",
      items: ["sub1_example1", "sub2_example1", "sub3_example1"],
    },
    {
      name: "example2",
      items: ["sub1_example2", "sub2_example2", "sub3_example2"],
    },
    {
      name: "example3",
      items: ["sub1_example3", "sub2_example3"],
    },
    {
      name: "example4",
      items: [
        "sub1_example4",
        {
          name: "sub2_example4",
          items: [
            "sub1_sub2_example4",
            "sub2_sub2_example4",
            "sub3_sub2_example4",
          ],
        },
        "sub3_example4",
      ],
    },
  ];
  return (
    <ul className="nav" id="main_menu" aria-label="Main Menu" role="menubar">
      {menuItems.map((item, index) => {
        return (
          <li className="demo">
            <DropDownMenu key={index} menuItem={item} />
          </li>
        );
      })}
    </ul>
  );
}
