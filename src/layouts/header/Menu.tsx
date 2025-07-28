import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { navigates } from "./navigate";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";

export default function Menu() {
  const [show, setShow] = useState(false);
  function changeShow() {
    setShow((prev) => !prev);
  }
  return (
    <div
      className="flex md:hidden z-50"
      style={{
        zIndex: 1000,
      }}
    >
      <FiAlignJustify size={30} onClick={changeShow} />
      <div
        className=" slm:w-[14rem] sm:w-[20rem]  h-screen bg-fadedColor  shadow absolute  top-0 p-8 flex flex-col duration-700"
        style={{
          right: show ? "0" : "30rem",
        }}
      >
        <FaX
          size={30}
          onClick={changeShow}
          color="red"
          className="text-right"
        />

        {navigates.map((navigate) => (
          <Link
            key={navigate.title}
            to={navigate.link}
            className="text-2xl capitalize border-b p-2 hover:bg-primaryColor duration-500"
          >
            {navigate.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
