import { useState } from "react"
import Search from "./components/Search"
import { useEffect } from "react"
import countryService from "./services/countryService"
import Countries from "./components/Countries"

const App = () => {

  const [searchCountry, setSearchCountry] = useState('')
  const [countries, setCountries] = useState([])


  useEffect(() => {
    countryService
      .getAll()
      .then(initCountries => {
        setCountries(initCountries)
      })
  }, [])


  const filteredCountries = countries.filter((c) => c.name.common.toLowerCase().includes(searchCountry.toLowerCase()))


  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value)
  }

  const handleShow = (country) => {
    setSearchCountry(country.name.common)
  }

  return (
    <div>
      <h1>Countries</h1>
      <Search searchCountry={searchCountry} handleChange={handleSearchChange}/>
      <Countries countries={filteredCountries} handleShow={handleShow}/>
    </div>
  )
}

export default App
