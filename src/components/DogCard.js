const DogCard = ({ onePup }) => {
  if (!onePup) return <h3>Select a doggo</h3>;

  const { id, name, image, isGoodDog } = onePup;

  console.log(onePup);
  return (
    <div id="dog-info">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button>{isGoodDog ? `Good Dog!` : `Bad`}</button>
    </div>
  );
};

export default DogCard;
