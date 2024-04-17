import "../App.css";
function Square({ val, chooseSquare }) {
  return (
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>
  );
}

export default Square;

// val = symbol
//choosesquare = väljare
