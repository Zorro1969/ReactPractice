import React, {useState} from 'react';
import './Box.css';

export default function Box(props) {
   const [count, setCount]=useState(0);
    return (
        
        <div className='box col-3' onClick={()=>setCount(count+1)} style={  {backgroundColor:`${props.color}`}  }>{count}</div>
            
        
    );
}