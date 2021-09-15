import React from 'react';
import './App.css';
import { useState } from "react";

function App() {
  const [calculate, setCalculate] = useState("");

  const operators = ["+","-","*","/"];

  const updateCalculate = (value: string) => {
    if (
        (operators.includes(value) && calculate === "") ||
        (operators.includes(value) && operators.includes(calculate.slice(-1)))
    ){
      return;
    }
    setCalculate(calculate + value)
  }

  const createNumbers = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
          <button onClick={()=> updateCalculate(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculateResult = () => {
    setCalculate(eval(calculate).toString())
  }

  const deleteDigit = () => {
    if (calculate === "") {
      return;
    }
    const value = calculate.slice(0,-1);
    setCalculate(value);
  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>{calculate || "0"}</span>
        </div>
          <div className="operators">
            <button onClick={()=> updateCalculate("+")}>+</button>
            <button onClick={()=> updateCalculate("-")}>-</button>
            <button onClick={()=> updateCalculate("*")}>*</button>
            <button onClick={()=> updateCalculate("/")}>/</button>

          </div>
          <div className="digits">
            {createNumbers()}
            <button onClick={()=> updateCalculate("0")}>0</button>
            <button onClick={calculateResult}>=</button>
            <button onClick={deleteDigit}>C</button>
          </div>
      </div>
    </div>
  );
}

export default App;
