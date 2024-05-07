import Featcard from "./Featcard"
import React, { useEffect, useState, useRef } from "react"
import refresh from '../assets/refresh.svg'

export default function Featured(){
    let featData = useRef([]);
    const [featGoods, setFeatGoods] = useState(null);
    

    
    function refreshFeat(){
        setFeatGoods(null);
        featData.current = [];
        const featPoke = getPokeId()
        const getPoke = async(pokemon) => {
            let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon
            const response = await fetch( url, {mode: 'cors'})
            const jsoned = await response.json();
            let pokeData = {
                name: capitalize(jsoned.species.name),
                sprite: jsoned.sprites.front_default,
                price: jsoned.weight
            }
            featData.current.push(pokeData)
            setFeatGoods(featData.current.map((pokemon) => <Featcard key={pokemon.name} 
                                                                    sprite={pokemon.sprite} 
                                                                    name={pokemon.name}
                                                                    price={pokemon.price} />))
        }
        featPoke.forEach((pokemon) =>{
            getPoke(pokemon);
        })
    }

    function getPokeId() {
        const numbers = [];
        while (numbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * 1025) + 1;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber); 
            }
        }
        return numbers;
    }

    function capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    useEffect(()=> {
        const featPoke = getPokeId()
        const getPoke = async(pokemon) => {
            let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon
            const response = await fetch( url, {mode: 'cors'})
            const jsoned = await response.json();
            let pokeData = {
                name: capitalize(jsoned.species.name),
                sprite: jsoned.sprites.front_default,
                price: jsoned.weight
            }
            featData.current.push(pokeData)
            setFeatGoods(featData.current.map((pokemon) => <Featcard key={pokemon.name} 
                                                                    sprite={pokemon.sprite} 
                                                                    name={pokemon.name}
                                                                    price={pokemon.price} />))
        }
        featPoke.forEach((pokemon) =>{
            getPoke(pokemon);
        })
        
        return () => {
            featData.current = [];
        };
    },[])



    return(
        <>
            <div className="featured-title">
                <h2 className="feat"> Featured Goods </h2>
                <button className="refreshbtn" onClick={refreshFeat}>
                    <img src={refresh} id='refresh' alt="jacknpoi" width='25px'/>
                    <p className="refreshtext"> Refresh </p>
                </button>
            </div>
             
            <div className="featurecon">
                {featGoods}
            </div>
        </>
    )
}