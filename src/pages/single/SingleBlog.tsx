import React, { Suspense, lazy, useState } from "react";
import Image from "../../components/Image";
import { Helmet } from "react-helmet";
import HomeAuthor from "../home/HomeAuthor";
import HomePostOption from "../home/HomePostOption";
import { FiBookmark, FiSave, FiTrash2 } from "react-icons/fi";
import PostReaction from "../home/PostReaction";
import AddComment from "./AddComment";
import axios from "axios";
import useSWR from "swr";
const UserComment = lazy(() => import("./UserComment"));

export default function SingleBlog() {
  const id = window.location.search.split("?")[1];
  const api = import.meta.env.VITE_API;
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSWR(`${api}post/postid/${id}`, fetcher);
  const [comment, setComment] = useState("");
  return (
    <>
      {data ? (
        <section>
          <Helmet title={`${data.title}`} />
          <div className="my-12 flex justify-between">
            <div className="w-[50%]">
              <h2 className="text-6xl font-extrabold">{data.title}</h2>
              <HomeAuthor author={data.author} />
              <HomePostOption />
              <div className=" flex justify-between">
                <div className="flex text-3xl my-4 hover:bg-secondaryColor p-2 rounded-2xl">
                  <FiBookmark /> <span>Save post</span>
                </div>
                <div className="flex text-3xl my-3 hover:bg-secondaryColor p-2 rounded-2xl cursor-pointer">
                  <FiTrash2 /> <span>Delete post</span>
                </div>
              </div>
            </div>
            <div className="w-[40%] float-left">
              <Image path={data.imageUrl} />
            </div>
          </div>

          <div
            className="text-2xl text-justify"
            dangerouslySetInnerHTML={{ __html: data.body }}
          ></div>
          <PostReaction />
          <AddComment
            postId={data._id}
            comment={comment}
            setComment={setComment}
          />
          <Suspense fallback="loading">
            <UserComment comments={data.comments} />
          </Suspense>
        </section>
      ) : (
        <p>invalid post id</p>
      )}
    </>
  );
}
