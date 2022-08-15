import React, { useState } from 'react';
import './App.css';


function Button(props: {colors: string[]}) {
  const [color, setColor] = useState('#D1F0B1')
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = (colors:string[]) =>{
    setColor(props.colors[currentColorIndex])
    console.log(currentColorIndex);
    
    if(currentColorIndex >= 4){
      setCurrentColorIndex(0);
    }else {
      setCurrentColorIndex(currentColorIndex + 1);
    }
  }
  return(
    <button
      style={{backgroundColor: color}}
      color='red' 
      onClick={() => handleClick(props.colors)}
    >
      Color Switcher
    </button>
  );
};


function App(){
  const colors: string[] = [
    '#4D9DE0', //Carolina blue
    '#306B34', //Darthmouth green
    '#1C5253', //Deep jungle green
    '#A31621', //Ruby red
    '#81667A' //old lavender
  ]
  return (
    <>
      <header>
        <nav>
          <h1>Button Color Switcher</h1>
        </nav>
      </header>

      <main>
        <div className="color-btn">
          <Button colors={colors}/>
        </div>
      </main>
    </>
  );
}

export default App;
