import './App.css';
import CounterProgram from './Components/CounterProgram';
import ReactFirstProgram from './Components/ReactFirstProgram';

function App() {
  
  return (
    <div className="App">
      <ReactFirstProgram />
      <CounterProgram counter={0} />
      <CounterProgram counter={5} />
      <CounterProgram counter={10} />
    </div>
  );
}

export default App;
