import React, {useState} from "react"
import "../App.css"

export default function Pokescroll(props) {
    const [pokeList, setPokeList] = useState(["poke 1", "poke 2", "poke 3"])

    const pokemon = pokeList.map((poke) => 
        <li>{poke}</li>
    )

    return(
        <div className="scroll-container">
            Poke Scroll
            <p>Pokemon Name:</p>
            {pokemon}
        </div>
    )
}