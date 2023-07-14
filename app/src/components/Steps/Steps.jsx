import "./Steps.scss";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Steps = ({ image, imageIsRight, heading, subheading, description }) => {
  const componentClass = `StepsWrapper ${imageIsRight ? "image-right" : ""}`;
  return (
    <div className={componentClass}>
      <img className="image" src={image} alt="create process on phone" />
      <div className="text">
        <h3>{subheading}</h3>
        <h2>{heading}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

Steps.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Steps;
