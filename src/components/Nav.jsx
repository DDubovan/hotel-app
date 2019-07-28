import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";

export default class Nav extends Component {
  state = {
    navDisplayed: false
  };

  toggleNav = () => {
    this.setState({
      navDisplayed: !this.state.navDisplayed
    });
  };

  render() {
    return (
      <nav>
        <div className="firstCont">
          <button className="dropdownBtn" onClick={this.toggleNav}>
            <img className="toggleIcon" src="/assets/icons/nav-toggle.svg" />
          </button>
          <Link to="/" className="logoLink" style={this.logoTextStyle}>
            <img src="/assets/icons/beach-chair.svg" style={this.logoStyle} />
            HOTELII
          </Link>
        </div>
        {this.state.navDisplayed && (
          <ul className="dropdown">
            <li className="">
              <Link to="/rooms/featured" className="">
                Featured Rooms
              </Link>
            </li>
            <li>
              <Link to="/nearby-attractions" className="">
                Nearby Attractions
              </Link>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}
