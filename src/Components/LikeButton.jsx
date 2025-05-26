import React, { useState } from 'react'

const LikeButton = () => {
    const [liked,SetLIked]= useState(false);
    const toggleLike =() =>{
        SetLIked(! liked);
    };
  return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>like button</h2>

            <button 
            onDoubleClick={toggleLike} style={{
                padding:'100px 20px',fontSize:'18px',
                backgroundColor: liked ? 'red' : 'grey',
                color:'white',
                border: 'none',
                borderRadius:'8px',
                cursor:'pointer',
            }} >{ liked ? 'Liked ❤️':'Like 🤍' }</button>
        </div>
  )
}

export default LikeButton