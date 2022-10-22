import { UserIcon } from "../../assets/UserIcon"

import "./AppointmentStatus.scss"

const AppointmentStatus = () => {
    return (
        <div className="AppointmentStatus AppointmentStatus--danger">

            <div className="AppointmentStatus_pacientBox">
                <UserIcon />
                <p className="AppointmentStatus_pacientName">Enos Gabriel</p>
            </div>

            <p className="AppointmentStatus_text">Última consulta a <span className="AppointmentStatus_sessionDate">50</span> dias atrás</p>
        </div>
    )
}

export { AppointmentStatus }