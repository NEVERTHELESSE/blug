import React, { Suspense, lazy, useEffect, useState } from "react";
import Image from "../../components/Image";
import { Helmet } from "react-helmet";
import HomeAuthor from "../home/HomeAuthor";
import HomePostOption from "../home/HomePostOption";
import { FiBookmark, FiSave, FiTrash2 } from "react-icons/fi";
import PostReaction from "../home/PostReaction";
import AddComment from "./AddComment";
import { datas } from "../../layouts/data";
import { useLocation } from "react-router-dom";
const UserComment = lazy(() => import("./UserComment"));

export default function SingleBlog() {
  const id = useLocation().search.split("?")[1];

  const data = datas.find((r) => r._id == id);
  // const data = topPost.find((r) => r.id == id);
  console.log(id);
  console.log(data);
  const [comment, setComment] = useState("");

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {data ? (
        <section>
          <Helmet title={`${data.title}`} />
          <div className="my-12 sm:flex justify-between">
            <div className="sm:w-[50%]">
              <h2 className="text-2xl sm:text-6xl font-extrabold">
                {data.title}
              </h2>
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
              <div
                className="text-2xl text-justify"
                dangerouslySetInnerHTML={{ __html: data.body }}
              ></div>
            </div>
            <img
              src={`/images/${data.imageUrl}`}
              alt=""
              className=" sm:w-[40%] h-[30rem] bg-primaryColor float-left sticky top-20"
            />
          </div>

          <PostReaction
            like={data.likes.length}
            comment={data.comments.length}
            share={data.shares.length}
          />
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
