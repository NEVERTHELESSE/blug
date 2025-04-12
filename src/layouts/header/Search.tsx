import React from "react";

export default function Search() {
  return (
    <>
      <form>
        <input
          placeholder="Search article..."
          className="border border-primaryColor bg-fadedColor  sm:w-[18rem] p-1 sm:py-2 sm:px-2 smm:px-8 rounded-full"
        />
      </form>
    </>
  );
}
