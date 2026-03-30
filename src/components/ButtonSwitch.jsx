import { GoArrowSwitch } from "react-icons/go";

export default function ButtonSwitch({ onClick }) {
  return (
    <div className="btn-switch" onClick={onClick}>
      <GoArrowSwitch />
    </div>
  );
}
