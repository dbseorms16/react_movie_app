import React, { Component } from "react";

class MovieDetail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state === undefined) {
      return null;
    } else {
      return <div>{location.state.title}</div>;
    }
  }
}

export default MovieDetail;
