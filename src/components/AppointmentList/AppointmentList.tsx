import "./AppointmentList.scss"

const AppointmentList = () => {
    return (
        <div className="AppointmentList">

            <div className="AppointmentList_wrapper">
                <p className="AppointmentList_patientName">Sergio da Silva</p>

                <p className="AppointmentList_appointmentText">Hoje as <span className="AppointmentList_appointmentTime">11:00</span></p>
            </div>

        </div>
    )
}

export { AppointmentList }