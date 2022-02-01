import React, { useState, useEffect } from "react"

export default function Pokesearch(props) {
    const [pokeSearch, setPokeSearch] = useState("")
    const [pokeLink, setPokeLink] = useState("")
    const [submitted, setSubmitted] = useState(0)

    const [allPokes, setAllPokes] = useState({})

    const handleChange = (event) => {
        setPokeSearch(event.target.value)
        console.log(pokeSearch)
    }

    useEffect(() => {
        console.log("fetch");
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`)
          .then((res) => res.json())
          .then((data) => setAllPokes(data));
      }, [submitted]);

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(prevSubmitted => prevSubmitted + 1)
        const id =  allPokes.id
        // console.log(id)
        // console.log(allPokes)
        console.log(pokeSearch)

        props.setPokenumber(id)
        props.setShinySprite(props.pokeData.sprites.front_shiny)
        props.setNormalSprite(props.pokeData.sprites.front_default)
    }

    


    return(
        <form className="search-form">
            <input 
                type="text"
                placeholder="Search for Pokemon"
                onChange={handleChange}
            />

            <button 
                className="button"
                onClick={handleSubmit}
            >
                Submit
            </button>

            {/* <pre>{JSON.stringify(allPokes, null, 2)}</pre> */}
            {/* <p>{pokemonList}</p> */}
            <p>{allPokes.id}</p>
        </form>
    )
}