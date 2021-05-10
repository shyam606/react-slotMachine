import React, { useState } from 'react';
import SlotM from './Slotmac';
const App = ()=>{

    const [main1,update1] = useState();
    const [main2,update2] = useState();
    const [main3,update3] = useState();
    const myFunc = ()=>{
        update1(SlotM)
        update2(SlotM)
        update3(SlotM)
    } 
    return(<>
    <h1 className="heading_style">🎰 Welcome to <span style={{fontWeight:"bold"}}>Slot machine game</span>🎰</h1>
    <div className="slotMachine">
    {main1}<hr/>
    {main2}<hr/>
    {main3}
    </div>
    <button className="btn" onClick={myFunc}>Start</button>
    </>)
}

export default App;