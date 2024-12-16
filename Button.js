import './App.js'
import './App.css'
import './Calculator.css'
import React,{useState} from "react";
const Button = (props) => {
    return (  
        <button class="ButtonStyle" value={props.label}  onClick={props.ClickHandle} > {props.label}  </button>
    );
  };
export const ShowMe = () => {
    const [showImage, setShowImage] = useState(false);
    const toggleImage = () => setShowImage(!showImage);
    return (
      <div>
        <button onClick={toggleImage} className="ButtonStyle">
          Show Me
        </button>
        {showImage && (
      <img src="A.jpg"  // Replace with your image path
            alt="My Picture"
            style={{ width: "100px", marginTop: "10px" }}
          />
        )}
      </div>
    );
  };
  export default Button;
  
  
