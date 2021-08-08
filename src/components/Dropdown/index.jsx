import React, { useEffect } from "react";
import "./styles.css";

export default function Dropdown() {
  useEffect(() => {
    const SPACEBAR_KEY_CODE = [0, 32];
    const ENTER_KEY_CODE = 13;
    const DOWN_ARROW_KEY_CODE = 40;
    const UP_ARROW_KEY_CODE = 38;
    const ESCAPE_KEY_CODE = 27;

    const list = document.querySelector(".dropdown__list");
    const listContainer = document.querySelector(".dropdown__list-container");
    const dropdownArrow = document.querySelector(".dropdown__arrow");
    const listItems = document.querySelectorAll(".dropdown__list-item");
    const dropdownSelectedNode = document.querySelector("#dropdown__selected");
    console.log("dropdownSelectedNode:", dropdownSelectedNode);
    const listItemIds = [];

    dropdownSelectedNode.addEventListener("click", (e) =>
      toggleListVisibility(e)
    );
    dropdownSelectedNode.addEventListener("keydown", (e) =>
      toggleListVisibility(e)
    );

    // Add each list item's id to the listItems array
    listItems.forEach((item) => listItemIds.push(item.id));

    listItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        setSelectedListItem(e);
        closeList();
      });

      item.addEventListener("keydown", (e) => {
        switch (e.keyCode) {
          case ENTER_KEY_CODE:
            setSelectedListItem(e);
            closeList();
            return;

          case DOWN_ARROW_KEY_CODE:
            focusNextListItem(DOWN_ARROW_KEY_CODE);
            return;

          case UP_ARROW_KEY_CODE:
            focusNextListItem(UP_ARROW_KEY_CODE);
            return;

          case ESCAPE_KEY_CODE:
            closeList();
            return;

          default:
            return;
        }
      });
    });

    function setSelectedListItem(e) {
      let selectedTextToAppend = document.createTextNode(e.target.innerText);
      dropdownSelectedNode.innerHTML = null;
      dropdownSelectedNode.appendChild(selectedTextToAppend);
    }

    function closeList() {
      list.classList.remove("open");
      dropdownArrow.classList.remove("expanded");
      listContainer.setAttribute("aria-expanded", false);
    }

    function toggleListVisibility(e) {
      let openDropDown =
        SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE;

      if (e.keyCode === ESCAPE_KEY_CODE) {
        closeList();
      }

      if (e.type === "click" || openDropDown) {
        list.classList.toggle("open");
        dropdownArrow.classList.toggle("expanded");
        listContainer.setAttribute(
          "aria-expanded",
          list.classList.contains("open")
        );
      }

      if (e.keyCode === DOWN_ARROW_KEY_CODE) {
        focusNextListItem(DOWN_ARROW_KEY_CODE);
      }

      if (e.keyCode === UP_ARROW_KEY_CODE) {
        focusNextListItem(UP_ARROW_KEY_CODE);
      }
    }

    function focusNextListItem(direction) {
      const activeElementId = document.activeElement.id;
      if (activeElementId === "dropdown__selected") {
        document.querySelector(`#${listItemIds[0]}`).focus();
      } else {
        const currentActiveElementIndex = listItemIds.indexOf(activeElementId);
        if (direction === DOWN_ARROW_KEY_CODE) {
          const currentActiveElementIsNotLastItem =
            currentActiveElementIndex < listItemIds.length - 1;
          if (currentActiveElementIsNotLastItem) {
            const nextListItemId = listItemIds[currentActiveElementIndex + 1];
            document.querySelector(`#${nextListItemId}`).focus();
          }
        } else if (direction === UP_ARROW_KEY_CODE) {
          const currentActiveElementIsNotFirstItem =
            currentActiveElementIndex > 0;
          if (currentActiveElementIsNotFirstItem) {
            const nextListItemId = listItemIds[currentActiveElementIndex - 1];
            document.querySelector(`#${nextListItemId}`).focus();
          }
        }
      }
    }
    return () => {
      dropdownSelectedNode.removeEventListener("click", toggleListVisibility);
      dropdownSelectedNode.removeEventListener("keydown", toggleListVisibility);
    };
  }, []);

  return (
    <main>
      <h1>Dropdown Sample</h1>
      <ul className="dropdown">
        <li className="dropdown__label">Label</li>

        <li>
          <div role="button" id="dropdown__selected" tabIndex="0">
            Option 1
          </div>
        </li>

        <li>
          <svg
            className="dropdown__arrow"
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fillRule="evenodd"
          >
            <path d="M10 0L5 5 0 0z"></path>
          </svg>
        </li>
        <li className="dropdown__list-container">
          <ul className="dropdown__list">
            <li className="dropdown__list-item" id="option-1" tabIndex="0">
              Option 1
            </li>
            <li className="dropdown__list-item" id="option-2" tabIndex="0">
              Option 2
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
