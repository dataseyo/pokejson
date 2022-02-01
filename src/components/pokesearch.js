import React, { useState } from "react"

export default function Pokesearch(props) {
    const [pokeSearch, setPokeSearch] = useState("")
    const [pokeLink, setPokeLink] = useState("")
    const [pokeId, setPokeId] = useState(1)

    const handleChange = (event) => {
        setPokeSearch(event.target.value)
        console.log(pokeSearch)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setPokeLink(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`)
        console.log(pokeLink)

        setPokeId()
        console.log(pokeId)
        // props.setShinySprite(props.pokeData.sprites.front_shiny)
        // props.setNormalSprite(props.pokeData.sprites.front_default)
    }

    return(
        <form className="search-form">
            <input 
                type="text"
                placeholder="Search for Pokemon"
                onChange={handleChange}
                name
            />

            <button 
                className="button"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </form>
    )
}