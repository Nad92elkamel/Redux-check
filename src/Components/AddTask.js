import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid'
import { addtask } from '../actions.js/indexAction';
import { IoIosAddCircle } from 'react-icons/io';
import DatePicker from "react-datepicker";

const AddTask = () => {
    const[descreption,setDescreption] = useState("");
    const[date,setDate] = useState("");
    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addtask({id: uuidv4(), descreption, date}));
   }
    return (
        <div className="GR1">
           <form>
                <input type="text" placeholder='add task' onChange={(e)=>setDescreption(e.target.value)} required/>
                <DatePicker
                    selected={date}
                    onChange={(date) =>{setDate(date)}}
                    value={date}
                    showTimeSelect
                    placeholderText='Date'
                    timeFormat="HH: mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                    />
                <button onClick={handleSubmit}><IoIosAddCircle/></button>
            </form> 
        </div>
    )
}

export default AddTask
