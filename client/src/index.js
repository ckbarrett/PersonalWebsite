import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Navbar from './components/Navbar/Navbar';
import TitleSection from './sections/TitleSection/TitleSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ProjectSection from './sections/ProjectSection/ProjectSection';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar />
    <TitleSection />
    <AboutSection />
    <ProjectSection />
  </React.StrictMode>
);
