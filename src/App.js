import logo from './logo.png';
import './App.css';
import React, { useRef } from "react";

function App() {

  function myFunction() {
    var x = document.getElementById("leftmenuinner");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
<div>
  
</div>
)
}

export default App;
