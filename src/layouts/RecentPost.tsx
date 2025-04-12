import React, { useState } from "react";
import Image from "../components/Image";
import HomePostOption from "../pages/home/HomePostOption";
import HomeAuthor from "../pages/home/HomeAuthor";
import { Link } from "react-router-dom";
import PostReaction from "../pages/home/PostReaction";

import axios from "axios";
import useSWR from "swr";
import { swrType } from "../types/swrType";
import RecentPostLoading from "../components/loading/RecentPostLoading";
export default function RecentPost() {
  const api = import.meta.env.VITE_API;
  const fetcher = (url: string) =>
    axios.post(api + "post/posts").then((res) => res.data);
  const { data, error, isLoading }: swrType = useSWR(
    `${api}post/posts`,
    fetcher
  );

  return (
    <section className="my-4 flex flex-col justify-center items-center">
      <p className="text-3xl text-gray-800 my-4">Recent Post</p>
      {data?.map((list) => (
        <div className="flex my-3 box rounded-3xl items-center" key={list._id}>
          <Link
            to={`postId?${list._id}`}
            className="min-w-[30rem] max-w-[30rem] h-[20rem] rounded-l-3xl overflow-hidden box border bg-gradient-to-r from-secondaryColor to-fadedColor"
          >
            <Image path={list.imageUrl} />
          </Link>
          <div className="ml-4">
            <h3 className="text-3xl font-extrabold">{list.title}</h3>
            <HomePostOption />
            <HomeAuthor author={list.author} />
            <div
              dangerouslySetInnerHTML={{ __html: list.body.slice(0, 300) }}
            ></div>
            <Link
              to="/post"
              className="underline bg-primaryColor  p-2  rounded-lg my-7"
            >
              Read More
            </Link>
            <PostReaction />
          </div>
        </div>
      ))}
      <button className="text-2xl bg-primaryColor animate-pulse  py-2  px-6 rounded-full box">
        More Post
      </button>
    </section>
  );
}
