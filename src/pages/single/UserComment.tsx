import React from "react";
import Image from "../../components/Image";

export default function UserComment({ comments }) {
  const users = [1, 2, 3, 4, 5, 6];
  return (
    <div className="border-t my-5 py-4">
      {comments &&
        comments.map((comment) => (
          <div className="bg-secondaryColor my-3 rounded-2xl p-2 w-full flex">
            <div className="size-[4rem] overflow-hidden rounded-full bg-secondaryColor">
              <Image path={comment.profilePics} />
            </div>
            <div className="ml-4">
              <p className="text-2xl ">{comment.username}</p>
              <p className="font-bold">{comment.comment}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
