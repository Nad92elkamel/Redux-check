import { ADD_TASK, DONE_TASK, REMOUVE_TASK, UPDATE_TASK } from "./typeAction"

export const addtask = (task)=>{
return{
    type : ADD_TASK,
    payload : task
}
}

export const deletetask=(id)=>{
    return{
        type : REMOUVE_TASK,
        payload: id
    }
}

export const updatetask=(id,descreption,date)=>{
    return{
        type : UPDATE_TASK,
        payload : {id, descreption,date}
    }
}

export const donetask=(id)=>{
    return{
        type : DONE_TASK,
        payload: id
    }
}

