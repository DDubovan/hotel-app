import React, { Component } from "react";
import Hero from "./Hero";
import RoomCard from "./RoomCard";

export default class HotelRooms extends Component {
  displayStyle = {
    display: "flex",
    background: "#074C12"
  };
  render() {
    const { availableRooms } = this.props;

    return (
      <>
        <Hero
          title="Choose Your Room"
          descrip="Llum dolorem consectetur quo vero nulla optio pariatur? Dicta ut est repellendus. Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
        />
        <div className="roomList" style={this.displayStyle}>
          {availableRooms.map(room => {
            return (
              <RoomCard
                key={room.id}
                title={room.title}
                quickDetails={room.quickDetails}
                photo={room.photo}
                shortDescription={room.shortDescription}
                fullDescription={room.fullDescription}
                rate={room.rate}
              />
            );
          })}
        </div>
      </>
    );
  }
}
