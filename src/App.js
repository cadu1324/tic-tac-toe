import "./App.css";
import Square from "./components/Squares";
import { useState } from "react";

function App() {

  const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "500px",
    height: "500px",
    margin: "200px auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // for (let i = 0; i < lines.length; i++) {
    //   const [a, b, c] = lines[i];
    //   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //     return squares[a];
    //   }
    // }
    return null;
  }

  return (
    <div className="App">
      <div style={style}>
        <Square value="1" onClick={() =>{console.log('alo')}} />
        <Square value="2" onClick={() =>{console.log('alo')}} />
        <Square value="3" onClick={() =>{console.log('alo')}} />
        <Square value="4" onClick={() =>{console.log('alo')}} />
        <Square value="5" onClick={() =>{console.log('alo')}} />
        <Square value="6" onClick={() =>{console.log('alo')}} />
        <Square value="7" onClick={() =>{console.log('alo')}} />
        <Square value="8" onClick={() =>{console.log('alo')}} />
        <Square value="9" onClick={() =>{console.log('alo')}} />
      </div>
    </div>
  );
}

export default App;
