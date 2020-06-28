import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import './Form.css'

const Form = () => {
    const [date, setDate] = useState()
    const [event, setEvent] = useState('')

    const onSubmit = () => {
        if(event !== '' && date !== undefined){
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()

            console.log(year + "-" + month +"-" +day)
    
            const postObject = {
                task_content : event,
                task_due_date : `${year}-${month}-${day}`
            }
            console.log(postObject)
            
            fetch(`https://mycalendar-backend.herokuapp.com/api/create/`, {
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(postObject) 
            })
            .then(res => res.json())
            .then(postObject => console.log("postObject:", postObject))
            .catch(err => console.error(err))
        } else {
            alert("Fields cannot be empty")
        }
    }


    return (
        <div className="card">
            <h3>Add a new Task</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="event">Task</label>
                    <input 
                        type="text" 
                        id="event" 
                        value={event}
                        onChange={(e) => setEvent(e.target.value)}
                        className="form-control" 
                        placeholder="Enter task" 
                        required = "required"
                    />
                </div>

                <div className="form group">
                    <label htmlFor="datePicker">Date of the event </label>
                    <DatePicker
                        id="datePicker"
                        className="form-control"
                        selected={date}
                        isClearable={true}
                        onChange={(chosenDate) => setDate(chosenDate)}
                        placeholderText="Choose date of the event"
                        required = "required"
                    />
                </div>
                <button className="btn btn-primary" onClick={() => onSubmit()}>Create task</button>
            </form>
        </div>
    )
}

export default Form
