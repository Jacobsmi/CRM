import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Landing from "./landing/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
