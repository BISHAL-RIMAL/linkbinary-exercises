import { useState } from "react";
function SimpleCounter() {
    const [count, setCount] = useState(0);
    return(
        <div>
            <h2>Simple Counter</h2>
            <h2>Count:{count}</h2>
            <button onClick={()=> setCount(count +1)} > Plus (+)</button>
            <button onClick={()=> setCount(count -1)} >Minus (-)</button>
        </div>
    );
}
export default SimpleCounter;