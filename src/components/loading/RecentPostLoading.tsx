import React from "react";

export default function RecentPostLoading() {
  return (
    <div className="border rounded-3xl w-full flex items-center">
      <div className="w-[30rem] rounded-l-3xl h-[20rem] animate-pulse bg-gray-500"></div>
      <div className="ml-4 flex flex-col  ">
        <div className="w-[50rem] bg-gray-500 rounded-full h-[2rem] animate-pulse"></div>
        <div className="w-[40rem] bg-gray-500 rounded-full h-[2rem] my-6 animate-pulse"></div>
        <div className="flex my-5">
          <div className="size-[2rem] rounded-full bg-gray-500 animate-pules"></div>
          <div className="w-[20rem] rounded-2xl h-[2rem] bg-gray-600 ml-2 animate-pulse"></div>
        </div>
        <div className="w-[40rem] bg-gray-500 rounded-2xl h-[5rem] my-3 animate-pulse"></div>
      </div>
    </div>
  );
}
