import React, { useState } from "react";
import TimePicker from "rc-time-picker";

 

  
  

  const Picker = () => {

    const [time, setTime] = useState('');


      return ( 
        <div>
        React Time Picker - <a href="https://www.cluemediator.com/" target="_blank" rel="noopener noreferrer">Clue Mediator</a>
        <br />
        <p>Selected Time: {time || '-'}</p>
        <TimePicker
          placeholder="Select Time"
          use12Hours
          showSecond={false}
          focusOnOpen={true}
          format="hh:mm A"
          onChange={e => setTime(e.format('LT'))}
        />
      </div>
       );
  }
   
  export default Picker;