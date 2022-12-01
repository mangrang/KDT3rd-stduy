
import "./App.css";
import React from "react";
import ClassComponent from "./ClassComponent";
import FuncComponent from "./FuncComponent";
import Button from "./Button";

function App() { 
  return <div className="App">
    {/* <ClassComponent /> */}
    <ClassComponent name="KDT3rd"  students={100}></ClassComponent>
    <hr />
    {/* <FuncComponent /> */}
    <FuncComponent name="KDT3기"  students={25}/>
    <hr />

    <Button link="https://www.google.com">구글</Button>
    <Button link="https://www.daum.net">다음</Button>
    <Button>네이버</Button>
    <hr />
  </div>
  
}

export default App;
