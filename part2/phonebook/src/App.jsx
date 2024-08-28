import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
const App = () => {
  const [persons, setPersons] = useState([ 
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }  
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search,setSearch] = useState('')
  const [searchResult,setSearchResult] = useState(persons)

  const clearInputs = () =>{
    setNewName('')
    setNewNumber('')
  }

  const newSet = (nameObject) =>{
    setPersons(persons.concat(nameObject))
    setSearchResult(persons.concat(nameObject))
    console.log(persons)
    console.log(searchResult)
  }

  const handleAddContact = (event) =>{ //Too cluttered
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
    console.log(event.target.value)
    const search = event.target.value
    console.log(search)
    setSearchResult(
      search === '' 
        ? persons 
        : persons.filter(person => person.name.includes(search))
    )
  }
  
  const handleNameChange = (event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNewNumber = (event)=>{
    console.log(event.target.value)
    setNewNumber(event.target.value) 
  }
  
  const handleNewSearch = (event) =>{
    console.log(event.target.value)
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