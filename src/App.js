import './App.css';
import React, { useEffect, useState } from "react"

function App() {
  const [pokeData, setPokeData] = useState({});
  const [pokenumber, setPokenumber] = useState(2);
  const [sprite, setSprite] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png")

  // update pokeData onrender, checking for pokenumber as a dependency
  // to change the fetch request
  useEffect(() => {
    console.log("fetch");
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokenumber}`)
      .then((res) => res.json())
      .then((data) => setPokeData(data));
  }, [pokenumber]);

  // function that increments
  const changePokemon = () => {
    console.log({ pokenumber });
    setPokenumber((prevNumber) => prevNumber + 1);
    setSprite(pokeData.sprites.front_shiny)
  };

  return (
    <div className="App">
      <h1>Shiny Poke JSON</h1>
      <button onClick={changePokemon}>Change Pokemon</button>
      <pre>{JSON.stringify(sprite, null, 1)}</pre>
      <img src={`${sprite}`}></img>
    </div>
  );
}

export default App;
