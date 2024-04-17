import "./App.css";
import { useState, useEffect } from "react";
import Square from "./componenets/Square";
import { Patterns } from "./componenets/Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    checkTie();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Game finished! Winning Player: ${result.winner}`);
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index === square && val === "") {
          return player;
        }

        return val;
      })
    );
  };

  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  const checkWin = () => {
    Patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer == "") return;
      let foundWinner = true;
      currentPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinner = false;
        }
      });
      if (foundWinner) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              {
                chooseSquare(0);
              }
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              {
                chooseSquare(1);
              }
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              {
                chooseSquare(2);
              }
            }}
          />
        </div>

        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              {
                chooseSquare(3);
              }
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              {
                chooseSquare(4);
              }
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              {
                chooseSquare(5);
              }
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              {
                chooseSquare(6);
              }
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              {
                chooseSquare(7);
              }
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              {
                chooseSquare(8);
              }
            }}
          />
        </div>
      </div>
      <button onClick={restartGame}>Restart game</button>
    </div>
  );
}

export default App;
