import React from "react";

export default function PageIndicator({ title, description }) {
  return (
    <div className="w-full font-bold my-4">
      <span className="mr-4">{title}</span>
      <span className="mr-4">-</span>
      <span className="mr-4">{description}</span>
    </div>
  );
}
