import { REMOVE_TODO,ADD_TODO,ADD_TODO_COMPLETED,ADD_TODO_INPROGRESS } from "./Action.type";
const Reducer =(state,action)=>{
    switch(action.type){
        case ADD_TODO:
            return{...state,todo:[...state.todo,action.payload]}
            case ADD_TODO_INPROGRESS:
             {
              let obj = state.todo.filter((value) => value.id === action.payload);
              let removeTodo = state.todo.filter(
                (value) => value.id !== action.payload
              );
              console.log(obj)
              let tempState = {
                ...state,
                
                todo: removeTodo,inprogress: [...state.inprogress, ...obj]
              };
              return tempState;
              }
            case ADD_TODO_COMPLETED:
                let completeobj = state.inprogress.filter(
                  (value) => value.id === action.payload
                );
                let removeTodoInprogress = state.inprogress.filter(
                  (value) => value.id !== action.payload
                );
          
                return {
                  ...state,
                  inprogress: removeTodoInprogress,
                  completed: [...state.completed, ...completeobj]
                };
              case REMOVE_TODO:                    
                return {
                  ...state,
                  completed: state.completed.filter(
                    (value) => value.id !== action.payload
                  )
                };
              default:
                return state;
       
}
}
export default Reducer;