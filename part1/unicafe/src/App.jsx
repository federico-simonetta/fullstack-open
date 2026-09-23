import { useState } from 'react'

const Title = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad
  const average = ((1 * good) + (0 * neutral) + (-1 * bad)) / all
  const positive = (good / all) * 100

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + "%"} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text} {value}</td>
    </tr>
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
      <Button label="good" onClick={handleGood} />
      <Button label="neutral" onClick={handleNeutral} />
      <Button label="bad" onClick={handleBad} />
      <Title text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App