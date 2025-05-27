import React, { useState } from 'react'
import Form from './FormTracker'
import Color from './ColorChanger' 
import Like from './LikeButton'
import DigitalClock from './DigitalClock'
const Practes = () => {
   const [count,setCount] = useState(0);
   const [show,setShow] = useState(true);
  return (
    <>
    <div style={{ textAlign:'center',marginTop:'50px'}}>
    <h2>counter app</h2>
    <h1>{ count }</h1>
    <button onClick={() => setCount(count + 1)} >incres</button>
    <button onClick={() => setCount(count - 1)} >decres</button>
    <button onClick={() => setCount(0)}>reset</button>
     <hr />
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Toggle Text</h2>
    <button onClick={()=> setShow(! show)} >{show ? 'hide' : 'show'} Message </button>
    { show && <p>Wakkali!!</p> }
    </div>
    <hr />
    <Form/>
    <hr />
    <Color/>
    <hr />
    <Like/>
    </div>
    <hr />
    <DigitalClock/>
    </>
  )
}
export default Practes