import { useState } from 'react'

const Button = ({ handleClick, label }) => {
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

const Anecdote = ({ title, anecdote, votes }) => {
  return (
    <>
    <h1>{title}</h1>
    <div>
      {anecdote}
    </div>
    <div>
      hast {votes} votes
    </div>
  </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [maxVote, setMaxVotes] = useState(0)


  const handleNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    if (copy[selected] > votes[maxVote]) {
      setMaxVotes(selected)
    }
    setVotes(copy)
  }

  return (
    <>
      <Anecdote title={"Anectode of the day"} anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <div>
        <Button handleClick={handleVote} label={"vote"} />
        <Button handleClick={handleNext} label={"next anecdote"} />
      </div>
      <Anecdote title={"Anecdote with most votes"} anecdote={anecdotes[maxVote]} votes={votes[maxVote]}/>
    </>
  )
}

export default App