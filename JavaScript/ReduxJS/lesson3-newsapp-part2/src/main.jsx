import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './manager/store/configureStore'
import { addNews } from './manager/actions/newsAction'
const mystore = configureStore();
mystore.subscribe(() => {
  console.log(mystore.getState());
});






mystore.dispatch(addNews({myphoto: "https://cdn.dribbble.com/userupload/3788068/file/still-980a091cf6e4090b3ea115bfa9da6da2.png?resize=400x0", mytitle:"Bu gun hava gunesli olacaq",mydesc:"havada maqinit var ehtiyatli olun"}));

 mystore.dispatch(addNews({myphoto: "https://img.uefa.com/imgml/uefacom/ucl/social/og-default.jpg", mytitle:"Bu gun Cempiyonlar liqasinin oyunu var",mydesc:"Barca vs Real Madrid oynayacaq!"}));



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
