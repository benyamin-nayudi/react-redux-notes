import React from 'react'
import CakeContainer from './CakeContainer'

import {Provider} from 'react-redux'
import store from './redux/store'
import HookCakeContainer from './redux/HookCakeContainer'
import IceCreamContainer from './IceCreamContainer'

function App() {
    return (
        <Provider store={store}>
            <div>
                <CakeContainer />
                <HookCakeContainer />
                <IceCreamContainer />
            </div>
        </Provider>
    )
}

export default App
