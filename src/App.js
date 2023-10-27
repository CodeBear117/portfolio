import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ButtonGrid from './ButtonGrid';
import './App.css';
import BlogPage from './BlogPage';
import HobbiesPage from './HobbiesPage';
import ProjectsPage from './ProjectsPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes> 
      <Route path="/Blog" element={<BlogPage />} />
      <Route path="/Hobbies" element={<HobbiesPage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/" element={ // this is open because the homepage is contained here, not in a seperate file
        <div>
        <div className='mainrow-1'>
        <div className="row-1col-1"></div>
        <div className='row-1col-2'>
        <h1>Hey,</h1>
        <p>
          I'm Sahil, an engineer based in Melbourne, Australia.
        </p>

        <p>
          &#9889; Currently, I'm pivoting my career from mechanical engineering into software engineering. 
        </p>

        <p>To do this, I'm working towards a full stack engineering certification 
          through <a className='any-link' target="_blank" rel="noopener noreferrer" href="https://www.codecademy.com/">Codecademy</a>, and building projects like 
          this portfolio website to showcase my learning.
        </p>

        <p>
          &#129470; Prior to this, I was an automation engineer at Automated Solutions Australia, where I programmed robots and designed end-effector tools
          for automated manufacturing projects throughout Australia.
        </p>

        <p>
          <span></span>Before that, I worked for Tesla as a product specialist, and interned at PwC Australia.
        </p>

        <p>
          &#128640; I graduated from Monash University with an Honours degree in aerospace engineering and commerce. During my time at
          uni, I was a deep learning researcher and the Industry Partnerships Manager at <a className='any-link' target="_blank" rel="noopener noreferrer" href="https://www.deepneuron.org/">Monash DeepNeuron</a>.
        </p>
        <a
          className="any-link"
          href="https://www.linkedin.com/in/sahilkumar96/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        </div>
        <div className='row-1col-3'></div>
      </div>
      <div className='mainrow-2'>
        <div className='row-2col-1'></div>
        <ButtonGrid />
        <div className='row-2col-3'></div>
      </div>
      <div className='mainrow-3'>
        <div className='row-3col-1'></div>
        <div className='row-3col-2'>
          <h1>Featured Articles</h1>

        </div>
        <div className='row-3col-3'></div>
      </div>
      </div>
      } />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
