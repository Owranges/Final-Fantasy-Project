import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//COMPONENTS ROUTES
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from './App';
import Signin from './components/signin/Signin';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Signup from './components/signup/Signup';
import EditProfile from './components/editProfile/EditProfile'
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
import Signup from './components/signup/Signup';
import EditProfile from './components/editProfile/EditProfile'
import Forum from './components/forum/Forum'
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b

// STORE + PERSISTANT
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// REDUCERS
import allReducers from "./storeRedux/reducers/index";

// STORE + PERSISTANT , PERSIST CONFIG TAKE KEY "ROOT" TO ACCESS FROM THE HIGHEST PART OF THE STORE
const persistConfig = {
  key: "root",
  storage,
};

// PERSISTEDREDUCER TAKE 2 PARAMS ONE FOR THE PERSISTCONFIG AND ALL OUR REDUCERS
const persistedReducer = persistReducer(persistConfig, allReducers);
// CREATE STORE WITH THE PERSITATED + ACCESS THE REDUX DEVTOOLS
let store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);

// RENDER



ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/sign-in" component={Signin} />
<<<<<<< HEAD
<<<<<<< HEAD
          {/* <Route path="/productform" component={Product_form} />
          <Route path="/solo-product" component={SoloProduct} />
          <Route path="/profiluser" component={ProfilUser} />
=======
=======
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
          <Route path="/sign-up" component={Signup} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/forum" component={Forum} />
          <Route path='*' exact={true} component={App} />
          {/* <Route path="/profiluser" component={ProfilUser} />
<<<<<<< HEAD
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
          <Route path="/edit-product" component={EditProduct} />
          <Route path="/cart" component={Cart} /> */}
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
