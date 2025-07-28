import React from "react";
import Image from "../../components/Image";
import HomeAuthor from "./HomeAuthor";
import HomePostOption from "./HomePostOption";
import { Link } from "react-router-dom";
import PostReaction from "./PostReaction";
import axios from "axios";
import useSWR from "swr";
import { swrType } from "../../types/swrType";

export default function HomeFirstPost() {
  // const api = import.meta.env.VITE_API;
  // const fetcher = (url: string) =>
  //   axios.post(api + "post/trendingPost").then((res) => res.data);
  // const { data, error, isLoading }: swrType = useSWR(
  //   `${api}post/trendingPost`,
  //   fetcher
  // );
  const data = {
    author: {
      username: "ajibola",
      profilePics: "profile.png",
    },
    likes: [],
    shares: [],
    _id: "67f252e0cbc885044d11b7e6",
    title: "What can i build with ruby?",
    body: "<p>Ruby is a super flexible language, best known for its simplicity and clean syntax. While it's not as trendy as it once was, especially in startups, it’s still a great language to build with — especially when paired with <strong>Ruby on Rails</strong>, its most famous web framework.</p><p>Here’s what you can build with Ruby:</p><h3>🧱 Web Applications</h3><p><strong>Ruby on Rails</strong> makes it crazy fast to build full-stack web apps.</p><ul><li>Blogs, forums, marketplaces (like Etsy clones)</li><li>SaaS platforms (like project management tools)</li><li>Social networks (like early Twitter — which was originally built with Rails)</li><li>Booking systems or CRMs</li></ul><h3>🔧 APIs / Backends</h3><p>Rails or <strong>Sinatra</strong> (a minimal framework) can power REST or GraphQL APIs.</p><ul><li>Mobile app backends</li><li>Headless CMS</li><li>Microservices</li></ul><h3>💻 Command-Line Tools / Scripts</h3><p>Ruby is awesome for scripting, especially for DevOps or automation.</p><ul><li>File renamers, backup scripts, report generators</li><li>Deployment tools</li><li>Cronjob scripts</li></ul><h3>🎮 Games (though not the go-to)</h3><p>You can build simple 2D games using gems like:</p><ul><li><strong>Gosu</strong> – for game development (good for small 2D games)</li><li><strong>Ruby2D</strong> – beginner-friendly 2D game library</li></ul><p>But for serious games, C++/C#/JS is more common.</p><h3>🤖 Bots and Automation</h3><p>You can build:</p><ul><li>Discord or Slack bots</li><li>Web scraping bots (e.g., with <strong>Nokogiri</strong>)</li><li>Twitter/X automation bots (using APIs)</li></ul><h3>📊 Data Processing / ETL</h3><p>Ruby can do data processing, though Python is more popular now.</p><ul><li>CSV, JSON, XML processors</li><li>Small ETL pipelines</li><li>Custom report generators</li></ul><h3>🧪 Testing / QA Tools</h3><p>Ruby is used in automation testing — many QA teams love:</p><ul><li><strong>RSpec</strong> – for testing Ruby code</li><li><strong>Capybara</strong> – for simulating user actions in browsers</li><li><strong>Cucumber</strong> – for behavior-driven development</li></ul><h3>💡 Some Fun Ideas to Try</h3><ul><li>A personal budget tracker (Rails + SQLite/Postgres)</li><li>A simple blog engine (Rails or Sinatra)</li><li>A meme generator CLI</li><li>A URL shortener</li><li>A job board</li><li>A Ruby game with Gosu</li><li>A daily quote Slack bot</li></ul><p><br></p>",
    imageUrl: "car.jpg",
    category: "first",
    createdAt: "2025-04-06T10:09:36.378Z",
    updatedAt: "2025-04-07T16:26:58.314Z",
    __v: 0,
    comments: [
      {
        id: "67f14c0d9c858abf09ce2837",
        username: "neverthelesse",
        profilePics: "profile.png",
        comment: "what a nice post",
      },
      {
        id: "67f14c389c858abf09ce2839",
        username: "micheal",
        profilePics: "profile.png",
        comment: "i really like this post",
      },
      {
        id: "67f242e17b82f7232e77d057",
        username: "ajibola",
        profilePics: "profile.png",
        comment: "what a cool post",
      },
      {
        id: "67f242e17b82f7232e77d057",
        username: "ajibola",
        profilePics: "profile.png",
        comment: "i really like the post",
      },
      {
        id: "67f242e17b82f7232e77d057",
        username: "ajibola",
        profilePics: "profile.png",
        comment: "that's my comment",
      },
      {
        id: "67f242e17b82f7232e77d057",
        username: "ajibola",
        profilePics: "profile.png",
        comment: "what a nice post",
      },
    ],
  };
  return (
    <main className="md:w-[50%] my-8">
      <>
        <p className="text-center text-2xl">Most Trending</p>
        <Link to={`/postId?${data._id}`}>
          <div className="w-full border box rounded-2xl overflow-hidden h-[15rem] md:h-[25rem]  bg-gradient-to-r from-secondaryColor to-fadedColor">
            <Image path={data.imageUrl} />
          </div>
          <h3 className="text-3xl font-bold my-2">
            How to drive car like a pro
          </h3>
          <HomePostOption />
        </Link>
        <PostReaction like={39} comment={194} share={29} />
        <HomeAuthor author={data.author} />
        <div
          className="text-2xl text-justify"
          dangerouslySetInnerHTML={{ __html: data.body.slice(0, 300) }}
        ></div>
      </>
    </main>
  );
}
