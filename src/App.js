import React, { useState} from 'react';

export default (props) => {
    // const [count, setCount] = useState(props.count)
    // const [text, setText] = useState('')
    const [state, setState] = useState({
        count: props.count,
        text: ''
    })

    const increment = () => {
        // setCount(count + 1)
        setState({ ...state, count: state.count +1 })
    }

    const decrement = () => {
        setState({ ...state, count: state.count -1 })
    }

    const reset = () => {
        setState({ ...state, count: props.count })
    }

    const changeInputValue = (e) => {
        setState({ 
            text: e.target.value, 
            count: state.count 
        })
    }

    return(
        <div>
            <p>The current {state.text || 'count'} is {state.count}</p>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+1</button>
            <input value={state.text} onChange={(e) => changeInputValue(e)}/>
        </div>
    )
}
