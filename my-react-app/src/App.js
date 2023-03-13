// import React, { useState } from "react";
import './App.css'
// import Profile from "./Components/Profile";
// import CounterProgram from './Components/CounterProgram';
// import ReactFirstProgram from './Components/ReactFirstProgram';
// import Display from "./Components/Display";
// import Button from "./Components/Button";
// import BulbOnOffProgram from "./Components/BulbOnOffProgram";
// import AvtarProfile from './Components/AvtarProfile';
// import Gallery from "./ReactChsllenges/Gallery";
// import CourseList from "./Components/CourseList";
import Profile from './PropsChallenge/ReactChallenge3/Profile';
function App() {
  // const [counter, setCounter] = useState(50);

  // function incrementHandeler() {
  //   setCounter(counter + 5);
  // }
  // function decrementHandeler() {
  //   setCounter(counter - 5)
  // }
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
        {/* <Display messege={counter} />
        <Button onIncHandeler={incrementHandeler}  onDecHandeler={decrementHandeler}/> */}
        {/* <Button onClickHandeler={decrementHandeler}/> */}
      </div>


      {/* <div>
        <BulbOnOffProgram />
      </div> */}

      <div>
        {/* <Profile /> */}
      </div>

      <div>
        {/* <AvtarProfile Person={{imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTA6MwvnqzNS3d3uq1NDHTNYGSkmuQ4mtBWS_iSO7aC6kfYDwtux41uFr4iNQC3K1pYmI&usqp=CAU', name:'ertugrul ghazi'}}
         />
         <AvtarProfile Person={{imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVqBzkNI6n3mPoalwn2dnu4ucgz-cUhIb5TJHyDn_2mNKA4gciwn9Sy6xc_4xDzfD7sw&usqp=CAU', size:200, alt:'imgUrl',name:'osman ghazi'}}  
           /> */}
      </div>

      <div>
        {/* <CourseList /> */}
      </div> 


      <div>
        {/* <Gallery /> */}
      </div>

    <div>
        {/* <Profile /> */}
    </div>

    <div>
        {/* <Profile /> */}
    </div>
    </>
  );
}

export default App;
