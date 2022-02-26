import { create, all } from 'mathjs'
import { useState } from "react";
import "./Calculator.css";


const signs = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "+",
  ".",
  "0",
  "=",
  "-",
];
const operators = ["/", "*", "+", "-","="];

const config = { }
const math = create(all, config)

const Calculator = () => {
  const [equation, SetEquation] = useState("");

  const ClickHandle = (e) => {
    if (operators.includes(e.target.innerHTML)) {
      SetEquation(equation + ` ${e.target.innerHTML} `);
    }else{
      SetEquation(equation + `${e.target.innerHTML}`);
    }
  };

  const Evaluation = () =>{
    SetEquation('=' + math.evaluate(equation));
    console.log("Button pressed!!");
  }

  return (
    <>
      <div className="main-body container">
        <div className="row display">{equation}</div>
        <div className="row buttons">
          <div className="row buttons">
            {signs.map((sign) => {
              if (operators.includes(sign)) {
                  return (
                    <div
                      className="col-3"
                      style={{
                        backgroundColor: "rgb(240, 150, 47)",
                        color: "white",
                      }}
                      onClick={sign ==="="? Evaluation : ClickHandle}
                    >
                      {sign}
                    </div>
                  );
               }else {
                  return (
                    <div className="col-3" onClick={ClickHandle}>
                      {sign}
                    </div>
                  );
                }
              
            })}
          </div>
          <div className="row">
            <div className="col-12" onClick={()=>SetEquation("")} style={{borderRadius: "0 0 10px 10px"}}>Clear</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
