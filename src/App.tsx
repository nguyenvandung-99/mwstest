import HomeScreen from './screens/HomeScreen';
import TeamDetail from './screens/TeamDetail';
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <header>
          <Link to="/1">Home</Link>
        </header>
        <main>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/:page" component={HomeScreen} exact />
            <Route path="/teamdetail/:name" component={TeamDetail} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
