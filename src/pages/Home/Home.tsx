import { AppointmentList } from "../../components/AppointmentList/AppointmentList"
import { ModalAppointmentTime } from "../../components/ModalAppointmentTime/ModalAppointmentTime";

import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <ModalAppointmentTime />

      <h2 className="Home_title">Olá, <span>Dra.</span> <span>Maria</span></h2>

      <AppointmentList />
    </div>
  )
}

export { Home }