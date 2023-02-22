
import Box from './Box.js';

export default function Boxes({boxes}) {
let boxeso = boxes.map((box)=>{return(<Box color={box.color}/>);});

    return (
        <div className='row box-container'>
        
         {boxeso}
        
        
      </div>
        
    );
}