import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";
import Exponent from "./components/Exponent";

function App () {

  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} setCount={setCount}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent count={count} setCount={setCount} exponente={2}/>
        <Exponent count={count} setCount={setCount} exponente={3}/>
        <Exponent count={count} setCount={setCount} exponente={4}/>
        <Exponent count={count} setCount={setCount} exponente={5}/>
        <Exponent count={count} setCount={setCount} exponente={6}/>
        <Exponent count={count} setCount={setCount} exponente={7}/>
      </div>
    </div>
  );
}

export default App;
