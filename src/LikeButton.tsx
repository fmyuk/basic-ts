import React, { useState, useEffect } from "react";

const LikeButton = () => {
  const [count, counter] = useState(0);
  const [limit, release] = useState(true);

  const countUp = () => {
    counter(count + 1);
  };

  useEffect(() => {
    document.getElementById("counter")?.addEventListener("click", countUp);
    if (count >= 10) {
      counter(0);
    }
    return () => {
      document.getElementById("counter")?.removeEventListener("click", countUp);
    }
  }, [limit]);

  return (
    <div>
      <button id={"counter"}>いいね：{count}</button>
      <button onClick={() => release(!limit)}>もっといいねしたい！</button>
    </div>
  );
};

export default LikeButton;
