import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/roomcard.scss";

export default class RoomCard extends Component {
  render() {
    const {
      id,
      title,
      quickDetails,
      photo,
      shortDescription,
      rate
    } = this.props;
    return (
      <div className="card" key={id}>
        <img
          className="card-img-top"
          height="250"
          src={photo}
          alt="Room picture"
        />
        <div className="card-body">
          <h4 className="card-title card-text">{title}</h4>
          <ul className="card-text">
            <li>{quickDetails}</li>
          </ul>
          <p className="card-text">{shortDescription}</p>
          <p className="card-text">{rate}</p>

          <Link to={`/rooms/details/${title}`} className="btn">
            More Details
          </Link>
        </div>
      </div>
    );
  }
}
