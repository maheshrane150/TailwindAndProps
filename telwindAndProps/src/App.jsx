import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./card.jsx"

function App() {
  const [count, setCount] = useState(50000)

  let increase =() => {
    setCount(count + 2000);
  }

  let Decrease =() => {
    setCount(count - 2000);
  }


  return (
    <>
    <div className='font-bold bg-orange-600'>
    <h1>The Dash Board </h1>
    <Card username="Mahesh Rane" designation="Software Enginear, Pune" salary={count}/>
    <div className='col-span-2'>
    <button className= 'bg-black text-white m-10 rounded-md p-3' onClick={increase}>Increase Salary</button>
    <button className= 'bg-black text-white m-10 rounded-md p-3' onClick={Decrease}>Decrease Salary</button>
    </div>
    <Card username="Pramod Chavhan" designation="Machanical Enginear, Pune" salary={count}/>
    </div>
    </>
  )
}

export default App
