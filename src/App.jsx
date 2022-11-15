import './App.css';
import React, { useState } from 'react';

function App() {

  const [numbers, setNumbers] = useState(0)



  // setNumbers = 0;


  const increase = () => {
    setNumbers(numbers+1)
    if(numbers === 10){
      alert("CONGRATS FOR CLICKING UNTIL "+ numbers)
      setNumbers(numbers)
    }

  }
  const decrease = () => {
    setNumbers(numbers-1)
    if(numbers <= 0){
      alert("Nothing Below 0")
      setNumbers(0)
    }
  }


  return (
    <div className="App">
      <h1 className='text-center'>{numbers}</h1>
      <div className="btn-group d-flex justify-content-center">
        <button className='btn btn-primary' onClick={() => increase()}>+</button>
        <button className='btn btn-danger' onClick={() => decrease()}>-</button>
      </div>
      
    </div>
  );
}

export default App;
