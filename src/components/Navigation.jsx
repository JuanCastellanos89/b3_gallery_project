import { Link } from "react-router-dom"
import { Beachs1 } from "./Beachs1";
import { Beachs2 } from "./Beachs2";
import { Beachs3 } from "./Beachs3";
import { Beachs4 } from "./Beachs4";
import { Beachs5 } from "./Beachs5";
import { Beachs6 } from "./Beachs6";

export const Navigation = () => {
  return (
    <div className="container thumbnail-container mt2">
        <Link to='/Beach1'className="links">
        <figure className="thumbnail-image-size">
            <Beachs1/>
            <figcaption>Beach 1</figcaption>
        </figure>
        </Link>
        <Link to='/Beach2'className="links">
        <figure className="thumbnail-image-size">
            <Beachs2/>
            <figcaption>Beach 2</figcaption>
        </figure>
        </Link>
        <Link to='/Beach3'className="links">
        <figure className="thumbnail-image-size">
            <Beachs3/>
            <figcaption>Beach 3</figcaption>
        </figure>
        </Link>
        <Link to='/Beach4'className="links">
        <figure className="thumbnail-image-size">
            <Beachs4/>
            <figcaption>Beach 4</figcaption>
        </figure>
        </Link>
        <Link to='/Beach5'className="links">
        <figure className="thumbnail-image-size">
            <Beachs5/>
            <figcaption>Beach 5</figcaption>
        </figure>
        </Link>
        <Link to='/Beach6'className="links">
        <figure className="thumbnail-image-size">
            <Beachs6/>
            <figcaption>Beach 6</figcaption>
        </figure>
        </Link>
    </div>
  )
}