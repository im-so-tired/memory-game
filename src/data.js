import { RiHome3Fill,RiHome3Line,RiHomeHeartFill,RiHomeHeartLine,RiAtLine,RiAtFill,RiBookmark2Fill,RiBookmark2Line } from "react-icons/ri";
let array = [
    {
        id:1,
        opened:false,
        getElement(){
            return(
                <RiHome3Fill ></RiHome3Fill>
            )
        },
        hasPair:false
    },
    {
        id:2,
        opened:false,
        getElement(){
            return(
                <RiHome3Line></RiHome3Line>
            )
        },
        hasPair:false
    },
    {
        id:3,
        opened:false,
        getElement(){
            return(
                <RiHomeHeartFill></RiHomeHeartFill>
            )
        },
        hasPair:false
    },
    {
        id:4,
        opened:false,
        getElement(){
            return(
                <RiHomeHeartLine></RiHomeHeartLine>
            )
        },
        hasPair:false
    },
    {
        id:5,
        opened:false,
        getElement(){
            return(
                <RiAtLine></RiAtLine>
            )
        },
        hasPair:false
    },
    {
        id:6,
        opened:false,
        getElement(){
            return(
                <RiAtFill></RiAtFill>
            )
        },
        hasPair:false
    },
    {
        id:7,
        opened:false,
        getElement(){
            return(
                <RiBookmark2Fill ></RiBookmark2Fill>
            )
        },
        hasPair:false
    },
    {
        id:8,
        opened:false,
        getElement(){
            return(
                <RiBookmark2Line ></RiBookmark2Line>
            )
        },
        hasPair:false
    }
]
export const lastArray = array.concat(array)