import Button from "./Button";
import "./Home.css";


const MainSection = () => {
  return (
    <div className="Main-Section-1">
      <div className="container-fluid Main-Inner-Section">
        <div
          className="row col-12"
          style={{ marginBottom: "7%", border: "0px" }}
        >
          <p className="title">
            Every Great Adventure <br />
            Began With A Single{" "}
            <span className="none" style={{ color: "white" }}>
              Step
            </span>
            ..
          </p>
        </div>
        <div className="row buttons">
          <div className="col-6">
            <Button
              buttonStyle="btn--outline"
              children="Get Started"
              buttonSize="btn--medium"
              style={{ padding: "8px 20px" }}
              Id="signup-button"
            ></Button>
          </div>
          <div className="col-6">
            <Button
              buttonStyle="btn--outline"
              children="Adventures"
              buttonSize="btn--medium"
              style={{ padding: "8px 20px" }}
              Id="signup-button"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
