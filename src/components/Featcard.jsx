import { useContext } from "react"
import { PokeContext } from "../Storepage"

export default function Featcard(props){
    const {setPreviewPoke} = useContext(PokeContext)

    function viewPoke(pokemon){
        setPreviewPoke(pokemon)
    }

    return(
        <div className="cards">
            <img src={props.sprite} alt="pokemon_sprite"/>
            <p> {props.name} </p>
            <p> ${props.price} </p>
            <button type="button" className="cardbtn" onClick={() => viewPoke(props.name.toLowerCase())}> VIEW </button>
            <button type="button" className="cardbtn" > ADD TO CART</button>
            
            

        </div>
    )
}