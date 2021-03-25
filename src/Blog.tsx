import React from "react";
import Article from "./Article";

export default class Blog extends React.Component {
  render() {
    const authorName: string = "user";
    return (
      <div>
        <Article
          title={"React の使い方"}
          order={1}
          isPublished={true}
          author={authorName}
        />
        <Article
          title={"JSX の使い方"}
          order={2}
          isPublished={true}
          author={authorName}
        />
        <Article
          title={"環境構築をしてみよう"}
          order={3}
          isPublished={false}
          author={authorName}
        />
      </div>
    );
  }
}