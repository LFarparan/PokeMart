import React, { useEffect, useContext, useState} from "react"
import Previewcard from "./PreviewCard";
import { PokeContext } from "../Storepage";

export default function Preview(){
    const {previewPoke} = useContext(PokeContext);
    const [previewNode, setPreviewNode] = useState(null)

    function capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    useEffect(() => {
        const getPoke = async(pokemon) => {
            let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon
            try{
                const response = await fetch( url, {mode: 'cors'})
                const jsoned = await response.json();
                console.log(jsoned)
                let pokeData = [{
                    name: capitalize(jsoned.species.name),
                    sprite: jsoned.sprites.front_default,
                    price: jsoned.weight,
                    cry: jsoned.cries.latest
                }]
                console.log(pokeData.type)
                setPreviewNode(pokeData.map((pokemon) => <Previewcard key={pokemon.name} 
                                                                        sprite={pokemon.sprite} 
                                                                        name={pokemon.name}
                                                                        price={pokemon.price}
                                                                        cry={pokemon.cry} />))
            }
            catch(error){
                // console.log(error)
                setPreviewNode(<p align='center'> No preview available. Please try Again Later</p>)
            }
        }
        getPoke(previewPoke)
    

    }, [previewPoke])

    return(
        <>
            {previewNode}
        </>
    )
}