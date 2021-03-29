import React from "react";

const LikeButton = (props: { count: number }) => {
  return (
    <div>
      <button id={"counter"}>いいね：{props.count}</button>
    </div>
  );
};

export default LikeButton;
