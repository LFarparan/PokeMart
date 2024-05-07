import meowth from '../assets/meowth.png'

export default function Company(){

    return(
        <div className='companycon'>
            <img src={meowth} alt="meowth logo" width='60px'/>
            <div  className="company">
                <h2> PokeMart </h2>
                <p className="dim"> NOT a black market </p>
            </div>
            
        </div>
    )
}