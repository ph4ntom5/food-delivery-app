import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./BurgerMenu.scss";
const BurgerMenu = () => {
  return (
    <Menu right>
      <Link to="/#hero">Home</Link>
      <Link to="/#works">How it Works</Link>
      <Link to="/#download">Download</Link>
      <Link to="/#contact">Contact</Link>
    </Menu>
  );
};

export default BurgerMenu;
