import React, { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';

function App() {
  const [color,setColor]=useState("purple")

  const handleChangeColor=()=>{
    setColor()
  }
  return (
    <div id="app">
      <QuoteBox onChangeAppColor={handleChangeColor} color={color}/>
    </div>
  );
}

export default App;
