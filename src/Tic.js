import { create, all } from "mathjs";
import { useEffect, useState } from "react";
import "./Tic.css";

const Tic = () => {
  let [board,SetBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const id = [0, 1, 2, 10, 11, 12, 20, 21, 22];
  const [turn, SetTurn] = useState(1);
  const [player, SetPlayer] = useState("Player 1"); //FIND A WAY TO GET POSITION OF THE CLICKED SPOT, THE EXACT IN THE ARRAY, NOT BY JUST ID's

  const config = {};
  const math = create(all, config);



  //basic clicker function that changes the board aswell as render the player's action on the board according to the turn and prompts the winner aswell
  const Clicker = (e) => {

    let tempboard = [...board];
    let winner = false;
    let row = math.floor(e.target.id / 10);
    let column = e.target.id % 10;
    tempboard[row][column] = turn;
    SetBoard(tempboard);
    console.log(board);
      console.log(e.target.id);
      if (e.target.innerHTML === "") {
        if (turn === 1) {
          e.target.innerHTML = "X";
          SetTurn(2);
        } else {
          e.target.innerHTML = "O";
          SetTurn(1);
        }
      }
      winner = funkytime();
      if(winner)
      {
          alert("Winner is:" + player);
          ClearBoard();
      }
  };
  

  //calculates the winner
  const funkytime = () => {
    let winninglist = [
      [0, 1, 2],
      [10, 11, 12],
      [20, 21, 22],
      [0, 10, 20],
      [1, 11, 21],
      [2, 12, 22],
      [0, 11, 22],
      [2, 11, 20],
    ];
    for (let i = 0; i < winninglist.length; i++) {
      const [a, b, c] = winninglist[i];
      let a_row = math.floor(a / 10);
      let a_column = a % 10;
      let b_row = math.floor(b / 10);
      let b_column = b % 10;
      let c_row = math.floor(c / 10);
      let c_column = c % 10;
      if(board[a_row][a_column] && board[a_row][a_column] === board[b_row][b_column] && board[b_row][b_column] === board[c_row][c_column]){
        return true;
      }
    }
  };

  //Clears Board
  function ClearBoard(){
    SetBoard([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    for(let i=0;i<id.length;i++){
      document.getElementById(id[i]).innerHTML = "";
    }
    return;
  }


  useEffect(() => {
    if (turn === 1) {
      SetPlayer("Player 1");
    } else {
      SetPlayer("Player 2");
    }
  }, [turn]);

  return (
    <>
      <div className="container tic">
        <div className="row heading">
          <h1>{player}'s Turn</h1>
        </div>
        <div className="row gameboard">
          <div className="row">
            <div className="col-4 border1" onClick={Clicker} id={id[0]}></div>
            <div className="col-4 border1" onClick={Clicker} id={id[1]}></div>
            <div className="col-4 border2" onClick={Clicker} id={id[2]}></div>
          </div>
          <div className="row">
            <div className="col-4 border1" onClick={Clicker} id={id[3]}></div>
            <div className="col-4 border1" onClick={Clicker} id={id[4]}></div>
            <div className="col-4 border2" onClick={Clicker} id={id[5]}></div>
          </div>
          <div className="row">
            <div className="col-4 border3" onClick={Clicker} id={id[6]}></div>
            <div className="col-4 border3" onClick={Clicker} id={id[7]}></div>
            <div className="col-4" onClick={Clicker} id={id[8]}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tic;
