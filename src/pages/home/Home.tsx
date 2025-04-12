import React, { Suspense, lazy } from "react";
import PageIndicator from "../../components/PageIndicator";
import HomeDescription from "./HomeDescription";
import HomeSortPost from "./HomeSortPost";
import FirstPostLoading from "../../components/loading/FirstPostLoading";
import HomeTopPost from "./HomeTopPost";
import RecentPost from "../../layouts/RecentPost";

const HomeFirstPost = lazy(() => import("./HomeFirstPost"));
export default function Home() {
  return (
    <>
      <PageIndicator title="Home" description="Blogs & Article" />
      <HomeDescription />
      <HomeSortPost />
      <Suspense fallback={<FirstPostLoading />}>
        <div className="md:flex border-y">
          <HomeFirstPost />
          <HomeTopPost />
        </div>
        <RecentPost />
      </Suspense>
    </>
  );
}
