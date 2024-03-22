import { useState } from 'react'
import MostVotes from './MostVotes'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const Next = () => {
    setSelected((selected * 0) + getRandomInt(8))
  }
  const Vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }
  const mostVoted = points.indexOf(Math.max(...points))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>has {points[selected]} votes
      <br/><button onClick={Vote}> vote </button> <button onClick={Next}> next anecdote </button>

      <MostVotes
      anecdotes={anecdotes[mostVoted]}
      points={points[mostVoted]}
      />
    </div>
  )
}

export default App