import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

export default function Signin() {
  const [userInfo, setUserinfo] = useState({
    email: "",
    password: "",
  });
  const api = import.meta.env.VITE_API;
  function changeUserInfo(e: ChangeEvent<HTMLInputElement>) {
    setUserinfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function Login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    axios.post(api + "user/login", { userInfo }).then((res) => {
      console.log(res.data);
      if (res.data.token) {
        enqueueSnackbar("user successfully login", { variant: "success" });
        window.location.replace("/");
        window.localStorage.setItem("token", res.data.token);
        window.location.replace("/");
      } else if (res.data == "no user found") {
        enqueueSnackbar("invalid username or password", { variant: "warning" });
      } else {
        enqueueSnackbar(
          "there was an error while processing your request!! kindly try again",
          { variant: "error" }
        );
      }
    });
  }

  return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <form
        onSubmit={Login}
        className="bg-secondaryColor flex flex-col p-5 rounded-2xl w-[30rem] items-center"
      >
        <div className="flex items-center">
          <div className="size-[3rem]">
            <img src="/logo.png" alt="" />
          </div>
          <span className="text-2xl font-bold">Blugs</span>
        </div>
        <input
          type="email"
          required
          placeholder="Email Address"
          name="email"
          onChange={changeUserInfo}
          className="w-full bg-fadedColor p-4 my-3 rounded-2xl "
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="w-full bg-fadedColor p-4 my-3 rounded-2xl "
          onChange={changeUserInfo}
          name="password"
        />

        <button
          type="submit"
          className="bg-primaryColor text p-4 rounded-2xl w-full"
        >
          Signin
        </button>
        <p className="text-center my-2">Don't have an account?</p>
        <Link to="/signup" className="text-center my-2">
          Signup
        </Link>
      </form>
    </div>
  );
}
