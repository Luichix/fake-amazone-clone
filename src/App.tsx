import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './services/firebase';
import { useStateValue } from './store/StateProvider';
import Signup from './components/Signup';

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<CheckoutRoute />} />
          <Route path="/*" element={<HomeRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomeRoute() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
function CheckoutRoute() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
