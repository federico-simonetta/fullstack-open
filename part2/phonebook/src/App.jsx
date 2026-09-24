import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')


  const personsToShow = persons.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newPhoneNumber,
      id: persons.length + 1
    }

    if (persons.find(p => p.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }


    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhoneNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter filVal={filter} onChange={handleFilterChange}/>
      <Form newName={newName} handleNameChange={handleNameChange} newPhoneNumber={newPhoneNumber} handlePhoneNumberChange={handlePhoneNumberChange} addName={addName}/>
      <Numbers personsToShow={personsToShow}/>
    </div>
  )
}

export default App