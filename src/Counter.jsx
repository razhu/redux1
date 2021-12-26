import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from "./redux/ducks/counter";

function Counter () {

    // const [count, setCount] = React.useState(0);
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())

    }
    return (
        <div>
            <h3>{`Count: ${count}`}</h3>
            <br />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
        )
}

export default Counter;