import { useEffect, useState } from 'react';
import services from '../services/service'

const Country = ({value}) =>{
    const [weatherInfo, setWeatherInfo] = useState(null);

    useEffect(()=>{
        services.WeatherData(value.capital[0])
        .then((response)=>{
            setWeatherInfo(response.data);
          })
      },[])

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
            <h2>Weather in {value.capital[0]}</h2>
            <p>temperature {weatherInfo.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt="" />
            <p>wind {weatherInfo.wind.speed} m/s</p>
        </div>
    )
}

export default Country