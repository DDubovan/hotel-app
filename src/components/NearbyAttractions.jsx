import React, { Component } from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import "../styles/attractions.scss";
import palmSVG from "../assets/icons/palm.svg";

export default class NearbyAttractions extends Component {
  render() {
    return (
      <div className="attractionsContainer">
        <Hero
          heroContainer="attractionsHero"
          title="Nearby Attractions"
          descrip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod officiis officia repellendus eaque aperiam expedita voluptas error mollitia architecto!"
        >
          <Link to="/rooms/featured" className="btn-secondary p-2">
            Book Your Stay
          </Link>
        </Hero>
        <div>
          <div className="attractionList">
            <div className="attractionsItem">
              <h5>Kayaking</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="attractionsItem">
              <h5>Hiking</h5>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet,
              </p>
            </div>
            <div className="attractionsItem">
              <h5>Restaurants</h5>
              <p>
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis
              </p>
            </div>
            <div className="attractionsItem">
              <h5>Breweries</h5>
              <p>
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
