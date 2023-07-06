import React from 'react'
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';


// const store = createStore(
//   (state,action)=>{
//     switch (action.type) {
//       case "Complaine":
//           return 'this is comp'
//       case "Offer":
//         return "this is offer"
//       default:
//         return 'stabile'
//     }
//   }
// );

// store.dispatch({
//   type:"Complaine"
// })
// console.log(store.getState());


const initialState = {
  count: 0
}
// Reducer Start
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + (typeof action.payload === 'number' ? action.payload : 1 ) };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}
// Reducer End

// Store Start
const store = createStore(counterReducer);
// Store End



// Action Start
const counterAdd = ({item})=>({
  type: "INCREMENT",
  payload:item
})
// Action End


store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(counterAdd({item:100}));
store.dispatch(counterAdd({item:10}));
store.dispatch(counterAdd({item:1}));



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Hello Redux</h1>
  </React.StrictMode>,
)
