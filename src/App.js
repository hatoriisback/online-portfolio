// import logo from './logo.svg';
import "./App.css";
// import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutCompany from "./pages/AboutCompany";
import AboutMe from "./pages/AboutMe";
import Members from "./pages/Members";
import Member from "./pages/Member";
import Items from "./pages/Items";
import Item from "./pages/Item";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />}>
              <Route path="aboutcompany" element={<AboutCompany />} />
              <Route path="aboutme" element={<AboutMe />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="members" element={<Members />}>
              <Route path=":memberId" element={<Member />} />
            </Route>
            <Route path="items" element={<Items />}>
              <Route path=":itemId" element={<Item />} />
            </Route>
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
