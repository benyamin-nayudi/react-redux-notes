import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from './redux'

function CakeContainer(props) {
    // then here we can access the states and dispatchers via props
    console.log(props)
    return (
        <div>
            <h2>number of cake{props.numOfCakes}</h2>
            <button onClick={props.buyCake}>buy</button>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        numOfCakes : state.numOfCakes
    }
}

// we use mapDispatchToProps function to access the actionCreators and dispatch function. it takes the dispatch argument as a parameter and we can assign an object like this defining property and method to execute
const mapDispatchToProps = (dispatch) =>{
    return {
        buyCake : ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)
