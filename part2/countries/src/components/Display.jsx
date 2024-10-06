import Country from "./Country";

const Display = ({result, showCountry}) =>{
    if(!result){
        return null;
    }
    
    if(result.length > 10){
        return <p>Too many matches, specify another filter</p>
    }
    
    if(result.length === 1){
        return <Country value = {result[0]}/>
    }

    return(
        
        <div>
            {result.map(country => {
                return (
                    <p key ={country.name.common}>{country.name.common} <button onClick={showCountry(country)}>show</button></p> 
                )
            })}
        </div>
    
    )
}


export default Display