import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Numbers from './components/Numbers'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })

  }, [])


  const personsToShow = persons.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newPhoneNumber
    }

    if (persons.find(p => p.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = persons.find(p => p.name === newName).id
        personService
          .update(id, personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))

          })
      }
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
    
    setNewName('')
    setNewPhoneNumber('')
  }

  const handleDeleteName = (person) => {

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .eliminate(person.id)
        .then(() => {
          const copy = persons
          const filtered = copy.filter(p => p.id !== person.id)
          setPersons(filtered)
        })
    } else {
      return
    }
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
      <Filter filVal={filter} onChange={handleFilterChange} />
      <Form newName={newName} handleNameChange={handleNameChange} newPhoneNumber={newPhoneNumber} handlePhoneNumberChange={handlePhoneNumberChange} addName={addName} />
      <Numbers personsToShow={personsToShow} handleDelete={handleDeleteName} />
    </div>
  )
}

export default App