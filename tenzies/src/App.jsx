import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";
import Dice from "./components/Dice";

const genDice = () => {
  const genedDice = [];
  for (let i = 0; i < 10; i++) {
    const die = {
      id: i,
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    };
    genedDice.push(die);
  }

  return genedDice;
};

function App() {
  const [diceArr, setDiceArr] = useState(genDice());
  const [tenzies, setTenzies] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (diceArr.every((die) => die.isHeld && die.value === diceArr[1].value)) {
      setTenzies(true);
    }
  }, [diceArr]);

  const handleClick = () => {
    setDiceArr((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      })
    );

    setCount((prevCount) => prevCount + 1);
  };

  const holdDice = (id) => {
    setDiceArr((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  const resetGame = () => {
    setDiceArr(genDice());
    setTenzies(false);
    setCount(0);
  };

  return (
    <div className="App">
      <main>
        {tenzies && <ReactConfetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">
          {diceArr.map((die) => (
            <Dice
              key={die.id}
              value={die.value}
              isHeld={die.isHeld}
              holdDice={holdDice}
              id={die.id}
            />
          ))}
        </div>

        {!tenzies && <button onClick={handleClick}>Roll Dice</button>}
        {tenzies && (
          <>
            <button onClick={resetGame}>Go Again</button>
            <p className="count">You did it in {count} clicks!</p>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
