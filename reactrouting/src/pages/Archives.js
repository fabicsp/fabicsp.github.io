import React from "react";

import Article from "../components/Articles";

export default class Archives extends React.Component {
  render() {

    const Articles = [
      "Partial Article",
      "American Article",
      "Mexican Article",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More"
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Archives</h1>
        <div className="row">{Articles}</div>
      </div>
    );
  }
}
