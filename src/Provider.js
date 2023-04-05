import { useEffect, useState } from 'react'
import Datacontext from './Context'

export default function Provider(props){
const [UserData,setUserData]=useState([]) 
const [inputarray,setinputarray]=useState([]) 
useEffect(()=>{
fetch('https://640f08d74ed25579dc43acce.mockapi.io/amazon').then(res=>res.json()).then(val=>setUserData(val))
},[])
function AddList(id) {
    let tempTodos = UserData[id - 1];
    setinputarray([tempTodos])
}
return(
    <Datacontext.Provider value={{UserData,inputarray,AddList}}>
        {props.childeren}

    </Datacontext.Provider>
)

}