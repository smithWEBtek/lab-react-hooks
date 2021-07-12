import './App.css';
import HookUseState from './UseState/hookUseState';
import HookUseEffect from './UseEffect/hookUseEffect';
import HookUseEffectCustom from './UseEffect/hookUseEffectCustom';
import TodoSample from './UseEffect/TodoSample';

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
      <HookUseEffectCustom />
      <TodoSample />
    </div>
  );
}

export default App;
