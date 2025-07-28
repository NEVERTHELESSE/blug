import React, { Suspense, createContext, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import HomeLoading from "./components/loading/HomeLoading";
import Header from "./layouts/header/Header";

const Home = lazy(() => import("./pages/home/Home"));
const Write = lazy(() => import("./pages/write/Write"));
const Signin = lazy(() => import("./pages/signin/Signin"));
const Signup = lazy(() => import("./pages/signup/Signup"));
const SingleBlog = lazy(() => import("./pages/single/SingleBlog"));
const Category = lazy(() => import("./pages/category/Category"));
export const userContext = createContext(null);
export default function App() {
  const [author, setAuthor] = useState({
    _id: "",
    username: "",
    profilePics: "",
  });
  return (
    <userContext.Provider value={{ author, setAuthor }}>
      <BrowserRouter>
        <main className="p-2 smp-8 :px-2 smm:px-[8rem] py-8">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<HomeLoading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/write"
              element={
                <Suspense fallback={<HomeLoading />}>
                  <Write />
                </Suspense>
              }
            />
            <Route
              path="/post"
              element={
                <Suspense fallback={<HomeLoading />}>
                  <SingleBlog />
                </Suspense>
              }
            />
            <Route
              path="/category"
              element={
                <Suspense fallback={<HomeLoading />}>
                  <Category />
                </Suspense>
              }
            />
            <Route
              path="/signin"
              element={
                <Suspense fallback={<HomeLoading />}>
                  <Signin />
                </Suspense>
              }
            />
            <Route
              path="/signup"
              element={
                <Suspense fallback={<HomeLoading />}>
                  <Signup />
                </Suspense>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
      <SnackbarProvider maxSnack={3} />
    </userContext.Provider>
  );
}
