import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {buyCake} from '../redux'

function HookCakeContainer() {
    // useSelector accepts a function as its argument and returns it (selector function)
    const numOfCakes = useSelector( (state) => state.cake.numOfCakes)

    // the useDispatch method return an instance of the dispatch function in redux , by passing it an action we can dispatch any action we want 
    const dispatch= useDispatch()

    return (
        <div>
            <h2>number of cakes {numOfCakes}</h2>
            <button onClick={() =>dispatch(buyCake())}>buy cake</button>
        </div>
    )
}



export default HookCakeContainer
