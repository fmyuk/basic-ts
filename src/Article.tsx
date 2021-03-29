import React from "react";
import { Title } from "./Blog";
import LikeButton from "./LikeButton";

const Article = (props: Title) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>順番は{props.order}です。</p>
      <p>著者：{props.author}</p>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" checked={props.isPublished} onClick={() => props.toggle()}></input>
      <LikeButton count={props.count} />
    </div>
  );
}

export default Article;
