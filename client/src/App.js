import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import Auth from "./components/Auth/Auth";
import Header from './components/Header/Header'

// pages
import Books from './components/Books/Books';

const initialUser = {
  name: '',
  books: [],
  city: '',
  state: '',
  isLoggedIn: false
}

function App() {
  const [ user, setUserInfo ] = useState(initialUser);
  return (
    <div className="App">
      <Header isLoggedIn={user.isLoggedIn}/>
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Redirect to = '/books'/>
          </Route>
          <Route exact path = '/books'>
            <Books user={user}/>
          </Route>
          <Route exact path = '/auth'>
            <Auth user={user}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
