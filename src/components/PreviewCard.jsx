import { useContext } from "react"
import { PokeContext } from "../Storepage"

export default function Previewcard(props){
    const {setPreviewPoke} = useContext(PokeContext)

    function viewPoke(pokemon){
        setPreviewPoke(pokemon)
    }

    return(
        <div className="previewcard">
            <h1 id="pokedex"> PokeDex </h1>
            <div className="basicinfo">
                <img src={props.sprite} alt="pokemon_sprite" className="pokepreview"/>
                <div className="basics">
                    <p> Name: {props.name} </p>
                    <p> Price: ${props.price} </p>
                </div>
            </div>
            <div className="others">

            </div>
            
            

        </div>
    )
}