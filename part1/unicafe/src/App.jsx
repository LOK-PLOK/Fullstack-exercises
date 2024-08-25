import { useState } from 'react'

const Button = ({onClick,text}) =>{
  return(
    <button onClick = {onClick}>{text}</button>
  )
}

const StatisticsLine = ({value, text}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad}) => {
  if(good === 0 && neutral === 0 && bad === 0){
    return(
      <p>No feedback given</p>
    )
  }

  const average = ((good-bad)/(good+neutral+bad)).toFixed(1);
  const positive = ((good / (good + neutral + bad)) * 100).toFixed(1);
  
  return(
    <table>
      <tbody>
      <StatisticsLine value = {good} text='good'/>
      <StatisticsLine value = {neutral} text='neutral'/>
      <StatisticsLine value = {bad} text='bad'/>
      <StatisticsLine value = {average} text='average'/>
      <StatisticsLine value = {positive + '%'} text='positive'/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementor = (value,newState) =>{
    return () => newState(value + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {incrementor(good,setGood)} text = 'good'/>
      <Button onClick = {incrementor(neutral,setNeutral)} text = 'neutral'/>
      <Button onClick = {incrementor(bad,setBad)} text = 'bad'/>
      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App