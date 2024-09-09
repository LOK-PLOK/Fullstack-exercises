import { useState, useEffect } from 'react'
import services from './services/service'
import Form from './components/Form'
import Display from './components/Display'  
const App = () => {
  const [countries, setCountries] = useState([]); 
  const [search, setSearch] = useState(''); 
  const [result, setResult] = useState([]);

  useEffect(() => {
    services
      .retrive()
      .then(response => {
        console.log(response.data);
        setCountries(response.data);  
      })
      .catch(error => console.error('Error fetching data:', error));  
  }, []);

  const find = (input) => (country) =>
    country.name.common.toLowerCase().includes(input.toLowerCase());  

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = countries.filter(find(search));  
    setResult(filtered);  
    console.log(filtered);  
  };

  const handleSearch = (event) => {
    setSearch(event.target.value); 
  };
  
  const showCountry = (value)=>{
    return () =>setResult([value])
  }

  console.log(result)
  return (
    <div>
      <Form handleSearch={handleSearch} handleSubmit={handleSubmit} />
      <Display result={result} showCountry={showCountry}/> 
    </div>
  );
}

export default App;
