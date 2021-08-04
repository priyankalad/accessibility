import logo from "./logo.svg";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu";
import { useEffect } from "react";
import Menubar from "./components/DropdownMenu/scripts/MenubarLinks";

function App() {
  useEffect(() => {
    var menubar = new Menubar(document.getElementById("menubar1"));
    menubar.init();
  }, []);
  return <DropdownMenu />;
}

export default App;
