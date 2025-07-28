import React, { Suspense, lazy } from "react";
import { navigates } from "./navigate";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";

const UserAccount = lazy(() => import("./UserAccount"));
export default function Navigation() {
  const userLocation = useLocation().pathname;
  return (
    <section>
      <main className="w-[50%] smm:w-[45%] hidden md:flex justify-between items-center">
        {navigates.map((navigate, index) => (
          <Link
            to={navigate.link}
            key={index}
            className={`smm:text-2xl mx-3 sm:mx-6 capitalize p-1 smm:p-2 ${
              navigate.active == userLocation && "bg-primaryColor rounded-2xl"
            }`}
          >
            {navigate.title}
          </Link>
        ))}
        <Suspense>
          <UserAccount />
        </Suspense>
      </main>
      <Menu />
    </section>
  );
}
