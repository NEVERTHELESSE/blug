import React from "react";
import {
  FiShare,
  FiThumbsUp,
  FiMessageCircle,
  FiShare2,
  FiLink,
  FiSave,
} from "react-icons/fi";

export default function PostReaction() {
  const style =
    "flex items-center hover:bg-secondaryColor cursor-pointer p-2 rounded-2xl";
  return (
    <div className="text-2xl flex w-full border-y border-fgColor items-center justify-between">
      <div className={style}>
        <FiThumbsUp />
        <span>23</span>
      </div>
      <div className={style}>
        <FiMessageCircle />
        <span>34</span>
      </div>
      <div className={style}>
        <FiShare2 />
        <span>34</span>
      </div>
      <div className={style}>
        <FiLink />
      </div>
    </div>
  );
}
