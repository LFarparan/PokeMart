import Company from "./components/Company"
import Featured from "./components/Featured"
import Search from "./components/Search"
import Preview from "./components/Preview"
import './styles/Store.css'
import React, { useState, createContext } from "react"

export const PokeContext = createContext();

export default function StorePage(){
    const [previewPoke, setPreviewPoke] = useState('milotic')

    return(
        <div className="storepage">
            <PokeContext.Provider value={{previewPoke, setPreviewPoke}}>
                <div className="storecon">
                    <div className="store-header">
                        <Company/>
                    </div>
                </div>
                
                <div className="featured-section">
                    <Featured/>
                </div>
                <div className="search-section">
                    <Preview/>
                    <Search/>
                </div>
            </PokeContext.Provider>
            <br />
        </div>
    )
}