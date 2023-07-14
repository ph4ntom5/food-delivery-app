import "./Download.scss";
import Button from "../Button/Button";

const Download = () => {
  const mobileContent = window.innerWidth <= 768;

  return (
    <div id="download" className="DownloadWrapper">
      <h2>Download the app now.</h2>
      {mobileContent ? (
        <h4>Most calendars are designed for teams.</h4>
      ) : (
        <h4>
          Available on your favorite store. Start your premium experience now.
        </h4>
      )}
      <div className="DButtonWrapper">
        {mobileContent ? (
          <>
            <Button label="Buy now" variant="download-primary" />
            <Button label="Try for free" variant="download-secondary" />
          </>
        ) : (
          <>
            <Button label="Playstore" variant="primary" />
            <Button label="App Store" variant="secondary" />
          </>
        )}
      </div>
    </div>
  );
};

export default Download;
