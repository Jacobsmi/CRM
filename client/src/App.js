import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Signup from './signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
