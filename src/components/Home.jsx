import React, { Component } from "react";
import "../styles/home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="secondaryContainer">
          <div className="secondaryOverlay">
            <h2>Book Your Vacation Today</h2>
          </div>
        </div>
      </div>
    );
  }
}
