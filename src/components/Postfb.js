import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Postfb.css'


export default function Postfb(){
    const [like, setLike]=useState(0);
    const [hate, setHate]=useState(0);
    return(
        <div className="card" style={{width: "50rem"}}>
            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*hm7aE3BdUfUWUgBYK1GiZA.jpeg" className="card-img-top" alt="hhh"/>
            <div className="card-body">
                <h5 className="card-title">Post</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-success" onClick={()=>setLike(like+1)}>Like{like}</button>
                <button className="btn btn-danger"  onClick={()=>setHate(hate+1)}>Hate{hate}</button>
                <button className="btn btn-info"  onClick={()=>{setLike(0);setHate(0);}}>Reset</button>
            </div>
        </div>
    );
    
}
