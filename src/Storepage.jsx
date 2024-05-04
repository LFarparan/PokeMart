import Company from "./components/Company"
import Featured from "./components/Featured"
import './Store.css'

export default function StorePage(){
    return(
        <>
            <div className="store-header">
                <Company/>
            </div>
            <div className="featured-section">
                <Featured/>
            </div>
        </>
    )
}