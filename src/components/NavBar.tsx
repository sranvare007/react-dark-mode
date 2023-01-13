import React, { useRef, useState } from "react";
import { GiMusicalNotes } from "react-icons/gi";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/darkMode/darkModeFlag";

export default function NavBar() {
  // const [darkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const darkModeEnabled = useSelector((state) => state.darkModeFlag.darkMode);
  const dispatch = useDispatch();

  const dispatchToggleDarkMode = () => {
    if (darkModeEnabled) {
      document.documentElement.classList.remove("dark");
      dispatch(toggleDarkMode(!darkModeEnabled));
    } else {
      document.documentElement.classList.add("dark");
      dispatch(toggleDarkMode(!darkModeEnabled));
    }
  };

  return (
    <div
      className={`flex flex-row items-center justify-between bg-light-mode-background w-full text-light-mode-text pl-6 pr-12 dark:bg-dark-mode-background dark:text-dark-mode-text`}
    >
      <div className={`flex flex-row items-center`}>
        <GiMusicalNotes size={40} className={`-mb-4`} />
        <p className={`font-dancing-script text-3xl px-4 py-5`}>Music</p>
        <GiMusicalNotes size={40} className={`-mt-4`} />
      </div>

      {darkModeEnabled ? (
        <BsFillSunFill
          size={30}
          color={"#FFFFFF"}
          onClick={dispatchToggleDarkMode}
        />
      ) : (
        <BsFillMoonFill
          size={30}
          color={"#000000"}
          onClick={dispatchToggleDarkMode}
        />
      )}
    </div>
  );
}
