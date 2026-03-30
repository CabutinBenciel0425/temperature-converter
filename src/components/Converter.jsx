export default function Converter({ temp, setValue, value, onSubmit, error }) {
  return (
    <form className="converter">
      <label
        htmlFor="tempValue"
        className="temp-label"
        onClick={() => onSubmit(value)}
      >
        {temp.charAt(0).toUpperCase() + temp.slice(1)}:{" "}
      </label>
      <input
        className="temp-input"
        type="number"
        max="10000"
        min="-10000"
        id="tempValue"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && (
        <span className="error">
          The value is out of range. Try a lower value.
        </span>
      )}

      <div className="temp-btn" onClick={() => onSubmit(value)}>
        Get result
      </div>
    </form>
  );
}
