import { useState } from "react";

import { CloseIcon } from "../../assets/CloseIcon"
import "./ModalAppointmentTime.scss"

const ModalAppointmentTime = () => {
    const [showNotification, setShowNotification] = useState(true);

    const handleCloseNotification = () => {
        setShowNotification(!showNotification)
    }

    return (
        <div className="ModalAppointmentTime">
            <p className="ModalAppointmentTime_text">Seu proximo paciente esta marcado para as <span>11:00</span></p>

            <CloseIcon onClick={() => handleCloseNotification()} />
        </div>
    )
}

export { ModalAppointmentTime }