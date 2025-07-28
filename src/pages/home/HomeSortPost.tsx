import React, { useState } from "react";

const options = [
  "",
  "webDesign",
  "developer",
  "nature",
  "databases",
  "cloud",
  "marketing",
  "accounting",
  "programming",
  "health",
  "physics",
  "engineer",
  "linux",
  "student",
  "updates",
];
export default function HomeSortPost() {
  const [selected, setSelected] = useState("");

  return (
    <main className="w-full p-2 md:p-4 box rounded-full my-4 sticky top-20 sm:top-10 filter  overflow-x-auto  flex">
      {options.map((option, index) => (
        <p
          key={index}
          className={`p-1 md:py-2 md:px-4 cursor-pointer capitalize duration-700 hover:bg-fadedColor rounded-full ${
            option == selected && "bg-primaryColor"
          }`}
          onClick={() => setSelected(option)}
        >
          {option == "" ? "allPosts" : option}
        </p>
      ))}
    </main>
  );
}
