import React, { useState } from 'react';
import "./App.css"

function App() {
  const [coinSide, setCoinSide] = useState(null);

  const flipCoin = () => {
    const side = willOfFortune();
    setCoinSide(side);
  };

  const willOfFortune = () => {
    const forTune = Math.floor(Math.random() * 100) + 1;

    if (forTune < 50) {
      return "tail";
    } else if (forTune > 50) {
      return "head";
    } else {
      return "tie";
    }
  };

  return (
    <div>
      <img src="https://blog.littletoncoin.com/wp-content/uploads/us-coin-edges-300x199.jpg" alt="coins" />
      <h1>Try Your Fortune</h1>
      <button onClick={flipCoin}>Click Me!</button>
      {coinSide && (
        <div>
          <img src={coinSide === 'head' ? "https://m.media-amazon.com/images/I/51xs7F+tP5L._AC_UF894,1000_QL80_.jpg" : 
                   coinSide === 'tail' ? "https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_UF894,1000_QL80_.jpg" : 
                   "https://media.istockphoto.com/id/467009771/photo/edge-of-a-silver-colored-coin-balanced-on-end.jpg?s=612x612&w=0&k=20&c=tya_XvdUSftdwAnPxlBYMK5FEc9dBoBriAQTzwQ4qsE="} alt={coinSide} />
          <h2>That is a {coinSide}.</h2>
        </div>
      )}
    </div>
  );
}

export default App;