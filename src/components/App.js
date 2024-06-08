import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
