import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './manager/store/configureStore'
import { getnewssFromDatabase } from './manager/actions/newsAction'
const store = configureStore();

const result = (
  <Provider store={store}>
      <App />
  </Provider>
)



ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getnewssFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})