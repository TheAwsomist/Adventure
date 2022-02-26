import Card from "./Card";
import "./Carousal.css";
import Kaghan from "./imgs/Kaghan.jpg";
import Neelum from "./imgs/Neelum.png";
import Punjab from "./imgs/Punjab.png";
import Lahore from "./imgs/Lahore.png";
import Islamabad from "./imgs/Islamabad.png";

const Carousal = () => {
  return (
    <>
      <div className="container">
        <div className="row lg" style={{ height: "fit-content" }}>
          <div className="col-6">
            <Card
              title="Kaghan Naran"
              text="Incy Peak Of Kaghan And Naraan"
              image={Kaghan}
              CardSize="card-large"
            />
          </div>
          <div className="col-6">
            <Card
              title="Neelum Valley"
              text="The Grassy Meadows of Neelum Valley"
              image={Neelum}
              CardSize="card-large"
            />
          </div>
        </div>
        <div className="row sm" style={{ height: "fit-content", flex: "1" }}>
          <div className="col-4">
            <Card
              title="Lower Punjab"
              text="The Agricultural Lands Of Lower Punjab"
              image={Punjab}
              CardSize="card-small"
            />
          </div>
          <div className="col-4">
            <Card
              title="Lahore"
              text="Loose Yourself In The City Of Lights"
              image={Lahore}
              CardSize="card-small"
            />
          </div>
          <div className="col-4">
            <Card
              title="Islamabad"
              text="Live A Life Of Finesse In The Capital City"
              image={Islamabad}
              CardSize="card-small"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousal;
