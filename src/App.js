// import logo from './logo.svg';

// // Styling CSS
// import './App.css';
import "./CSS/Pages.css";
import "./CSS/Content.css";

// // Components & Router Files
import SideNav from "./Components/SideNav";
// import NavRoute from "./Routers/NavRoute";
import FullPages from "./Pages/FullPages"; // Testing Later

// // Components UI
// import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App" id="page-top">
        <SideNav />

        <div className="container-fluid p-0">
          {/* <NavRoute /> */}
          <FullPages />
        </div>
      </div>
    </>
  );
}

export default App;
