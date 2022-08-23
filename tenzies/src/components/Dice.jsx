const Dice = ({ value, isHeld, id, holdDice }) => {
  return (
    <div
      className={`dice${isHeld ? " held" : ""}`}
      onClick={() => holdDice(id)}
    >
      <p>{value}</p>
    </div>
  );
};

export default Dice;
