### async action calls in redux:
> lets build an application that fetches all the users and stores it in the redux store

1. we want to find out how does the state changes?
2. how the actions change?
3. and how the reducer changes?


---
## state:
state={
    loading: true,
    data =  [ ] , 
    error : ' '
}
- our state have three properties . 
1. `loading: true`  => the first one is loading (and you can specify it to show loading message and shows you weather the date being fetched of not)

2. `data:`  list of users and it does have initial state.

3. `error:` return back an error showing that the data has not been fetched

---
## actions :


`FETCH_USERS_REQUEST : `fetch list of users

`FETCH_USERS_SUCCESS  :` fetched successfully

`FETCH_USERS_FAILURE : `error fetching 


---
## reducers

- if fetch user request => loading : true

- if fetched successfully => loading : false , users: data (from api)

- if fetched failed => loading : true , error : error (from api)



---

## async action creators 
> how to make async api calls

1. `axios`
2. `redux-thunk :` is middleware making the actionCreators return function









