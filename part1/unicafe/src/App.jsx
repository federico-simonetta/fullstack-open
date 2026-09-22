import { useState } from 'react'

const Title = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Button = ({label, onClick}) => {
  return(
    <button onClick={onClick}>{label}</button>
  )
}

const Stats = ({good, neutral, bad}) => {
  return(
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title text="give feedback" />
      <Button label="good" onClick={handleGood}/>
      <Button label="neutral" onClick={handleNeutral}/>
      <Button label="bad" onClick={handleBad}/>
      <Title text="statistics"/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App