import React, { Component } from "react";
import Hero from "./Hero";

export default class RoomDetails extends Component {
  render() {
    const { id, title, quickDetails, fullDescription, rate } = this.props;

    return (
      <>
        <div key={id}>
          <h3>{title}</h3>
          <p>{quickDetails}</p>
          <p>{fullDescription}</p>
          <p>{rate}</p>
        </div>
      </>
    );
  }
}
