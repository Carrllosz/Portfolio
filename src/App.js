import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import ProjectsDetail from "./components/Projects/ProjectsDetail";
import ScrollToSectionOnLoad from "./ScrollToSectionOnLoad";
import Brands from "./components/Projects/MovingBrands";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <ScrollToSectionOnLoad />
              <div id="home">
                <Home />
              </div>
              <div id="projects">
                <Projects />
                <Brands />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </>
          }
        />

        {/* Página de perfil separada */}
        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
              <Contact />
            </>
          }
        />

        {/* Página de detalhes do projeto */}
        <Route
          path="/projects/:id"
          element={
            <>
              <Navbar />
              <ProjectsDetail />
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
