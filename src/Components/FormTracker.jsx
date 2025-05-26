import React, { use, useState } from 'react'

const FormTracker = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
        <h2>Form input tracker</h2>
        <input type="text" placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)}
        style={{margin:'10px',padding:'8px'}}/> <br />
        <input type="email" placeholder='enter your email ' value={email} onChange={ (e)=> setEmail (e.target.value)} 
        style={{margin:'10px', padding:'8px'}}/>
        <br /><br />
        <p><strong>typed Name:</strong>{name}</p>
        <p><strong>typed email:</strong>{email}</p>
    </div>
  )
}

export default FormTracker