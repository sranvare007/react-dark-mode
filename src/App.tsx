import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";

export default function App() {
  const darkModeEnabled = useSelector((state) => state.darkModeFlag.darkMode);

  return (
    <div className={`w-screen h-screen flex flex-col`}>
      <NavBar />
      <div
        className={`w-full flex flex-1 items-center justify-center bg-light-mode-background dark:bg-dark-mode-background`}
      >
        {darkModeEnabled ? (
          <p
            className={`text-dark-mode-text font-extrabold font-dancing-script text-3xl`}
          >
            Dark mode is active now!
          </p>
        ) : (
          <p
            className={`text-light-mode-text font-extrabold font-dancing-script text-3xl`}
          >
            Light mode is active now!
          </p>
        )}
      </div>
    </div>
  );
}
