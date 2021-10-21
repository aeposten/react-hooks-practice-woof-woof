const DogBar = ({ allPups, dogBarClick}) => {
  const dogSpans = allPups.map((pup) => (
    <span key={pup.id} onClick={() => dogBarClick(pup.id)}>{pup.name}</span>
  ))
  
    return (
    <>
<div id="dog-bar">{dogSpans}</div>

    </>
  );
};

export default DogBar;
