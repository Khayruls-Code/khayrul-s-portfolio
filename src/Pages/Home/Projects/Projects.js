import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Projects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])
  return (
    <div className='projects' id='projects'>
      <div className="container">
        <div data-aos="fade-right" data-aos-duration="1000" className="section-title">
          <h1>Work I Have Done</h1>
          <p>Portfolio</p>
        </div>
        <div className="row">
          {
            projects?.map(project => <div data-aos="zoom-in-up" data-aos-duration="1000" className='projectBox' key={project.id}>
              <img src={project.img} alt="" />
              <div className='info'>
                <h2>{project.name}</h2>
                <p>{project.desc}</p>
                <div className="heroBtn">
                  <a target='_blank' rel="noreferrer" href={project.liveLink} className='primaryBtn' download>Preview</a>
                  <HashLink to={`/project/${project.id}/#projectDetails`} className='primaryBtn secondaryBtn'>Details</HashLink>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;