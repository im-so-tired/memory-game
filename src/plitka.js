import { useDispatch, useSelector } from "react-redux"
import { firstOpen, waitTime } from "./redux/slice"

export default function Plitka({id,icon,opened,index,hasPair}){
    const dispatch = useDispatch()
    const countClick=useSelector(state=>state.countClick)
    const loading = useSelector(state=>state.loading)
    const style = {
        div:{
            backgroundColor:'lightgray'
        }
    }
    let handleClick = ()=>{
        if(!loading){
            countClick===0?
            dispatch(firstOpen({index,id}))
            :dispatch(waitTime(index,id))
        }
        
    }
    
    if(opened||hasPair){
        return(
            <div className="Plitka">
                {icon()}
            </div>
        )
    }
    return(
        <div onClick={handleClick} style={style.div} className="Plitka"></div>
    )
}