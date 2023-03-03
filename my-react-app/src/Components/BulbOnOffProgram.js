import { useState } from "react"
import onImage from "../Images/BulbOn.jpg"
import offImage from "../Images/BulbOff.jpg"

function BulbOnOffProgram(){
    const [imageurl,setimageurl]=useState(onImage)
    function onClickHandeler(){
        setimageurl(onImage)
    };

    function offClickHandler(){
        setimageurl(offImage)
    }
    return(
        <>
        <h1>Bulb On and Off Program</h1>
        <button onClick={offClickHandler}>Click To Off</button>
        <img src={imageurl} width="200" height="300" alt="Bulb img" />
        <button onClick={onClickHandeler}>Click TO On</button>
        </>
    )
}
export default BulbOnOffProgram;
