import "./App.css";
import Counter from "./components/Counter.js";
import Login from "./components/Login.js";

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
      <Login />
    </div>
  );
}

export default App;
