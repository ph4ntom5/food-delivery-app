import Logo from "../../assets/logo.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { HashLink as Link } from "react-router-hash-link";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="HeaderWrapper">
        <Link to="/">
          <img className="Logo" src={Logo} />
        </Link>
        <nav>
          <Link to="/#hero">Home</Link>
          <Link to="/#works">How it Works</Link>
          <Link to="/#download">Download</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
        <BurgerMenu />
      </div>
    </>
  );
};

export default Header;
