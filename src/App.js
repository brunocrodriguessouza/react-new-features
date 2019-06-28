import React, { useState, useEffect } from 'react';

export default (props) => {
    // const [state, setState] = useState({
    //     count: props.count,
    //     text: ''
    // })
    const [count, setCount] = useState(props.count)
    const [text, setText] = useState('')


    useEffect(() => {
        console.log('useEffect ran');
    })

    const increment = () => {
        // setState({ ...state, count: state.count +1 })
        setCount(count + 1);
    }

    const decrement = () => {
        // setState({ ...state, count: state.count -1 })
        setCount(count - 1);
    }

    const reset = () => {
        // setState({ ...state, count: props.count })
        setCount(0);
    }

    const changeInputValue = (e) => {
        // setState({ 
        //     text: e.target.value, 
        //     count: state.count 
        // })
        setText(e.target.value);
        setCount(count);
    }

    return(
        <div>
            {/* <p>The current {state.text || 'count'} is {state.count}</p> */}
            <p>The current {text || 'count'} is {count}</p>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+1</button>
            {/* <input value={state.text} onChange={(e) => changeInputValue(e)}/> */}
            <input value={text} onChange={(e) => changeInputValue(e)}/>
        </div>
    )
}
