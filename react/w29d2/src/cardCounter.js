import React, { useState } from 'react'

function CardCounter() {
    const [counter, setCounter] = useState(0) //initialization

    const increment = () => {
      setCounter(counter + 1)
    }
  
    const decrement = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }else{
            console.log('Can not go befor 0')
        }
      
    }
  
    return (
     <>
      <button onClick={increment}>+</button>
          {/* access state values */}
          <div id="count">Ordered: {counter}</div>
          <button onClick={decrement}>-</button>
     </>
        
    )
  }

export default CardCounter



  
