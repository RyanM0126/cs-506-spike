import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/dashboard";
import HouseDetails from "./components/houses/HouseDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Profile from "./components/auth/Profile";
import CreateHouse from "./components/houses/CreateHouse";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/create" component={CreateHouse} />
            <Route path="/profile" component={Profile} />
            <Route path="/house/:id" component={HouseDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
