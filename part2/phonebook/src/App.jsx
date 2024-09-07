import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search,setSearch] = useState('')
  const [searchResult,setSearchResult] = useState(persons)

  useEffect(() =>{
    axios
        .get('http://localhost:3001/persons')
        .then(response =>{
          setPersons(response.data)
          setSearchResult(response.data)
        })
  },[])


  const clearInputs = () =>{
    setNewName('')
    setNewNumber('')
  }

  const newSet = (nameObject) =>{
    setPersons(persons.concat(nameObject))
    setSearchResult(persons.concat(nameObject))
  }

  const handleAddContact = (event) =>{ 
    event.preventDefault()
    const lastID = persons.length
    const nameObject = { name: newName , number: newNumber, id: lastID + 1}
    let check = persons.find((person)=>person.name === nameObject.name)
    if(check){
      alert(`${newName} is already added to phonebook`)
    }else{
      newSet(nameObject)
    }
    clearInputs()
  }
  
  const find = (event) => {// make the code neet
    const search = event.target.value
    setSearchResult(
      search === '' 
        ? persons 
        : persons.filter(person => person.name.includes(search))
    )
  }
  
  const handleNameChange = (event)=>{
    setNewName(event.target.value)
  }
  
  const handleNewNumber = (event)=>{
    setNewNumber(event.target.value) 
  }
  
  const handleNewSearch = (event) =>{
    setSearch((event.target.value))
  }


  return (
    <div>
      <h2>Phonebook</h2>
     
      <Filter find = {find} value ={search} handleNewSearch = {handleNewSearch}/>

      <h2>add a new</h2>
        <PersonForm handleAddContact = {handleAddContact}
          newName = {newName}
          handleNameChange = {handleNameChange}
          newNumber = {newNumber}
          handleNewNumber = {handleNewNumber}
        />
      <h2>Numbers</h2>

      <Persons persons ={searchResult}/>
    </div>
  )
}

export default App