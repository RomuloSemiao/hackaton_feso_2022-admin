import { useState, useEffect } from "react";
import { AppointmentStatus } from "../../components/AppointmentStatus/AppointmentStatus";

import "./Historic.scss"

const Historic = () => {
  const [appointments, setAppointments] = useState([]);
  const names = [
    "Enos",
    "Romulo",
    "Luiz",
    "Felipe",
    "Maria",
    "Marta",
  ]

  useEffect(() => {
    fetch("https://sodafront-ehealth-backend.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((json) => {
        setAppointments(json)
      })
  }, [])

  return (
    <div className="HistoricContainer">
      {appointments?.map((appointment: any, index: number) => {
        const dayOfappointment   = new Date(appointment.appointmentDay) as any
        const currentDay = new Date(Date.now()) as any
        const result =  currentDay - dayOfappointment;
        const diffInDays = result / (1000 * 60 * 60 * 24);
        const finalDate = Math.floor(diffInDays)

        return (
          <div style={{ width: "100%" }} key={index}>
            {index <= 5 ? (
              <AppointmentStatus
                name={names[index]}
                appointmentDays={String(finalDate)}
                status={finalDate < 15 ? "--good" : finalDate > 30 ? "--danger" : finalDate > 14 && finalDate <= 30 ? "--warning" : ""}
              />
            ) : <></>}
          </div>
        )})}
    </div>
  )
}

export { Historic }
