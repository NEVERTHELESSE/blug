import React, { FormEvent, useContext } from "react";
import Image from "../../components/Image";
import { FiSend } from "react-icons/fi";
import { userContext } from "../../App";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

export default function AddComment({ postId, comment, setComment }) {
  const { author } = useContext(userContext);
  const api = import.meta.env.VITE_API;

  function addToComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setComment("");
    axios
      .post(`${api}post/addComment/${postId}`, {
        id: author._id,
        username: author.username,
        profilePics: author.profilePics,
        comment,
      })
      .then((res) => {
        if (res.data) {
          enqueueSnackbar("comment successfully added!", {
            variant: "success",
          });
        }
      });
  }
  return (
    <form
      onSubmit={addToComment}
      className="my-4 bg-secondaryColor p-2 rounded-2xl flex items-center relative"
    >
      <div className="size-[4rem] rounded-full overflow-hidden ">
        <Image path={author.profilePics} />
      </div>
      <input
        type="text"
        placeholder={`${author.username} type your comment...`}
        className="rounded-2xl  text-2xl py-3 px-8 mx-3 bg-fadedColor w-full"
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className=" right-[2rem] bg-primaryColor py-5 px-7 rounded-2xl cursor-pointer"
        type="submit"
      >
        <FiSend />
      </button>
    </form>
  );
}
