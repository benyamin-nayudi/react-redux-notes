const redux = require('redux')

// first we require the reduxLogger function from redux-logger node package
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers

// now we get the createLogger instance from the reduxLogger to apply it 
const logger = reduxLogger.createLogger()
// and then we get the applyMiddleware function from redux
const applyMiddleware = redux.applyMiddleware



const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const buyCake = () =>{
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

const buyIceCream = () =>{
    return {
        type: BUY_ICECREAM
    }
}


const initialCakeState = {
    numOfCake : 10
}

const initialIceCreamState = {
    numOfCake : 20
}



const cakeReducer = (state = initialCakeState , action) =>{
    switch(action.type){
        case BUY_CAKE:
            return { ...state , numOfCake: state.numOfCake - 1}
        default : 
        return state
    }
}

const iceCreamReducer = (state = initialIceCreamState , action) =>{
    switch(action.type){
        case BUY_ICECREAM:
            return { ...state , numOfIceCream: state.numOfIceCream - 1}
        default : 
        return state
    }
}


const rootReducer = combineReducers({
    cake : cakeReducer , 
    iceCream : iceCreamReducer
})


// here we pass the middleware to the store by passing it to the applyMiddleware function . this logger npm logs everything about the changes in the state 
const store = createStore(rootReducer , applyMiddleware(logger))
console.log('initial state'  , store.getState())
const unsubscribe = store.subscribe(()=> {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

