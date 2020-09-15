import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
          if (authUser) {
              
            dispatch({
              type: 'SET_USER',
              user: authUser
            })

          } else {

            dispatch({
              type: 'SET_USER',
              user: null
            })

          }
    });

    return () => {
      //cleanup
      unsubscribe();
    }
    
  }, []);

  console.log('USER >>>', user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
             <Header />
             <Home />
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
