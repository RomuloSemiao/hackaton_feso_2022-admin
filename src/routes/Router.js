import { Routes, Route } from "react-router-dom";
import { Historic } from "../pages/Historic/Historic";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Patient } from "../pages/Patient/Patient";
import { PrivateRoutes } from "./PrivateRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/historic" element={<Historic />} />
        <Route path="/home" element={<PrivateRoutes />}>
          <Route path="/home/patient" element={<Patient />} />
        </Route>
    </Routes>
  )
}

export { Router };
