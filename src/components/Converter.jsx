export default function Converter({ temp }) {
  console.log(temp);
  return (
    <form className="converter">
      <label for="tempValue" className="temp-label">
        Celcius:{" "}
      </label>
      <input type="text" id="tempValue" className="temp-input" />

      <div className="temp-btn">Get result</div>
    </form>
  );
}
