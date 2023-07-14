import "./NotFound.scss";
import Button from "../../components/Button/Button";

const NotFound = () => {
  return (
    <div className="NFWrapper">
      <span className="spantext">404 - Page not Found </span>
      <a href="/">
        <Button label="Go Home" variant="primary" />
      </a>
    </div>
  );
};

export default NotFound;
