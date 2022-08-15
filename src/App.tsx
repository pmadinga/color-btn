
import React, { useState } from 'react';
import './App.css';


const colors: string[] = [
  '#4D9DE0', //Carolina blue
  '#306B34', //Darthmouth green
  '#1C5253', //Deep jungle green
  '#A31621', //Ruby red
  '#81667A' //old lavender
]

const App = () => {
  const [color, setColor] = useState('#D1F0B1')
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  const handleClick = (colors:string[]) =>{
    setColor(colors[currentColorIndex])
    console.log(currentColorIndex);
    
    if(currentColorIndex >= 4){
      setCurrentColorIndex(0)
    }else {
      setCurrentColorIndex(currentColorIndex + 1)
    }
  }
  return (
    <>
      <header>
        <nav>
          <h1>Button Color Switcher</h1>
        </nav>
      </header>

      <main>
        <div className="color-btn">
          <button
            style={{backgroundColor: color}}
            color='red' onClick={() => handleClick(colors)}>
              Test Btn
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
