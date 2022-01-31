import './App.css';
import React, { useEffect, useState } from "react"

function App() {
  const [pokeData, setPokeData] = useState({});
  const [pokenumber, setPokenumber] = useState(2);
  const [shinySprite, setShinySprite] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png")
  const [normalSprite, setNormalSprite] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")

  // update pokeData onrender, checking for pokenumber as a dependency
  // to change the fetch request
  useEffect(() => {
    console.log("fetch");
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokenumber}`)
      .then((res) => res.json())
      .then((data) => setPokeData(data));
  }, [pokenumber]);

  // function that increments pokenumber to change displayed poke 
  const changePokemon = () => {
    console.log({ pokenumber });
    setPokenumber((prevNumber) => prevNumber + 1);
    setShinySprite(pokeData.sprites.front_shiny)
    setNormalSprite(pokeData.sprites.front_default)
  };

  return (
    <div className="App">
      <h1>Shiny Poke JSON</h1>
      <button 
        onClick={changePokemon}
        className="button"
      >
        Change Pokemon
      </button>
      <pre>{JSON.stringify(shinySprite, null, 1)}</pre>

      <div className="poke-img-container">
        <div className="shiny-img">
          <p>Shiny</p>
          <img src={`${shinySprite}`}></img>
        </div>

        <div className="normal-img">
          <p>Default</p>
          <img src={`${normalSprite}`}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
