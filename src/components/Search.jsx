import React, { useState, useRef } from "react"
import Featcard from "./Featcard";

export default function Search(){
    const [searchResult, setSearchResult] = useState('');
    let searchtext = useRef('')
    let featData = useRef(null);

    function search(){
        setSearchResult(null);
        const getPoke = async(pokemon) => {
            let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon
            try{
                const response = await fetch( url, {mode: 'cors'})
                const jsoned = await response.json();
                console.log(response)
                let pokeData = [{
                    name: capitalize(jsoned.species.name),
                    sprite: jsoned.sprites.front_default,
                    price: jsoned.weight
                }]
                console.log(pokeData)
                setSearchResult(pokeData.map((pokemon) => <Featcard key={pokemon.name} 
                                                                        sprite={pokemon.sprite} 
                                                                        name={pokemon.name}
                                                                        price={pokemon.price} />))
            }
            catch(error){
                setSearchResult(<p align='center'> Search is invalid. <br/> Check the product name and try again</p>)
            }
        }
        getPoke(searchtext.current.value.toLowerCase())
    }

    function capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return(
        <div className="searchbox">
            <div className='searchcon'>
                <input type="text" ref={searchtext}/>
                <button type="button" className="searchbtn" onClick={search}> SEARCH </button>
            </div>
            <br/><br/>
            {searchResult}
        </div>
        
    )
}