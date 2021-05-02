import React, { Component } from "react";

export class IsorIsNot extends Component {
  render() {
    let curDate = new Date();

    if (curDate.getUTCHours() === 17 && curDate.getUTCMinutes() === 18) {
      return <div>It is 2:24pm!</div>;
    }
    return <div>It is not 2:24 pm.</div>;
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      10000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default IsorIsNot;
