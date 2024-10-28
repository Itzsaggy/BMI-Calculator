import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {

  const [height,setHeight]= useState(150);
  const [weight,setWeight]=useState(40);

  function onWeightChange(event){
    setWeight(event.target.value)
  }

  function onHeightChange(event){
    setHeight(event.target.value)
  }
  
  const output = useMemo(()=>{
    const calculateHeight = height/100;
    return (weight/(calculateHeight*calculateHeight)).toFixed(1);
  },[weight,height]);

  return (
    <main>
    <h1>BMI calculator</h1>
    <div className='input-section'>
      <p className='slider-output'>Weight:{weight} Kg</p>
      <input className='input-slider' type='range' 
      step='1' min='40' max='200' onChange={onWeightChange}/>
      <p className='slider-output'>Height: {height}Cm</p>
      <input className='input-slider' type='range' 
      step='1' min='140' max='220' onChange={onHeightChange}/>
    </div>
    <div>
      <p className='output-section'>Your BMI is</p>
      <p className='output'>{output}</p>
    </div>
    </main>
  )
}

export default App
