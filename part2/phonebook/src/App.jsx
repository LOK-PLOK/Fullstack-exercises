import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([  //needs unique ID
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }  
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search,setSearch] = useState('')

  const clearInputs = () =>{
    setNewName('')
    setNewNumber('')
  }

  const handleAddContact = (event) =>{ //Too cluttered
    event.preventDefault()
    const lastID = persons.length
    const nameObject = { name: newName , number: newNumber, id: lastID + 1}
    let check = persons.find((person)=>person.name === nameObject.name)
    if(check){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(nameObject))
    }
    clearInputs
  }
  
  const find = (event) => {
    //Think Code
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

  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
        {/* Search needs improvements */}
      <form onSubmit={find}> 
        <div>filter shown with</div>
        <input value={search} onChange={handleNewSearch}/>
      </form>

      <h2>add a new</h2>
        <PersonForm handleAddContact = {handleAddContact}
          newName = {newName}
          handleNameChange = {handleNameChange}
          newNumber = {newNumber}
          handleNewNumber = {handleNewNumber}
        />
      <h2>Numbers</h2>

      <Persons persons ={persons}/>
    </div>
  )
}

export default App