import "./Footer.scss";
import Logo from "../../assets/logo.png";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="FooterWrapper">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      <div className="SocialWrapper">
        <img src={Twitter} alt="twitter social icon" />
        <img src={Facebook} alt="facebook social icon" />
        <img className="insta" src={Instagram} alt="instagram social icon" />
      </div>
      <p>Copywright 2020 Bella Onojie.com</p>
    </div>
  );
};

export default Footer;
