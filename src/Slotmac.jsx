import React from 'react';
import myFunc from './Newemoji';



const SlotM=()=> {
  
    let x = myFunc();
    let y= myFunc();
    let z = myFunc();

    if ((x===y) && (y===z)){
        return(<>
            <div className="slot_inner">
                <h2>{x}{y}{z}</h2>
                <h2>This is Matching.</h2>
            </div>
        </>)
    }else{ 
        return(<>
            <div className="slot_inner">
                <h2>{x}{y}{z}</h2>
                <h2>This is Not Matching.</h2>
            </div>
        </>)
        
    }
}

export default SlotM;