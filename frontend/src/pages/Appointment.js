// AppointmentPage.jsx
import React, {useState} from 'react';
import { useHoursTemplateContext } from '../hooks/useHoursTemplateContext';
import {useAuthContext} from '../hooks/useAuthContext'
import {useAppoint} from '../hooks/useAppoint'


const Appointment = () => {
  const { template } = useHoursTemplateContext();
  const {user} = useAuthContext();
  const [time, setTime] = useState({});
  const {appoint, isLoading} = useAppoint()

  const tsConverter = (timeslot) => {
    let ts = "";
    if(timeslot === "09:00am - 12:00pm"){
        ts="9:00am - 12:00pm"
    }else if (timeslot === "12:00pm - 3:00pm"){
        ts="12:00pm - 15:00pm"
    }else if (timeslot === "03:00pm - 6:00pm"){
        ts="15:00pm - 18:00pm"
    }
    return ts
  }
  

  // Function to check if a specific timeslot is available
  const isTimeslotAvailable = (day, timeslot) => {
    const ts = tsConverter(timeslot);
    const dayTemplate =  template.find(appointment => appointment.day === day);
    console.log(dayTemplate)

    return dayTemplate ? !dayTemplate.timeSlots.includes(ts) : false;
  };

  // Function to handle appointment booking
  const handleAppointmentBooking = async (day, timeslot) => {
    let ts = tsConverter(timeslot)
    // Implement the logic to book the appointment (dispatch an action, etc.)
    await appoint(day, ts);
  };

  // Days and timeslots
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeslots = ['09:00am - 12:00pm', '12:00pm - 3:00pm', '03:00pm - 6:00pm'];

  return (
    <div className="appointment-page">
        <h2>Book an Appointment</h2>
        <div className='appointment-container'>
            <div className="days-container">
            {days.map(day => (
                <div key={day} className="day-column">
                    <div className="day-cell">{day}</div>
                        <div className="timeslot-cell">
                        {timeslots.map(timeslot => (
                        <button
                        key={timeslot}
                        onClick={(e) => setTime({day, timeslot})}
                        disabled={isTimeslotAvailable(day, timeslot)}
                        >
                        {timeslot}
                        </button>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
        <div className='appointment-info'>
            <h4>First name</h4>
            <p>{user.firstName}</p>
            <h4>Last name</h4>
            <p>{user.lastName}</p>
            <h4>Phone number</h4>
            <p>{user.phoneNumber}</p>
            <h4>Date</h4>
            <p>{time.day} {time.timeslot}</p>
            <button disabled={isLoading} onClick={() => handleAppointmentBooking(time.day, time.timeslot)}>Finalize</button>
        </div>
    </div>
  );
};

export default Appointment;
