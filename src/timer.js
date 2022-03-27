import { useSelector } from "react-redux";

export default function Timer() {
  let clock = useSelector(state=>state.clock.clock)
  return (
    <div className="Timer">
      <div className="clock">
        <span>{clock.minute}</span>
        <span>:</span>
        <span>{clock.second}</span>
      </div>
    </div>
  );
}
