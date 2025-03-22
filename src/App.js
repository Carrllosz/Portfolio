import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import ProjectsDetail from "./components/Projects/ProjectsDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={  
          <>
            <Navbar />
            <div id="home">
              <Home />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="profile">
              <Profile />
            </div>
            <div id="contact">
              <Contact />
            </div>
          </>
        }/>
        <Route path="/projects/:id" element={<ProjectsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
