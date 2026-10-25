import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import ProjectsDetail from "./components/Projects/ProjectsDetail";


function App() {
  return (
    <Router>
      <PageTransition>
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route path="/works" element={<><Navbar /><Projects /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        {/* Página de perfil separada */}
        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
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
            </>
          }
        />
      </Routes>
      </PageTransition>
    </Router>
  );
}

export default App;
