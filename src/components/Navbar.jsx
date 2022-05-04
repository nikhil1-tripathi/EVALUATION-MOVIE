import { Link } from "react-router-dom";
import "./Navbar.css"
const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <>
      <div id="Navbar">
        <div id="Navbar_box1">
          <p>MOVIE PAGE</p>
        </div>
        <div id="Navbar_box2">
          <Link to="/">HOME</Link>


          <Link to="/about">ABOUT</Link>

          <Link to="/movies">MOVIES</Link>
        </div>
      </div>
    </>

  )


};
