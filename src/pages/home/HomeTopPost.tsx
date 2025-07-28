import React from "react";
import Image from "../../components/Image";
import HomeAuthor from "./HomeAuthor";
import HomePostOption from "./HomePostOption";
import { Link } from "react-router-dom";
import PostReaction from "./PostReaction";
import { datas } from "../../layouts/data";
import { topPost } from "./topPost";

export default function HomeTopPost() {
  const lists = ["top post", "recent post", "trending", "new post"];
  return (
    <section className="ml-4 my-8 md:w-[50%]">
      <p className="text-center text-2xl">Top Post</p>
      {topPost.map(({ imageUrl, title, id, like, comment, share }) => (
        <section
          key={id}
          className="flex flex-col border-b my-2 justify-center "
        >
          <main className="flex w-full items-center box rounded-2xl  hover:bg-transparent duration-700 cursor-pointer">
            <Link
              to={`post?${id}`}
              className="w-[15rem]  overflow-hidden rounded-l-2xl bg-red-600 "
            >
              <img
                src={`/images/${imageUrl}`}
                className="min-h-full bg-red-600 object-cover"
                alt=""
              />
              {/* <Image path={imageUrl} /> */}
            </Link>
            <div className="ml-2 w-full">
              <HomePostOption />
              <h2 className="sm:text-2xl font-bold">{title}</h2>
              {/* <HomeAuthor /> */}
              <PostReaction like={like} comment={comment} share={share} />
            </div>
          </main>
          <Link
            to={`/post${id}`}
            className="text-center capitalize text-blue-500 underline "
          >
            More on trending
          </Link>
        </section>
      ))}
    </section>
  );
}
