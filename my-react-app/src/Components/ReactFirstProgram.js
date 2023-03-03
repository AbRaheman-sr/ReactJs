function ReactFirstProgram(){
    function clickMe(){
        document.getElementById("h1").innerHTML="Hello Abdul Raheman"
      }
return(
    <>
    <h1 id="h1">hello</h1>
      <button onClick={clickMe}>Click Me</button>
    </>
)
};
export default ReactFirstProgram;