

const Country = ({value}) =>{
    return(
        <div>
            <h1>{value.name.common}</h1>
            <p>capital {value.capital[0]}</p>
            <p>area {value.area}</p>

            <h3>languages:</h3>
            <ul>
                {
                    Object.entries(value.languages).map(language => {
                        return <li key={language[0]}>{language[1]}</li>
                    })
                }
            </ul>
            <img src={value.flags.png} alt={value.flags.alt} />
        </div>
    )
}

export default Country