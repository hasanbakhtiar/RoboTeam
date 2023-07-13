import { createStore } from "redux";
import { newsReducer } from "../reducers/newsReducer";

const configureStore = () => {
    const mystore = createStore(newsReducer);
    return mystore;
}

export default configureStore;