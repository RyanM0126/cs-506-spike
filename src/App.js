import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/dashboard'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/signup' component={SignUp}></Route>
          <Route exact path='/signin' component={SignIn}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
