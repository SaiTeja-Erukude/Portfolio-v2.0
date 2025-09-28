import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

import ProjectScreen from "./screens/ProjectScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import Certificationcreen from "./screens/CertificationScreen";
import CertificationsScreen from "./screens/CertificationsScreen";

import ProjectAddScreen from "./screens/admin/ProjectAddScreen";
import ProjectEditScreen from "./screens/admin/ProjectEditScreen";
import CerticationAddScreen from "./screens/admin/CertificationAddScreen";
import CertificationEditScreen from "./screens/admin/CertificationEditScreen";
import ExperiencesScreen from "./screens/ExperiencesScreen";
import ExperienceAddScreen from "./screens/admin/ExperienceAddScreen";
import ExperienceEditScreen from "./screens/admin/ExperienceEditScreen";
import ExperienceScreen from "./screens/ExperienceScreen";
import SkillsScreen from "./screens/SkillsScreen";
import SkillEditScreen from "./screens/admin/SkillEditScreen";
import SkillAddScreen from "./screens/admin/SkillAddScreen";


function App () {
  return (

    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={ <HomeScreen /> } />
          <Route path="/projects" exact element={ <ProjectsScreen /> } />
          <Route path="/projects/:id" exact element={ <ProjectScreen /> } />
          <Route path="/certifications" exact element={ <CertificationsScreen /> } />
          <Route path="/certifications/:id" exact element={ <Certificationcreen /> } />
          <Route path="/experiences" exact element={ <ExperiencesScreen /> } />
          <Route path="/experiences/:id" exact element={ <ExperienceScreen /> } />
          <Route path="/skills" exact element={ <SkillsScreen /> } />

          <Route path="/admin/login" exact element={ <LoginScreen /> } />
          <Route path="/admin/projects/add" exact element={ <ProjectAddScreen /> } />
          <Route path="/admin/project/:id/edit" exact element={ <ProjectEditScreen /> } />
          <Route path="/admin/certifications/add" exact element={ <CerticationAddScreen /> } />
          <Route path="/admin/certification/:id/edit" exact element={ <CertificationEditScreen /> } />
          <Route path="/admin/experiences/add" exact element={ <ExperienceAddScreen /> } />
          <Route path="/admin/experiences/:id/edit" exact element={ <ExperienceEditScreen /> } />
          <Route path="/admin/skills/add" exact element={ <SkillAddScreen /> } />
          <Route path="/admin/skills/:id/edit" exact element={ <SkillEditScreen /> } />
        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
