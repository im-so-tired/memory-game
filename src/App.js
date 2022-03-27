import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Plitka from "./plitka";
import { mixArray, refreshFunc } from "./redux/slice";
import { BiRefresh } from "react-icons/bi";
import Timer from "./timer";
import { clearTimer, stop } from "./redux/sliceClock";
function App() {
  let arrayPlitki = useSelector((state) => state.plitka.arrayPlitki);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(mixArray());
  }, []);
  useEffect(()=>{
    let newArray = arrayPlitki.filter(item=>item.hasPair===false)
    if(newArray.length===0){
      dispatch(stop())
    }
  },[arrayPlitki])
  return (
    <div className="App">
      <h1 className="text-center">Mathching Game</h1>
      <div className="nav">
        <Timer></Timer>
        <button
          onClick={() => {
            dispatch(refreshFunc());
            dispatch(clearTimer())
          }}
          type="button"
          className="btn btn-light"
        >
          <BiRefresh></BiRefresh>
        </button>
      </div>
      <div className="plitki">
        {arrayPlitki.map((item, index) => (
          <Plitka
            hasPair={item.hasPair}
            index={index}
            opened={item.opened}
            id={item.id}
            icon={item.getElement}
          ></Plitka>
        ))}
      </div>
    </div>
  );
}

export default App;
