import React from "react";
import { IKImage } from "imagekitio-react";

const Endpoint = import.meta.env.VITE_IMAGEKIT_ENDPOINT;

export default function Image({ path }) {
  return (
    <img
      className="size-full object-cover hover:scale-110 duration-700 bg-blue-500"
      src={`/images/${path}`}
    />
    // <IKImage
    //   path={path}
    //   loading="lazy"
    //   alt=""
    //   lqip={{
    //     active: true,
    //     quality: 20,
    //   }}
    //   className="size-full object-cover hover:scale-110 duration-700"
    //   urlEndpoint={Endpoint}
    // />
  );
}
