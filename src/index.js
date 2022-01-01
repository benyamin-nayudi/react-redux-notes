import App from "./components/App";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import store from "./components/redux/store"


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,
  rootElement
);
