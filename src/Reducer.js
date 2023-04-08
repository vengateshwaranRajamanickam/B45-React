import { ADDITION, DIVISION,DISPLAY, CLEAR,MULTIPLICATION, SUBRACTION,INPUTNUMBER } from "./Actiontype";

const Reducer=(state,action)=>{
    switch (action.type) {
        case ADDITION: break;
        case SUBRACTION: break;
        case MULTIPLICATION: break;
        case CLEAR: return ({...state, prevdata:""});
        case DISPLAY:return ({...state, prevdata:action.payload});
        case INPUTNUMBER:return ({...state, prevdata:state.prevdata+=action.payload});
        default:
        break;
    }

}
export default Reducer;