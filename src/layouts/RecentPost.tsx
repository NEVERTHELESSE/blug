import React, { useState } from "react";
import Image from "../components/Image";
import HomePostOption from "../pages/home/HomePostOption";
import HomeAuthor from "../pages/home/HomeAuthor";
import { Link } from "react-router-dom";
import PostReaction from "../pages/home/PostReaction";

import axios from "axios";
import useSWR from "swr";
import { swrType } from "../types/swrType";
import { datas } from "./data";
export default function RecentPost() {
  // const api = import.meta.env.VITE_API;
  // const fetcher = (url: string) =>
  //   axios.post(api + "post/posts").then((res) => res.data);
  // const { data, error, isLoading }: swrType = useSWR(
  //   `${api}post/posts`,
  //   fetcher
  // );

  return (
    <section className="my-4 flex flex-col justify-center items-center">
      <p className="text-3xl text-gray-800 my-4">Recent Post</p>
      {datas.map(
        ({ likes, _id, imageUrl, title, author, body, comments, shares }) => (
          <div
            className="sm:flex my-3 box rounded-3xl items-center w-full"
            key={_id}
          >
            <Link
              to={`post?${_id}`}
              className="min-w-[30rem] max-w-[30rem] h-[20rem] rounded-l-3xl overflow-hidden box border bg-gradient-to-r from-secondaryColor to-fadedColor"
            >
              <Image path={imageUrl} />
            </Link>
            <div className="ml-4 w-full">
              <h3 className="text-3xl font-extrabold">{title}</h3>
              <HomePostOption />
              <HomeAuthor author={author} />
              <div
                dangerouslySetInnerHTML={{ __html: body.slice(0, 300) }}
              ></div>
              <Link
                to={`post?${_id}`}
                className="underline bg-primaryColor  p-2  rounded-lg my-7"
              >
                Read More
              </Link>
              <PostReaction
                like={likes.length}
                comment={comments.length}
                share={shares.length}
              />
            </div>
          </div>
        )
      )}
      <button className="text-2xl bg-primaryColor animate-pulse  py-2  px-6 rounded-full box">
        More Post
      </button>
    </section>
  );
}
