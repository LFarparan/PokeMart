import { Link } from "react-router-dom"

export default function Landing(){
    
    return(
        <div className="description">
            <p className="company-desc">
            A personal project to practice REACT hooks, routing & fetching data 
            from the Pokemon API
            </p>
            <p className="company-desc">
                No pokemon were harmed during the makings of this website
            </p>
            <Link to="/store">
                <button className="storelink" type="button"> BROWSE HERE </button>
            </Link>
        </div>
    )
} 