export default function Featcard(props){

    return(
        <div className="cards">
            <img src={props.sprite} alt="pokemon_sprite"/>
            <p> {props.name} </p>
            <p> ${props.price} </p>
            <button type="button" className="cardbtn" > VIEW </button>
            <button type="button" className="cardbtn" > ADD TO CART</button>
            
            

        </div>
    )
}