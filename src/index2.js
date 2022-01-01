const  redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')



//state
const initialState = {
    loading: false , 
    users : [] , 
    error : ''
}


// actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE =  'FETCH_USERS_FAILURE'


const fetchUsersRequest = () =>{
    return {
        type : FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) =>{
    return {
        type : FETCH_USERS_SUCCESS,
        payload: users
    }
}


const fetchUsersFailure = error =>{
    return {
        type : fetchUsersFailure , 
        payload: error
    }
}




const reducer = (state = initialState , action) =>{

    switch(action.type){
        case FETCH_USERS_REQUEST :
            return {
                ...state , loading: true
            }

        case FETCH_USERS_SUCCESS :
            return {loading : false , users: action.payload , error : ''}

        case FETCH_USERS_FAILURE:
            return {
                loading: false , 
                users: [] , 
                error : action.payload
            }
        default: 
            return state
    }
}


const fetchUsers = () =>{

    return function (dispatch){
        
        // in this step we fire a dispatch giving the fetchUsersRequest action to it. this action will be get by the reducer and set the loading property to true
        dispatch(fetchUsersRequest()) 
        
        
        // then we asynchronously make an api call with axios  
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>{
                const users = res.data.map(user => user.id )

                // in the then method we dispatch fetchUserSuccess action giving the user's id as a argument, then the reducer will set the users array to the ids
                dispatch(fetchUsersSuccess(users))
            }).catch(err =>{

                // to handle errors we dispatch the fetchUsersFailure giving the error message to it
                dispatch(fetchUsersFailure(err.message))
            })
    }
}

// the thunk middleware allows the actionCreator to returns a function instead of an action. in this case you can get the dispatch method as its argument and dispatch any action while fetching the data like this: 
const store = createStore(reducer , applyMiddleware(thunkMiddleware))

store.subscribe(() => {console.log(store.getState())})

// here we dispatch the fetchUsers action 
store.dispatch(fetchUsers())







