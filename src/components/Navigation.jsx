import { Link } from "react-router-dom";
import { Atlantic_ocean } from "./Atlantic_ocean";
import { Beach_1 } from "./Beach_1";
import { Beach_4 } from "./Beach_4";
import { Bora_bora } from "./Bora_bora";
import { Mission_beach } from "./Mission_beach";

export const Navigation = () => {
  return (
    <div className="container thumbnail-container mt-2">
      <Link to="/atlantic-ocean" className="links">
        <figure className="thumbnail-image-size">
          <Atlantic_ocean />
          <figcaption>Atlantic ocean</figcaption>
        </figure>
      </Link>
      <Link to="/beach_1" className="links">
        <figure className="thumbnail-image-size">
          <Beach_1 />
          <figcaption>Beach 1</figcaption>
        </figure>
      </Link>
      <Link to="/beach_4" className="links">
        <figure className="thumbnail-image-size">
          <Beach_4 />
          <figcaption>Beach 4</figcaption>
        </figure>
      </Link>
      <Link to="/bora_bora" className="links">
        <figure className="thumbnail-image-size">
          <Bora_bora />
          <figcaption>Bora bora</figcaption>
        </figure>
      </Link>
      <Link to="/mission_beach" className="links">
        <figure className="thumbnail-image-size">
          <Mission_beach />
          <figcaption>Mission beach</figcaption>|
        </figure>
      </Link>
    </div>
  );
};
