import logo from "./logo.svg";
import "./App.css";
import IsorIsNot from "./IsorIsNot";
import duck from "./duck.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={duck} className="App-logo" alt="logo" />
        <div />
        <IsorIsNot />
      </header>
    </div>
  );
}

export default App;
