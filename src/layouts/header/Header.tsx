import React from "react";
import Navigation from "./Navigation";
import Search from "./Search";
import Theme from "./Theme";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Header() {
  return (
    <div className="flex items-center justify-between ">
      <Helmet title="Blugs" />
      <Link to="/" className="flex items-center">
        <div className="size-5 sm:size-10 ">
          <img src="/logo.png" alt="" />
        </div>
        <h3 className="hidden sm:flex smm:text-3xl font-extrabold">blugs</h3>
      </Link>
      <Search />
      <Theme />
      <Navigation />
    </div>
  );
}
