import React from 'react'
import {useSelector} from 'react-redux'
import Tasks from './Tasks'
const ListTask = () => {
    const tasks = useSelector(state=>state.task.taskList)
    return (
        <div>
            {tasks.map(task=><Tasks key = {task.id} {...task}/>)}
        </div>
    )
}

export default ListTask
