import React, {useState} from 'react'


const HookCounter =()=>{
    const [count, setcount] = useState(0)

    return(
        <div>
            <h1>
                value: {count} from hook counter
            </h1>

            <button onClick={()=> setcount(count+ 1)}>Increment</button>
        </div>
    )
}

export default HookCounter