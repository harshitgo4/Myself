import About from "./components/Projects";
import Education from "./components/education";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Work from "./components/work";

export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/education" element={<Education/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/projects" element={<About/>}/>

    </Routes>
  </Router>
    </>

  )
}