import { useDispatch, useSelector } from "react-redux";
import { firstOpen, waitTime } from "./redux/slice";
import { setTimer, start } from "./redux/sliceClock";

export default function Plitka({ id, icon, opened, index, hasPair }) {
  const dispatch = useDispatch();
  const countClick = useSelector((state) => state.plitka.countClick);
  const loading = useSelector((state) => state.plitka.loading);
  let timer;
  const style = {
    div: {
      backgroundColor: "lightgray",
    },
  };
  const funcDispatch = () => {
    dispatch(start());
  };
  let handleClick = () => {
    if (!loading) {
      if (countClick === 0) {
        dispatch(firstOpen({ index, id }));
        if (!timer) {
          dispatch(setTimer({callFn:funcDispatch}))
        }
      } else {
        dispatch(waitTime(index, id));
      }
    }
  };

  if (opened || hasPair) {
    return <div className="Plitka">{icon()}</div>;
  }
  return <div onClick={handleClick} style={style.div} className="Plitka"></div>;
}
