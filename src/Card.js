import "./Card.css";

const SIZE=["card-large","card-small"];


const Card = ({CardSize,image,title,text}) => {

  const CheckcardSize = SIZE.includes(CardSize)?CardSize:SIZE[0];
  const imgsize = CardSize === "card-large"? "img-large":"img-small";  
  const textsize = CardSize === "card-large"? "title-text-large":"title-text-small";  


  return (
    <>
      <div className={CheckcardSize}>
        <div style={{width:"100%",height:"fit-content",overflow: "hidden"}}> 
            <img src={image} alt="" className={imgsize}/>
        </div>
        <div className={`row ${textsize}`}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      {/* <div className="card-small">
        <div style={{width:"100%",height:"fit-content"}}> 
            <img src={Kaghan} alt="" className="img-small"/>
        </div>
        <div className="row title-text-small">
          <h2>Kaghan And Naraan Peaks</h2>
          <p>The Icy Peaks Of Kaghan and Naran</p>
        </div>
      </div> */}
    </>
  );
};

export default Card;
