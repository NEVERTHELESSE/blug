import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Image from "../../components/Image";
import axios from "axios";
import { useSelector } from "react-redux";
import { userContext } from "../../App";
import { enqueueSnackbar } from "notistack";

export default function Write() {
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function changeImage(e: ChangeEvent<HTMLInputElement>) {
    setSrc(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }
  const api = import.meta.env.VITE_API;
  const { author } = useContext(userContext);
  const formData = new FormData();

  function newPost(e: FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    e.preventDefault();
    formData.append("file", image);
    console.log(author);
    axios
      .post(`${api}post/newPost`, {
        body: value,
        title,
        imageUrl: fileName,
        author,
        category: "first",
      })
      .then((res) => console.log(res.data));
    setTimeout(() => {
      axios
        .post(`${api}test`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.success) {
            enqueueSnackbar("Post successfully uploaded", {
              variant: "success",
            });
          } else {
            enqueueSnackbar(
              "There was an error while uploading your post! kindly try again",
              { variant: "error" }
            );
          }
          setIsLoading(false);
          window.location.replace("/");
        });
    }, 2000);
  }
  return (
    <div className="flex flex-col w-full justify-center items-center my-20">
      <h2 className="text-3xl my-5 text-center">Create a new post</h2>
      <form onSubmit={newPost} className="w-[70%] flex flex-col  items-center">
        <input type="file" id="file" onChange={changeImage} />
        <label
          htmlFor="file"
          className="size-[20rem] rounded-2xl border border-fgColor border-separate border-spacing-7 flex justify-center overflow-hidden flex-col text-2xl place-items-center"
        >
          {src && <img src={src} alt="" className="size-full object-cover" />}
          {src == "" && (
            <div className="absolute text-center">
              <p>Drag or Drop your image </p>
              <p>or</p>
              <p>Choose your image </p>
            </div>
          )}
        </label>
        <input
          type="text"
          placeholder="Enter the title for your article"
          className="w-full bg-secondaryColor text-2xl border my-3 py-2 px-5"
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="w-full h-[20rem]"
        />
        {isLoading ? (
          <p className="bg-fadedColor my-12 text-2xl p-6 py-4 rounded-2xl cursor-not-allowed">
            Loading
          </p>
        ) : (
          <button className="bg-primaryColor my-12 text-2xl p-6 py-4 rounded-2xl">
            Upload Post
          </button>
        )}
      </form>
    </div>
  );
}
