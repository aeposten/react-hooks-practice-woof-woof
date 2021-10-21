import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import DogCard from "./DogCard";

function App() {
  const [allPups, setAllPups] = useState([]);
  const [selectOnePup, setSelectOnePup] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((response) => response.json())
      .then((allPups) => {
        setAllPups(allPups);
      });
  }, []);

  // function onUpdatePup(updatedPup) {
  //   const updatedPups = allPups.map((pup) =>
  //     pup.id === updatedPup.id ? updatedPup : pup
  //   );
  //   setAllPups(updatedPups);
  // }

  const onePup = allPups.find((pup) => pup.id === selectOnePup);

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DogBar allPups={allPups} dogBarClick={setSelectOnePup} />
      </div>
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <DogCard onePup={onePup} />
      </div>
    </div>
  );
}

export default App;
