import React from "react";
import Article from "./Article";
import * as FooBar from "./components/FooBar";
import Hoge from "./components/Hoge";

export type Title = {
  title: string,
  order: number,
  isPublished: boolean,
  toggle: () => void,
  author: string,
  count: number
};

export type MyState = {
  isPublished: boolean,
  count: number
};

export default class Blog extends React.Component<{}, MyState> {
  constructor(props: Title) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  componentDidMount() {
    document.getElementById("counter")?.addEventListener("click", () => this.countUp());
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState(
        { count: 0 }
      );
    }
  }

  componentWillUnmount() {
    document.getElementById("counter")?.removeEventListener("counter", () => this.countUp());
  }

  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    });
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const authorName: string = "user";
    return (
      <div>
        <Article
          title={"React の使い方"}
          order={1}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          author={authorName}
          count={this.state.count}
        />
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </div>
    );
  }
}
