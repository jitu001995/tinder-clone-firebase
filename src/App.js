
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Chats from './Component/Chats';
import Header from './Component/Header';
import SwipeButtons from './Component/SwipeButton';
import TinderCards from './Component/TinderCards';

function App() {
  return (
    <div className="app">
       <Router>
         <Switch>
            <Route path="/chat">
                <Header backButton="/" />
                 <Chats /> 
              </Route>
            <Route path="/">
              <Header/>
              <TinderCards/>
              <SwipeButtons/>
              

            </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
