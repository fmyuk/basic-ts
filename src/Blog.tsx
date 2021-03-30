import React from "react";
import Article from "./Article";
import * as FooBar from "./components/FooBar";
import Hoge from "./components/Hoge";

export type Title = {
  title: string,
  order: number,
  author: string,
  // count: number
};

export type MyState = {
  isPublished: boolean,
  count: number
};

const Blog = () => {

  // componentDidMount() {
  //   document.getElementById("counter")?.addEventListener("click", () => this.countUp());
  // }

  // componentDidUpdate() {
  //   if (this.state.count >= 10) {
  //     this.setState(
  //       { count: 0 }
  //     );
  //   }
  // }

  // componentWillUnmount() {
  //   document.getElementById("counter")?.removeEventListener("counter", () => this.countUp());
  // }

  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };

  const authorName: string = "user";
  return (
    <div>
      <Article
        title={"React の使い方"}
        order={1}
        author={authorName}
        // count={this.state.count}
      />
      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </div>
  );
}

export default Blog;
