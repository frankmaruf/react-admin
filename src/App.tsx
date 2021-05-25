import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './secure/components/Nav';
import Menu from './secure/components/Menu';
import Dashboard from './secure/dashboard/Dashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Users from './secure/users/Users';
import Login from './public/Login';
import Register from './public/Register';
function App() {
  return (
    <React.Fragment>
      
      <div className="App">
      <Router>
          <Route path={"/"} component={Dashboard} exact/>
          <Route path={"/users"} component={Users}/>
          <Route path={"/login"} component={Login}/>
          <Route path={"/register"} component={Register}/>
      </Router>
</div>
    </React.Fragment>
  );
}

export default App;
