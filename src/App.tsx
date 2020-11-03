import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import TeamDetail from "./screens/TeamDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/page/1">Home</Link>
        </header>
        <main>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/page/:page" component={HomeScreen} exact />
            <Route path="/teamdetail/:team" component={TeamDetail} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
