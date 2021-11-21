import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from '../Pages/Pages';
import Home from '../Home/Home';
import Software from '../Software/Software';
import Massage from '../Massage/Massage';
import Coach from '../Coach/Coach';
import Hire from '../Hire/Hire';
// import Email from '../Email/Email';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Pages}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/massage" exact component={Massage}/>
        <Route path="/software" exact component={Software}/>
        <Route path="/coach" exact component={Coach}/>
        <Route path="/hire" exact component={Hire}/>
        {/* <Route path="/email" exact component={Email}/> */}
      </Switch>
    </Router>
    

    </>
  );
}

export default App;
