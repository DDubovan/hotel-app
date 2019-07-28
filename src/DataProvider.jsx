import React, { Component } from "react";
import uuid from "uuid";
import classic1 from "./assets/photos/room-single.jpg";
import classic2 from "./assets/photos/room-single2.jpg";
import classic3 from "./assets/photos/room-single3.jpg";
import king1 from "./assets/photos/room-double.jpg";
import king2 from "./assets/photos/room-double2-balcony.jpg";
import king3 from "./assets/photos/room-double3.jpg";
import penthouse1 from "./assets/photos/penthouse-suite.jpg";
import penthouse2 from "./assets/photos/penthouse-suite2.jpg";
import penthouse3 from "./assets/photos/penthouse-suite3.jpg";

const DataContext = React.createContext();

class DataProvider extends Component {
  state = {
    availableRooms: [
      {
        id: uuid(),
        title: "Classic Room",
        quickDetails: "1 x Queen Bed || 2 x Person || 500 sq ft",
        photos: [classic1, classic2, classic3],
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
        photos: [king1, king2, king3],
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
        photos: [penthouse1, penthouse2, penthouse3],
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
      <DataContext.Provider value="">
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const DataConsumer = DataContext.Consumer;

export { DataConsumer, DataContext, DataProvider };
