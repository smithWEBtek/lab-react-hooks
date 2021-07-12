import './App.css';
import HookUseState from './UseState/hookUseState';
import HookUseEffect from './UseEffect/hookUseEffect';

function App() {
  return (
    <div className="App">
      <h3>UseEffect</h3>
      <HookUseEffect />
      <hr />
      <hr />
      <h1>React Hooks</h1>
      <h3>UseState</h3>
      <HookUseState />
    </div>
  );
}

export default App;
