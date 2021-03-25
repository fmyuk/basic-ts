import React from "react";

type Title = {
  title: string,
  order: number,
  isPublished: boolean,
  author: string
}

const Article = (props: Title) => {
  let publishState = "";
  if (props.isPublished) {
    publishState = "公開";
  } else {
    publishState = "非公開";
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <p>順番は{props.order}です。</p>
      <p>著者：{props.author}</p>
      <p>{publishState}</p>
    </div>
  );
}

export default Article;
