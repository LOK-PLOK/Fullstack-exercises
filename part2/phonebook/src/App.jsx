import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'
import Services from './services/persons'
import Notification from './components/Notification'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search,setSearch] = useState('')
  const [searchResult,setSearchResult] = useState(persons)
  const [errorMessage, setErrorMessage] = useState('No ERRORS')

  useEffect(() =>{
    Services
        .read()
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
    const nameObject = { name: newName , number: newNumber,}
    let check = persons.find((person)=>person.name === nameObject.name)
    const baseUrl = 'http://localhost:3001/persons'
    if(check){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        Services
        .update(check.id, nameObject)
        .then(response =>{
          const updated = persons.map(person =>person.id !== check.id ? person : response.data)
          setPersons(updated)
          setSearchResult(updated)
          setErrorMessage(`Updated ${nameObject.name}`)
          setTimeout(()=>{
            setErrorMessage(null)
          },5000)
        })
        
      }
    }else{
      Services
      .create(nameObject)
      .then(response => {
        newSet(response.data)
        setErrorMessage(`Added ${nameObject.name}`)
        setTimeout(()=>{
          setErrorMessage(null)
        },5000)
      })
      
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

  const handleDelete = (personObj) =>{
    const removed = persons.filter(person => person.id !== personObj.id)
    if(window.confirm(`Delete ${personObj.name}`)){
      Services
      .deleter(personObj.id)
      .then(response => {
          setPersons(removed)
          setSearchResult(removed)
        })
      .catch(error =>{
        setErrorMessage(
          `The person ${personObj.name} was already deleted from server`
        )
        setTimeout(()=>{
          setErrorMessage(null)
        },5000)
        setPersons(removed)
        setSearchResult(removed)
      })
    }
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification  message={errorMessage}/>
     
      <Filter find = {find} value ={search} handleNewSearch = {handleNewSearch}/>

      <h2>add a new</h2>
        <PersonForm handleAddContact = {handleAddContact}
          newName = {newName}
          handleNameChange = {handleNameChange}
          newNumber = {newNumber}
          handleNewNumber = {handleNewNumber}
        />
      <h2>Numbers</h2>

      <Persons persons ={searchResult} handleDelete ={handleDelete}/>
      
    </div>
  )
}

export default App