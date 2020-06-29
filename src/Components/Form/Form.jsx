import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import './Form.css'

const Form = () => {
    //Creating State variables to store the event and date values
    const [date, setDate] = useState()
    const [event, setEvent] = useState('') 

    //Submitting the form data to the API
    const onSubmit = (e) => {
        // e.preventDefault()
        if(event !== '' && date !== undefined){
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()

            const postObject = {
                task_content : event,
                task_due_date : `${year}-${month}-${day}`
            }
            
            fetch(`https://mycalendar-backend.herokuapp.com/api/create/`, {
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(postObject) 
            })
            .then(alert("sucessfully added task"))
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

                <div className="form-group">
                    <label htmlFor="datePicker">Date of the task </label>
                    <DatePicker
                        id="datePicker"
                        className="form-control"
                        selected={date}
                        minDate={new Date()}
                        isClearable={true}
                        onChange={(chosenDate) => setDate(chosenDate)}
                        placeholderText="Choose date of the task"
                        required = "required"
                    />
                </div>
                <button className="btn btn-primary" onClick={(e) => onSubmit(e)}>Create task</button>
            </form>
        </div>
    )
}

export default Form
