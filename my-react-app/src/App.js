import React, { useState } from "react";
// import CounterProgram from './Components/CounterProgram';
// import ReactFirstProgram from './Components/ReactFirstProgram';
import Display from "./Components/Display";
import Button from "./Components/Button";
import BulbOnOffProgram from "./Components/BulbOnOffProgram";
function App() {
  const [counter, setCounter] = useState(50);

  function incrementHandeler() {
    setCounter(counter + 5);
  }
  function decrementHandeler() {
    setCounter(counter - 5)
  }
  return (
    <>
      <div className="App">
        {/* this program for counter  */}
        {/* <ReactFirstProgram />
          <CounterProgram counter={0} />
          <CounterProgram counter={5} />
          <CounterProgram counter={10} /> */}
      </div>

      <div>
        <Display messege={counter} />
        <Button onIncHandeler={incrementHandeler}  onDecHandeler={decrementHandeler}/>
        {/* <Button onClickHandeler={decrementHandeler}/> */}
      </div>


      <div>
        <BulbOnOffProgram />
      </div>
    </>
  );
}

export default App;
