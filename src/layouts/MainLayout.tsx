import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="p-2 smp-8 :px-2 smm:px-[8rem] py-8">
      <Header />
      <Outlet />
    </div>
  );
}
