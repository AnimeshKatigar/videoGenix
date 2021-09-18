import Landing from "./pages/Landing";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} alt="" />
      </div>
      <Landing />
    </div>
  );
}

export default App;
