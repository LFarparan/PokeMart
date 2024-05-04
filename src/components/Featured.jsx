import Featcard from "./Featcard"
import getPokemon from "./getPokemon"
import React, { useEffect, useState, useRef } from "react"

export default function Featured(){
    const pokeData = useRef(null);
    const [pokename, setPokename] = useState('legolas');
    const featPoke = 'milotic'
    useEffect(()=> {
        const getPoke = async() => {
            let url = 'https://pokeapi.co/api/v2/pokemon/' + featPoke
            const response = await fetch( url, {mode: 'cors'})
            const pokeData = await response.json();
            setPokename(pokeData.species.name)
        }
        getPoke();
    },[])



    return(
        <>
            <h2 className="feat"> Featured Goods </h2>
            <div className="featurecon">
                <Featcard/>
                <Featcard/>
                <Featcard/>
                <Featcard/>
                <Featcard/>
            </div>
            <p> {pokename} </p>
        </>
    
    )
}