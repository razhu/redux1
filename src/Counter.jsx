import React from "react";

function Counter () {

    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h3>{`Count: ${count}`}</h3>
            <br />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        )
}

export default Counter;