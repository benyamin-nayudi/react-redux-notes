import React from 'react'
import {buyIceCream} from './redux'
import {connect} from 'react-redux'


function CakeContainer(props) {
    return (
        <div>
            <h2>number of iceCream: {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>buy</button>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        numOfIceCream : state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyIceCream : ()=> dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)
