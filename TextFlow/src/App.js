import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;