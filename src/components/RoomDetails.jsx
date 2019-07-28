import React, { Component } from "react";
import Hero from "./Hero";

export default class RoomDetails extends Component {
  render() {
    const { availableRooms } = this.props;

    return (
      <>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit deleniti architecto quas pariatur recusandae
            voluptatem at corporis est similique quae dolorem, veritatis dicta
            perferendis error aspernatur suscipit ipsum. At, doloremque?
          </p>
        </div>
      </>
    );
  }
}
