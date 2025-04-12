import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "../../components/Image";
import { Link } from "react-router-dom";
export default function HomeDescription() {
  const descriptions = [
    "Your Destination for Creativity Knowledge and Growth",
    1000,
    " Discover breathtaking destinations, travel tips",
    1000,
    "developers and designers, covering coding ",
    1000,
    "Your  source for the latest in  TV shows, and entertainment trends.",
    1000,
    "Tutorials, UI/UX trends, and software development insights.",
    1000,
  ];

  return (
    <main className="my-12 flex justify-between">
      <div className=" w-[70%]">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          <TypeAnimation
            sequence={descriptions}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </h1>
        <p className="my-4 md:text-2xl font-extrabold text-fadedColor">
          Learn from entrepreneurs and industry leaders about business
          strategies, funding, and innovation
        </p>
      </div>
      <Link
        to="/write"
        className="border rounded-full flex justify-center items-center  flex-col border-fgColor size-[5rem] md:size-[10rem]"
      >
        <div className="size-[2rem] md:size-[4rem] animate-spin spin">
          <img src="/logo.png" alt="" />
        </div>
        <p className="text-center">Create an article</p>
      </Link>
    </main>
  );
}
