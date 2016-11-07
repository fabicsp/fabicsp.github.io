import React from "react";

export default class Banner extends React.Component {
  render() {
    const adText = [
      "Banner #1",
      "Banner #2",
      "Banner #3",
      "Banner #4",
      "Banner #5"
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];

    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="well text-center">
            {randomAd}
          </div>
        </div>
      </div>
    );
  }
}
