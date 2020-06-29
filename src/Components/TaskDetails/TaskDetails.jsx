import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './TaskDetails.css'

const TaskDetails = ({taskDetail, tasks}) => {
    const [isEdit, setIsEdit] = useState(true)
    const [date, setDate] = useState()
    const [event, setEvent] = useState('')

    if(!tasks || !taskDetail){
        return "Loading..."
    }

    //To make the task details form editable
    const changeEdit = (e, task, dueDate) => {
        e.preventDefault()
        console.log(dueDate)
        setIsEdit(!isEdit)
        setEvent(task)
    }

    //To delete a task from the calendar
    const deleteTask = (e, id, task) => {
        if (window.confirm(`Are you sure you want to delete the task - ${task}??`)) {
            fetch(`https://mycalendar-backend.herokuapp.com/api/${id}/delete/`, {
                method : 'DELETE'
            })
            .then(alert("Deleted task succesfully"))
        } else {
            e.preventDefault()
        }
        
    }

    //Submitting the updated form
    const onSubmit = (e, id) => {
        // e.preventDefault()
        if(event !== '' && date !== undefined){
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()

            const UpdateObject = {
                task_content : event,
                task_due_date : `${year}-${month}-${day}`
            }
            
            fetch(`https://mycalendar-backend.herokuapp.com/api/${id}/update/`, {
                method : 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(UpdateObject) 
            })
            .then(alert("Updated task succesfully"))
            .catch(err => console.error(err))
        } else {
            alert("Fields cannot be empty")
        }

    }

    // Displaying the task details area
    let details = []
    details = tasks.map(({id, task_content, task_due_date, date_created}, index) => {
        if(task_content === taskDetail.event._def.title && isEdit) {
            return (
                <form key={index}>
                    <div className="form-group">
                        <label>Task: </label>
                        <p className="date_created">{task_content}</p>
                    </div>
                    <div className="form-group">
                        <label>Task due date: </label>
                        <p className="date_created">{task_due_date}</p>
                    </div>
                    <div className="form-group">
                        <label>Date of task creation: </label>
                        <p className="date_created">{date_created}</p>  
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={(e) => changeEdit(e, task_content, task_due_date)}>Update Task</button>
                        <button className="btn btn-danger" onClick={(e) => deleteTask(e, id, task_content)}>Delete Task</button>
                    </div>
                </form>
            )
        } else if(task_content === taskDetail.event._def.title) {
            return(
                <form key={index}>
                    <div className="form-group">
                        <label>Task: </label>
                        <input type="text" placeholder={task_content} value={event} onChange={(e) => setEvent(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Task due date: </label>
                        <DatePicker
                            id="datePicker"
                            className="form-control"
                            selected={date}
                            isClearable={true}
                            minDate={new Date()}
                            onChange={(chosenDate) => setDate(chosenDate)}
                            placeholderText={task_due_date} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of task creation: </label>
                        <p style={{display:"inline-block"}}>{date_created}</p> 
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={(e) => onSubmit(e, id)}>Save Changes</button>
                    </div>
                </form>
            )
        }
        // return tasks
    })

    return (
        <div className="card">
            {
                isEdit ? <h3>Task Details</h3> : <h3>Edit Details</h3> 
            }
            {details}
        </div>
    )
}

export default TaskDetails
