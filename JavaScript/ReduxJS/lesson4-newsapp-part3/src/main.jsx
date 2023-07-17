import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './manager/store/configureStore'
import { addNews, editNews } from './manager/actions/newsAction'
const mystore = configureStore();
mystore.subscribe(() => {
  console.log(mystore.getState());
});






mystore.dispatch(addNews({photo: "https://cdn.dribbble.com/userupload/3788068/file/still-980a091cf6e4090b3ea115bfa9da6da2.png?resize=400x0", title:"Bu gun hava gunesli olacaq",desc:"havada maqinit var ehtiyatli olun"}));

const news1 =  mystore.dispatch(addNews({photo: "https://img.uefa.com/imgml/uefacom/ucl/social/og-default.jpg", title:"Bu gun Cempiyonlar liqasinin oyunu var",desc:"Barca vs Real Madrid oynayacaq!"}));

mystore.dispatch(editNews(news1.value.id,{photo: "https://img.uefa.com/imgml/uefacom/ucl/social/og-default.jpg", title:"news data",desc:"news desc"}));



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
