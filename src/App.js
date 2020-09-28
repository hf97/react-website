import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Products from './Products';
import SignUp from './SingUp';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/signup' exact component={SignUp} />
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
