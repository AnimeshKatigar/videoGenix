import { Switch, Route, Router } from "react-router-dom";
import history from "./createHistory";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <img src={logo} alt="" />
        </div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/call" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
