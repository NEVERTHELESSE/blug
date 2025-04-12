import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
export default function Theme() {
  const [isLight, setIsLight] = useState(true);
  const theme = localStorage.getItem("theme");
  useEffect(() => {
    if (theme == "light") {
      setIsLight(true);
    } else if (theme == "dark") {
      setIsLight(false);
    }
  }, []);

  useEffect(() => {
    if (isLight) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [isLight]);

  function changeTheme() {
    setIsLight((prev) => !prev);
    if (!isLight) {
      window.localStorage.setItem("theme", "light");
    } else {
      window.localStorage.setItem("theme", "dark");
    }
  }
  const style = "text-2xl cursor-pointer";

  return (
    <>
      {isLight ? (
        <FiSun onClick={changeTheme} className={style} />
      ) : (
        <FiMoon onClick={changeTheme} className={style} />
      )}
    </>
  );
}
