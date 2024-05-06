import { useContext } from "react"
import { PokeContext } from "../Storepage"

export default function Featcard(props){
    const {setPreviewPoke} = useContext(PokeContext)

    function viewPoke(pokemon, form){
        if (form === 'default')
            setPreviewPoke(pokemon)
        else
            setPreviewPoke(pokemon + 'shiny')
    }

    return(
        <div className="cards">
            <img src={props.sprite} alt="pokemon_sprite"/>
            <p> {props.name} </p>
            <p> ${props.price} </p>
            <button type="button" className="cardbtn" onClick={() => viewPoke(props.name.toLowerCase(), 'default')}> VIEW </button>
            <button type="button" className="cardbtn" onClick={() => viewPoke(props.name.toLowerCase(), 'shiny')}> SHOW SHINY </button>
        </div>
    )
}