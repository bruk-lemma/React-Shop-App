import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import cartReducers from "./reducers/cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducers.js";
import {userDetailsReducer} from "./reducers/userReducers.js";
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducers,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userinfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {cartItems: cartItemsFromStorage},
  userLogin: {userInfo: userinfoFromStorage},
  userRegister: {userInfo: userinfoFromStorage},
  //userDetails: {userDetails: {userInfo: userinfoFromStorage}},
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
