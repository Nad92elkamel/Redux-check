import React from 'react'
import { useState } from 'react';
import {useDispatch}from 'react-redux'
import { deletetask, donetask, updatetask } from '../actions.js/indexAction';
import { MdOutlineDoneAll} from 'react-icons/md';
import { MdDeleteOutline} from 'react-icons/md';
import { AiFillEdit} from 'react-icons/ai';
import DatePicker from "react-datepicker";

import moment from 'moment';

const Tasks = ({id, date, descreption, isdone:isDone}) => {
const dispatch = useDispatch();
const [descreptions,setdescreptions]=useState('');
const [dates,setDates]=useState('');
    return (
        <div className='groupTask'>
            <div className='task'>
                {   <div className='done' style={{
                textDecoration: isDone ? 'line-through' : 'none'
                }}> 
                    <h3>{descreption}</h3>
                    <h3>{moment(date).fromNow()}</h3>
               
                </div> 
                }
                <button onClick={()=>{dispatch(donetask(id))}}><MdOutlineDoneAll/></button>
                <button  onClick={()=>dispatch(deletetask(id))}><MdDeleteOutline/></button>
            </div>
             
            {
                <form>
                    <input
                        type="text"
                        placeholder="descreption"
                        onChange={(e) => setdescreptions(e.target.value)}
                        value={descreptions}
                    />
                      <DatePicker
                        selected={dates}
                        onChange={(dates) =>{setDates(dates)}}
                        value={dates}
                        showTimeSelect
                        placeholderText='Date'
                        timeFormat="HH: mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                      />
                     <button onClick={()=>dispatch(updatetask(id,descreptions,dates))}><AiFillEdit/></button>
                </form> 
            }
            
        </div>
    )
}

export default Tasks
