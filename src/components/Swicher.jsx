import React, { useState } from "react";
import useDarkSide from "../../src/hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          sunColor="#fbb64e"
          moonColor="gray"
          checked={darkSide}
          onChange={toggleDarkMode}
          size={25}
        />
      </div>
    </>
  );
}
