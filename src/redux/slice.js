import { createSlice } from '@reduxjs/toolkit'
import { lastArray } from '../data'

let beginState = {
    arrayPlitki:lastArray,
    countClick:0,
    currentIndex:{
        first:null,
        second:null
    },
    loading:false
}
const slicePlitka = createSlice({
    name:'plitka',
    initialState:beginState,
    reducers:{
        firstOpen(state,action){
            state.countClick+=1
            state.arrayPlitki = state.arrayPlitki.map((item,index)=>{
                if(index===action.payload.index){
                    item.opened=true
                    state.countClick===1?state.currentIndex.first=index:state.currentIndex.second=index
                }
                return item
            })
                   
        },
        check(state){
            state.countClick=0
            if(state.arrayPlitki[state.currentIndex.first].id!==state.arrayPlitki[state.currentIndex.second].id){
                state.arrayPlitki = state.arrayPlitki.map(item=>{
                    item.opened=false
                    return item
                })
            }else{
                let id = state.arrayPlitki[state.currentIndex.first].id
                state.arrayPlitki = state.arrayPlitki.map(item=>{
                    if(item.id===id){
                        item.hasPair=true
                    }
                    return item
                })
            }
            state.currentIndex.first=null
            state.currentIndex.second=null
        },        
        mixArray(state){
            state.arrayPlitki.sort(() => Math.random() - 0.5);
        },
        toggleLoading(state,action){
            state.loading = action.payload.bool
        },
        refresh(state){
            state.arrayPlitki = state.arrayPlitki.map(item=>{
                item.opened=false
                item.hasPair=false
                return item
            })
            state.countClick=0
            state.currentIndex.first=null
            state.currentIndex.second=null
        }
    }
})
export const waitTime = (index,id)=>{
    return async function(dispatch){
        dispatch(firstOpen({index,id}))
        dispatch(toggleLoading({bool:true}))
        setTimeout(()=>{
            dispatch(check())
            dispatch(toggleLoading({bool:false}))
        },1500)
        
    }
}
export const refreshFunc= () => {
    return function(dispatch){
        dispatch(refresh())
        dispatch(mixArray())
    }
}
export default slicePlitka.reducer
export const {firstOpen,mixArray,check,toggleLoading,refresh} = slicePlitka.actions