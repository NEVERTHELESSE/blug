import React from "react";
import Image from "../../components/Image";
import HomeAuthor from "./HomeAuthor";
import HomePostOption from "./HomePostOption";
import { Link } from "react-router-dom";
import PostReaction from "./PostReaction";

export default function HomeTopPost() {
  const lists = ["top post", "recent post", "trending", "new post"];
  return (
    <section className="ml-4 my-8 md:w-[50%]">
      <p className="text-center text-2xl">Top Post</p>
      {lists.map((list, index) => (
        <section
          key={index}
          className="flex flex-col border-b my-2 justify-center "
        >
          <main className=" flex w-full items-center box rounded-2xl  hover:bg-transparent duration-700 cursor-pointer">
            <div className="size-[10rem] overflow-hidden rounded-l-2xl bg-gradient-to-r from-secondaryColor to-fadedColor">
              <Image path={"blug" + (index + 1) + ".webp"} />
            </div>
            <div className="ml-2">
              <HomePostOption />
              <h2 className="text-2xl font-bold">
                How to Optimize Database Performance
              </h2>
              {/* <HomeAuthor /> */}
              <PostReaction />
            </div>
          </main>
          <Link
            to={`/post${list}`}
            className="text-center capitalize text-blue-500 underline "
          >
            More on {list}
          </Link>
        </section>
      ))}
    </section>
  );
}
