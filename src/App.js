import './App.css';
import React, { useEffect, useState } from "react"
import Pokescroll from './components/pokescroll';

function App() {
  // store JSON data
  const [pokeData, setPokeData] = useState({});

  // store position of pokemon in JSON data
  const [pokenumber, setPokenumber] = useState(2);

  // store pokemon sprites from pokeData, default to Pokemon 1
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

      <Pokescroll data={pokeData} pokenumber={pokenumber}/>

      <div className="pokemon-container ">
        <h1>Pokemon JSON</h1>
              <button 
                onClick={changePokemon}
                className="button"
              >
                Change Pokemon
              </button>

              {/* <pre>{JSON.stringify(shinySprite, null, 1)}</pre>
              <pre>{JSON.stringify(normalSprite, null, 1)}</pre> */}

              <div className="poke-img-container">
                <div className="shiny-img-container">
                  <p className="shiny-default-text">Shiny</p>
                  <img src={`${shinySprite}`} className="poke-img"></img>
                </div>

                <div className="normal-img-container">
                  <p className="shiny-default-text">Default</p>
                  <img src={`${normalSprite}`} className="poke-img"></img>
                </div>
              </div>
            </div>
      </div>

      
  );
}

export default App;
