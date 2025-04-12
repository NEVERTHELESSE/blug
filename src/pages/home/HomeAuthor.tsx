import React from "react";
import Image from "../../components/Image";
import { Link } from "react-router-dom";

export default function HomeAuthor({ author }) {
  return (
    <div>
      <Link to={`/user`} className="flex p-2 rounded-2xl items-center ">
        <div className="size-8 rounded-full overflow-hidden bg-gradient-to-r from-secondaryColor to-fadedColor">
          <Image path={author.profilePics} />
        </div>
        <p className=" font-bold ml-1 italic">{author.username}</p>
      </Link>
    </div>
  );
}
