
import { RESET,OPERATOR,ENTER,DISPLAY,BACK,INPUTNUMBER } from "./Actiontype";

const Reducer=(state,action)=>{
    switch (action.type) {
        case ENTER: {
           let r=({...state, temp:state.temp+=action.payload})
            let operator=state.temp.slice(0,1)
            let next = state.temp.slice(1,state.temp.length-1);
            var sum;
            switch (operator) {
              case "/":
                sum = parseFloat(state.prevdata) / parseFloat(next);
                break;
              case "*":
                sum = parseFloat(state.prevdata) * parseFloat(next);
                break;
              case "-":
                sum = parseFloat(state.prevdata) - parseFloat(next);
                break;
              default:
                sum = parseFloat(state.prevdata) + parseFloat(next);
                break;
            }   
            console.log(sum,state.prevdata,next);
            return ({ ...state, nextdata: next, temp: sum})
        }
        case OPERATOR: {
            let r = ({ ...state, temp: state.temp += action.payload })
            let len = state.temp.length - 1;
            let source = state.temp.split("")
            return ({ ...state, prevdata: source.splice(0, len).join(""), temp: source })

        }
        case RESET: return ({ ...state, prevdata:"",nextdata:"",temp: "" });
        case DISPLAY: return ({ ...state, temp: action.payload });
        case INPUTNUMBER: return ({ ...state, temp: state.temp += action.payload });
        case BACK: return ({ ...state, temp: state.temp.substring(0, state.temp.length - 1) });
        default:
            break;
    }

}
export default Reducer;