import { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import Auth from "./components/Auth/Auth";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import UsersList from './components/UsersList/UsersList'

// pages
import Books from './components/Books/Books';

const initialUser = {
  id: null,
  username: '',
  city: '',
  state: '',
  books: [],
  isLoggedIn: false
}

function App() {
  const [ user, setUserInfo ] = useState(initialUser);

  const setUser = (data) => {
    if (!data) setUserInfo(initialUser);
    setUserInfo(data);
  }

  useEffect(() => {
    const alreadyLoggedIn = localStorage.getItem('user');

    if (alreadyLoggedIn) {
      setUserInfo(alreadyLoggedIn);
    }
  }, [])

  return (
    <div className="App">
        <Header user={user} setUser={setUser}/> {/* sa adaug log out button undeva in header */}
          <Switch>
            <Route exact path = '/'>
              <Redirect to = '/books'/>
            </Route>
            <Route exact path = '/books'>
              <Books user={user} setUser={setUser}/>
            </Route>
            <Route exact path = '/auth'>
              <Auth user={user} setUser={setUser}/>
            </Route>
            <Route exact path = '/users/:id' component={Profile}/>
            <Route exact path = '/users/:userId/books' component={Books}/>
            <Route exact path = '/users' component = {UsersList} />
          </Switch>
    </div>
  );
}

export default App;
