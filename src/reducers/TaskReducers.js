import { ADD_TASK, DONE_TASK, REMOUVE_TASK, UPDATE_TASK } from '../actions.js/typeAction'

const initState={
taskList:[]}

export const TaskReducers = (state= initState, {type, payload})=>{
    switch(type){
        case ADD_TASK :
            return{...state , taskList: [...state.taskList, payload]};
        case REMOUVE_TASK : 
            return {...state, taskList: state.taskList.filter(el=> el.id !== payload)} ;
        case UPDATE_TASK : 
             return{...state, taskList: state.taskList.map((el)=> el.id === payload.id ? {...el,descreption: payload.descreption, date: payload.date} : el)};     
        case DONE_TASK:
            return{ ...state, taskList: state.taskList.map((el) => el.id === payload ? {...el, isdone: !el.isdone }: el )};
        
             default :
        return state;
    }
}
