import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const TaskDetails = ({taskDetail, tasks}) => {
    const [isEdit, setIsEdit] = useState(true)
    const [date, setDate] = useState()
    const [event, setEvent] = useState('')

    if(!tasks || !taskDetail){
        return "Loading..."
    }

    //To make the task details form editable
    const changeEdit = (e) => {
        e.preventDefault()
        setIsEdit(!isEdit)
    }

    //To delete a task from the calendar
    const deleteTask = (e, id, task) => {
        if (window.confirm(`Are you sure you want to delete the task ${task}??`)) {
            fetch(`https://mycalendar-backend.herokuapp.com/api/${id}/delete/`, {
                method : 'DELETE'
            })
            .then(alert("Deleted task succesfully"))
            .catch(err => alert(err))
        } else {
            e.preventDefault()
            alert("Task not deleted")
        }
        
    }

    //Submitting the updated form
    const onSubmit = (id) => {
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
            .then(res => res.json())
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
                        <input type="text" value={task_content}  readOnly />
                    </div>
                    <div className="form-group">
                        <label>Task due date: </label>
                        <input type="date" value={task_due_date}  readOnly />
                    </div>
                    <div className="form-group">
                        <label>Date of task creation: </label>
                        <p style={{display:"inline-block"}}>{date_created}</p>  
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={(e) => changeEdit(e)}>Update Task</button>
                        <button className="btn btn-danger" onClick={(e) => deleteTask(e, id, task_content)}>Delete Task</button>
                    </div>
                </form>
            )
        } else if(task_content === taskDetail.event._def.title) {
            return(
                <form key={index}>
                    <div className="form-group">
                        <label>Task: </label>
                        <input type="text" placeholder={task_content} value={event} onChange={(e) => setEvent(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Task due date: </label>
                        <DatePicker
                            id="datePicker"
                            className="form-control"
                            selected={date}
                            isClearable={true}
                            onChange={(chosenDate) => setDate(chosenDate)}
                            placeholderText={task_due_date} 
                            required = "required"
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of task creation: </label>
                        <p style={{display:"inline-block"}}>{date_created}</p> 
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={ () => onSubmit(id)}>Save Changes</button>
                    </div>
                </form>
            )
        }
        return tasks
    })

    return (
        <div className="card">
            {
                isEdit ? <h3>Task Details</h3> : <h3>Edit Details</h3> 
            }
            {details}
            {console.log(taskDetail)}
        </div>
    )
}

export default TaskDetails
