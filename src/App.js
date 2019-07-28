import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import Nav from "./components/Nav";
import Home from "./components/Home";
import HotelRooms from "./components/HotelRooms";
import RoomDetails from "./components/RoomDetails";
import NearbyAttractions from "./components/NearbyAttractions";
import NoResults from "./components/NoResults";
import classic1 from "./assets/photos/room-single.jpg";
import king1 from "./assets/photos/room-double.jpg";
import penthouse1 from "./assets/photos/penthouse-suite.jpg";

export default class App extends Component {
  state = {
    availableRooms: [
      {
        id: uuid(),
        title: "Classic Room",
        quickDetails: "1 x Queen Bed || 2 x Person || 500 sq ft",
        photo: classic1,
        shortDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        fullDescription:
          "Illum dolorem consectetur quo vero nulla optio pariatur? Dicta ut est repellendus.",
        rate: "$325/night"
      },
      {
        id: uuid(),
        title: "King Room",
        quickDetails: "1 x King Bed || 2 x Person || 600 sq ft",
        photo: king1,
        shortDescription:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        fullDescription:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        rate: "$450/night"
      },
      {
        id: uuid(),
        title: "Luxury Penthouse",
        quickDetails: "1 x California King Bed || 4 x Person || 1000 sq ft",
        photo: penthouse1,
        shortDescription:
          "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et ",
        fullDescription:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        rate: "$900/night"
      }
    ]
  };
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to={"/home"} />;
            }}
          />
          />
          <Route path="/home" render={props => <Home {...props} />} />
          <Route
            path="/rooms/featured"
            render={props => (
              <HotelRooms
                {...props}
                availableRooms={this.state.availableRooms}
              />
            )}
          />
          <Route
            path="/rooms/details/:title"
            render={props => (
              <RoomDetails
                {...props}
                availableRooms={this.state.availableRooms}
              />
            )}
          />
          <Route
            path="/nearby-attractions"
            render={props => <NearbyAttractions {...props} />}
          />
          <Route render={NoResults} />
        </Switch>
      </Router>
    );
  }
}
