import { UserIcon } from "../../assets/UserIcon"

import "./AppointmentStatus.scss"

const AppointmentStatus = ({
    name,
    appointmentDays,
    status,
}: {
    name: string,
    appointmentDays: string
    status: string
}) => {
    return (
        <div className={`AppointmentStatus AppointmentStatus${status}`}>

            <div className="AppointmentStatus_patientBox">
                <UserIcon />
                <p className="AppointmentStatus_patientName">{name}</p>
            </div>

            <p className="AppointmentStatus_text">Última consulta a <span className="AppointmentStatus_sessionDate">{appointmentDays}</span> dias atrás</p>
        </div>
    )
}

export { AppointmentStatus }