import React from "react";

import Article from "../components/Articles";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );


    return (
      <div>
        <div className="row">{Articles}</div>
      </div>
    );
  }
}
