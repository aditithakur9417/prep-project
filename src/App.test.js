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

<div className="container-fluid">
  <div className="row">
    <div className="col">
      {/* <img  className="logo" src={logo}/> */}
    </div>
    <div className="col">
      <button className="login">Login </button>
    </div>
  </div>
  <div className="row" id="top">
    <div className="col">

      <i className='fas fa-home' id="home" ></i>
    </div>
    <div className="col">
      2 of 3
    </div>
    <div className="col">
      3 of 3
    </div>
  </div>
  <div id="leftmenuinner" className="topnav" >
    <a  target="_top" href="javascript:void(0);" className="icon" onclick={myFunction}>
      <i className="fa fa-bars"></i>
    </a>
    <div id="leftmenuinnerinner" className="box">
 

<h2 className="left"><span className="left_h2">CSS</span> Tutorial</h2>
<a target="_top" href="default.asp" className="active">CSS HOME</a>
<a target="_top" href="css_intro.asp">CSS Introduction</a>
<a target="_top" href="css_syntax.asp">CSS Syntax</a>
<a target="_top" href="css_selectors.asp">CSS Selectors</a>
<a target="_top" href="css_howto.asp">CSS How To</a>
<a target="_top" href="css_comments.asp">CSS Comments</a>
<a target="_top" href="css_colors.asp">CSS Colors</a>

  <a target="_top" href="css_colors.asp">Colors</a>
  <a target="_top" href="css_colors_rgb.asp">RGB</a>
  <a target="_top" href="css_colors_hex.asp">HEX</a>
  <a target="_top" href="css_colors_hsl.asp">HSL</a>

  

    </div>
    
  </div>
</div>
)
}

export default App;
