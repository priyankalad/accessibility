import logo from "./logo.svg";
import DropdownMenu from "./components/DropdownMenu";
import React, { useEffect } from "react";
import Menubar from "./components/DropdownMenu/scripts/MenubarLinks";
import Dropdown from "./components/Dropdown";
import useDropdownMenu1 from "./components/DropdownMenu/scripts/useDropdownMenu1";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import "./App.css";
import Navigation from "./components/DropdownMenu/scripts/Navigation";

function App() {
  return <Navigation />;

  // return <Dropdown />;
}

export default App;
