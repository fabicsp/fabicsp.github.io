import React from "react";

export default class Articles extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className="col-md-4">
        <h4> {title} </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a className="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
