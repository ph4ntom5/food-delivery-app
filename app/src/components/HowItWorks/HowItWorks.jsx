import "./HowItWorks.scss";
import Phones from "../../assets/phones.png";

const HowItWorks = () => {
  return (
    <>
      <div id="works" className="WorksWrapper">
        <img className="phones" src={Phones} alt="phones" />
      </div>
      <div className="HeadlineWrapper">
        <hr />
        <h2 className="headline">How the app works</h2>
      </div>
    </>
  );
};

export default HowItWorks;
