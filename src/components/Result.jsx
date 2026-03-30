export default function Result({ temp, result }) {
  return (
    <div>
      <h2>
        {temp.charAt(0).toUpperCase() + temp.slice(1)}:{" "}
        <span className="temp-result">
          {result} °{temp.charAt(0).toUpperCase()}
        </span>
      </h2>
    </div>
  );
}
