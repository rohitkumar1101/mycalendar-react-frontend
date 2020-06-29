import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {Form, NavBar, TaskDetails } from '../../Components/index';
import './Calendar.css'


const Calendar = () => {
    const [tasks, setTasks] = useState([])
    const [hidden, setHidden] = useState(false)
    const [taskDetail, setTaskDetail] = useState('')

    useEffect(() => {
        fetch(`https://mycalendar-backend.herokuapp.com/`)
        .then(res => res.json())
        .then(res => setTasks(res))
        .catch(err => console.log(err))
    }, [])

    const renderEventContent = (eventInfo) => {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }

    const everyday_task = tasks.map(({task_content, task_due_date}) => {
        return {
            title: task_content,
            date: task_due_date,
        }
    })

    const handleEventClick = (clickInfo) => {
        setHidden(true)
        setTaskDetail(clickInfo)
    }


    return (
        <div>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <Form />
                        {
                            hidden ? <TaskDetails taskDetail={taskDetail} tasks={tasks} /> : <p id="info">Click on a task to know more</p>
                        }
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            eventContent={renderEventContent}
                            headerToolbar={{
                                left: 'prev,next',
                                center: 'title',
                                right: 'today'
                            }}
                            events={everyday_task}
                            eventClick={handleEventClick} 
                            height="700px"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar

// import React from 'react'
// import FullCalendar, { formatDate } from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// // import { INITIAL_EVENTS, createEventId } from './event-utils'

// export default class DemoApp extends React.Component {

//   state = {
//     weekendsVisible: true,
//     currentEvents: []
//   }

//   render() {
//     return (
//       <div className='demo-app'>
//         <div className='demo-app-main'>
//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             headerToolbar={{
//               left: 'prev,next today',
//               center: 'title',
//               right: 'dayGridMonth,timeGridWeek,timeGridDay'
//             }}
//             initialView='dayGridMonth'
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             weekends={this.state.weekendsVisible}
//             // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//             // select={this.handleDateSelect}
//             // eventContent={renderEventContent} // custom render function
//             eventClick={this.handleEventClick}
//             eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
//             /* you can update a remote database when these fire:
//             eventAdd={function(){}}
//             eventChange={function(){}}
//             eventRemove={function(){}}
//             */
//           />
//         </div>
//       </div>
//     )
//   }
// }


// const handleEventClick = (clickInfo) => {
//     if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//       clickInfo.event.remove()
//     }
// }