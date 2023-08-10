import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/company" Component={Company} />
          <Route path="/contact" Component={Contact} />
          <Route path="/newproject" Component={NewProject} />
          <Route path="/projects" Component={Projects} />
          <Route path="/project/:id" Component={Project} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
