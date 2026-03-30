import "./styles.css";
import Converter from "./components/Converter";
import Heading from "./components/Heading";
import Result from "./components/Result";
import ButtonSwitch from "./components/ButtonSwitch";
import { useState } from "react";

function App() {
  //°F || °C

  const [temp, setTemp] = useState("celcius");
  const [text, setText] = useState("Convert Celcius to Fahrenheit");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState("0");

  const maxLength = 10000;

  function handleSubmit(value) {
    if (value > maxLength) {
      setError(true);
      setValue("");
      return null;
    }

    if (temp === "celcius") {
      const f = Number(value) * 1.8 + 32;
      setResult(f.toFixed(2));
    }

    if (temp === "fahrenheit") {
      const c = (Number(value) - 32) / 1.8;
      setResult(c.toFixed(2));
    }
  }

  function handleSwitch() {
    if (temp === "celcius") {
      setTemp("fahrenheit");
      setText("Convert Fahrenheit to Celcius");
    }
    if (temp === "fahrenheit") {
      setTemp("celcius");
      setText("Convert Celcius to Fahrenheit");
    }
    setValue("");
  }

  return (
    <>
      <div className="main">
        <ButtonSwitch onClick={handleSwitch} />
        <Heading text={text} />
        <Converter
          temp={temp}
          setValue={setValue}
          value={value}
          onSubmit={handleSubmit}
          error={error}
        />
        <Result
          temp={temp === "celcius" ? "fahrenheit" : "celcius"}
          result={result}
        />
      </div>
    </>
  );
}

export default App;
