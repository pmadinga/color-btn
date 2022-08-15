import React, { useState } from 'react';
import './App.css';


const colors: string[] = [
  '#D1F0B1', //tea green
  '#306B34', //Darthmouth green
  '#1C5253', //Deep jungle green
  '#E59F71', //Tan crayola
  '#81667A' //old lavender
]

const App = () => {
  const [color, setColor] = useState('#D1F0B1')

  const handleClick = (colors:string[]) =>{
    setColor(colors[3])
  }
  return (
    <>
      <header>
        <nav>
          <h1>Button Color Switcher</h1>
        </nav>
      </header>

      <main>
        <button
          style={{backgroundColor: color}}
          color='red' onClick={() => handleClick(colors)}>Test Btn</button>
      </main>
    </>
  );
}

export default App;
