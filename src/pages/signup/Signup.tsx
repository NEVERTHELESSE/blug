import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

export default function CreateAccount() {
  const [userInfo, setUserinfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const api = import.meta.env.VITE_API;
  function changeUserInfo(e: ChangeEvent<HTMLInputElement>) {
    setUserinfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function signUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userInfo.password != userInfo.confirmPassword) {
      alert("password not match");
    } else {
      axios.post(api + "user/createAccount", { userInfo }).then((res) => {
        if (res.data.username) {
          enqueueSnackbar("user successfully created", { variant: "success" });
          window.location.replace("/");
        } else if (res.data == "duplicate") {
          enqueueSnackbar("user already exist! kindly login", {
            variant: "warning",
          });
        } else {
          enqueueSnackbar(
            "There was an error while creating user!! kindly try again",
            { variant: "error" }
          );
        }
      });
    }
  }

  return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <form
        onSubmit={signUp}
        className="bg-secondaryColor flex flex-col p-5 rounded-2xl w-[30rem] items-center"
      >
        <div className="flex items-center">
          <div className="size-[3rem]">
            <img src="/logo.png" alt="" />
          </div>
          <span className="text-2xl font-bold">Blugs</span>
        </div>
        <input
          type="text"
          required
          placeholder="Username"
          name="username"
          className="w-full bg-fadedColor p-4 my-3 rounded-2xl "
          minLength={3}
          onChange={changeUserInfo}
        />
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
        <input
          type="password"
          required
          placeholder="Confirm Password"
          onChange={changeUserInfo}
          name="confirmPassword"
          className="w-full bg-fadedColor p-4 my-3 rounded-2xl "
        />
        <button
          type="submit"
          className="bg-primaryColor text p-4 rounded-2xl w-full"
        >
          Signup
        </button>
        <p className="text-center my-2">Already have an account?</p>
        <Link to="/signin" className="text-center my-2">
          Signin
        </Link>
      </form>
    </div>
  );
}
