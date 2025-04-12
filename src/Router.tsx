import { createBrowserRouter } from "react-router-dom";
import HomeLoading from "./components/loading/HomeLoading";
import React, { lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/home/Home"));
const Write = lazy(() => import("./pages/write/Write"));
const Signin = lazy(() => import("./pages/signin/Signin"));
const Signup = lazy(() => import("./pages/signup/Signup"));
const SingleBlog = lazy(() => import("./pages/single/SingleBlog"));
const Category = lazy(() => import("./pages/category/Category"));
export const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<HomeLoading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/write",
        element: (
          <Suspense fallback={<HomeLoading />}>
            <Write />
          </Suspense>
        ),
      },
      {
        path: "/postId",
        element: (
          <Suspense fallback={<HomeLoading />}>
            <SingleBlog />
          </Suspense>
        ),
      },
      {
        path: "/category",
        element: (
          <Suspense fallback={<HomeLoading />}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={<HomeLoading />}>
            <Signin />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<HomeLoading />}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
]);
