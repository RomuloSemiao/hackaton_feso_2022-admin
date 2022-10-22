import { BrowserRouter } from "react-router-dom";

import { Router } from "../../routes/Router";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { RoutesContainer } from "../RoutesContainer/RoutesContainer";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <RoutesContainer>
        <Router/>
      </RoutesContainer>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
