import React from "react";
import Image from "../../components/Image";
import HomeAuthor from "./HomeAuthor";
import HomePostOption from "./HomePostOption";
import { Link } from "react-router-dom";
import PostReaction from "./PostReaction";
import axios from "axios";
import useSWR from "swr";
import { swrType } from "../../types/swrType";

export default function HomeFirstPost() {
  const api = import.meta.env.VITE_API;
  const fetcher = (url: string) =>
    axios.post(api + "post/trendingPost").then((res) => res.data);
  const { data, error, isLoading }: swrType = useSWR(
    `${api}post/trendingPost`,
    fetcher
  );
  return (
    <main className="md:w-[50%] my-8">
      {data && (
        <>
          <p className="text-center text-2xl">Most Trending</p>
          <Link to={`/postId?${data._id}`}>
            <div className="w-full border box rounded-2xl overflow-hidden h-[15rem] md:h-[25rem]  bg-gradient-to-r from-secondaryColor to-fadedColor">
              <Image path={data.imageUrl} />
            </div>
            <h3 className="text-3xl font-bold my-2">
              How to drive car like a pro
            </h3>
            <HomePostOption />
          </Link>
          <PostReaction />
          <HomeAuthor author={data.author} />
          <div
            className="text-2xl text-justify"
            dangerouslySetInnerHTML={{ __html: data.body.slice(0, 300) }}
          ></div>
          <Link className="bg-primaryColor p-2 rounded-2xl" to="/post">
            Read More
          </Link>
        </>
      )}
    </main>
  );
}
