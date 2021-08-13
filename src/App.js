import logo from "./logo.svg";
import DropdownMenu from "./components/DropdownMenu";
import React, { useEffect } from "react";
import Menubar from "./components/DropdownMenu/scripts/MenubarLinks";
import Dropdown from "./components/Dropdown";
import useDropdownMenu1 from "./components/DropdownMenu/scripts/useDropdownMenu1";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import "./App.css";
import Navigation from "./components/DropdownMenu/scripts/Navigation";
import BurgerMenu from "./components/BurgerMenu";

function App() {
  return (
    <main>
      <h1>Exrcise for web accessibility</h1>
      <BurgerMenu />
      {/* <Navigation /> */}
    </main>
  );

  // return <Dropdown />;
}

export default App;
