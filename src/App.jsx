import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// SPA -> Single Page Application
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Error from './pages/Error';
import projectsData from './assets/projects.json';
import ProjectDetails from './pages/ProjectDetails';
import Query from './pages/Query';
import './App.css';

// URL Params

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/query' element={<Query />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects projectsData={projectsData} />}></Route>
        <Route path='/projects/:projectId' element={<ProjectDetails projectsData={projectsData} />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
