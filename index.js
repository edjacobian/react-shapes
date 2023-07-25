const container = document.querySelector(`#root`);

// create circles
function Circle({ color, number }) {
  // console.log(Circle);
  const circleStyle = {
    backgroundColor: color,
  };
// return cricles
  return <div className="circle" style={circleStyle}>{number}</div>;
}
// create squares
function Square({ color, number }) {
  // console.log(Square);
  const squareStyle = {
    backgroundColor: color,
  };
// return squares
  return <div className="square" style={squareStyle}>{number}</div>;
}

// create app
function App() {
  const getRandomColor = () => {
    // console.log(getRandomColor);
    // cycle through hexidecimals for colors
    const letters = '0123456789ABCDEF';
    let color = '#';
    // for loop to go through letters&nums for random colors
    for (let i = 0; i < 6 ; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // create counter for numbers
  

  // map through 3 circles
  // *adding circles, finished a bit early :)*
  const circles = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
    const circleColor = getRandomColor();
    const circleNumber = i + 1;
    return <Circle key={`circle-${circleNumber}`} color={circleColor} number={circleNumber} />;
  });
//  map through 3 squares
//  *same with circles, added 5 more*
  const squares = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
    const squareColor = getRandomColor();
    const squareNumber = i + 1;
    return <Square key={`square-${squareNumber}`} color={squareColor} number={squareNumber} />;
  });

  return (
    <div>
      <h2>Circles:</h2>
      <div>{circles}</div>

      <h2>Squares:</h2>
      <div>{squares}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(container);
root.render(<App />);
