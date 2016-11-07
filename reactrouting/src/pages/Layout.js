import React from "react";
// import { Link } from "react-router";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Banner from "../components/layout/Banner";


export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "40px"
    };
    return (
      <div>
        <Nav location={location} />
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              <h1>Routing-news.net</h1>
              <Banner/>
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
