import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
