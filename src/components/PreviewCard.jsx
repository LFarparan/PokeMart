import { useContext } from "react"
import { PokeContext } from "../Storepage"
import SoundButton from "./Crybtn";

export default function Previewcard(props){
    const {setPreviewPoke} = useContext(PokeContext)

    function playCry() {
        const audio = new Audio(props.cry);
        audio.play();
       
    }

    return(
        <div className="previewcard">
            <h2 id="pokedex"> Cry Simulator </h2>
            <div className="basicinfo">
                <img src={props.sprite} alt="pokemon_sprite" className="pokepreview"/>
                <div className="basics">
                    <p> Name: {props.name} </p>
                    <p> Price: ${props.price} </p>
                    <SoundButton cry={props.cry}/>
                </div>
            </div>
            <div className="others">

            </div>
            
            

        </div>
    )
}