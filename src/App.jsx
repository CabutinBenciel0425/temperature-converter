import "./styles.css";
import Converter from "./components/Converter";
import Heading from "./components/Heading";
import Result from "./components/Result";
import ButtonSwitch from "./components/ButtonSwitch";

function App() {
  //°F || °C

  return (
    <>
      <div className="main">
        <ButtonSwitch />
        <Heading />
        <Converter />
        <Result />
      </div>
    </>
  );
}

export default App;
