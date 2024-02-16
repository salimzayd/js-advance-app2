import React,{useReducer} from 'react'

const initialState = {
    firstcounter : 0,
    secondcounter : 10
}

function reducer (state,action){
    switch(action.type){
        case 'increment':
            return { ...state,firstcounter: state.firstcounter + action.value}
        case 'decrement':
            return {...state, firstcounter : state.firstcounter - action.value}
            
        case 'increment2':
            return {...state, secondcounter: state.secondcounter + action.value}
        case 'decrement2':
            return {...state, secondcounter : state.secondcounter - action.value}

           
        case 'reset':
            return  initialState
        default  :
        return state         
    }

}

function Complexreducer() {
   const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div> count is {count.firstcounter }</div>
        <div>second counter {count.secondcounter}</div>

        <button onClick={() => dispatch({type: 'increment', value:1})}>increment</button>
        <button onClick={() => dispatch({type: 'decrement', value:1})}>decrement</button>
        <button onClick={() => dispatch({type: 'increment', value:5})}>increment 5</button>
        <button onClick={() => dispatch({type: 'decrement', value:5})}>decrement 5</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset </button>
        <div>
        <button onClick={() => dispatch({type: 'increment2', value: 2})}>increment counter 2</button>
        <button onClick={() => dispatch({ type: 'decrement2', value:2})}>decrement counter 2</button>
        </div>
    </div>
  )
}

export default Complexreducer;