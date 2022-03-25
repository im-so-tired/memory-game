import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Plitka from "./plitka";
import { mixArray, refreshFunc } from "./redux/slice";
import { BiRefresh } from 'react-icons/bi';
function App() {
  let arrayPlitki=useSelector(state=>state.arrayPlitki)
  let state = useSelector(state=>state)
  console.log(state)
  let dispatch=useDispatch()
  useEffect(()=>{
    dispatch(mixArray())
  },[])
  return (
    <div className="App">
      <h1 className="text-center">Mathching Game</h1>
      <div className="nav">
      <button onClick={()=>{dispatch(refreshFunc())}} type="button" className="btn btn-light"><BiRefresh></BiRefresh></button>
      </div>
      <div className="plitki">
        {arrayPlitki.map((item,index)=>
          <Plitka hasPair={item.hasPair} index={index} opened={item.opened} id={item.id} icon={item.getElement}></Plitka>
        )}
      </div>
    </div>
  );
}

export default App;
