import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { BsZoomIn } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectDelails = () => {
  useEffect(() => {
    AOS.init()
  })
  const { projectId } = useParams()
  const [project, setProject] = useState({})

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        const matched = data.find(project => project.id == projectId)
        setProject(matched)
      })
  }, [projectId])
  return (
    <div className='projectDetails' id='projectDetails'>
      <div className="titleBg">
        <h1>{project?.name}</h1>
        <p><Link to='/'>Home</Link>/Project Details</p>
      </div>
      <div className="container">
        <div className="detailsRow">
          {
            project?.otherImg?.map(img => <div data-aos="zoom-in" data-aos-duration="2000" key={img}>
              <Gallery>
                <Item
                  original={img}
                  thumbnail={img}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <div className='shortImg'>
                      <img src={img} alt='' />
                      <div className="overlay">
                        <BsZoomIn onClick={open} style={{ cursor: "pointer" }} />
                      </div>
                    </div>
                  )}
                </Item>
              </Gallery>
            </div>)
          }
        </div>
        <div className="details">
          <h2 data-aos="fade-right" data-aos-duration="1000">{project?.name}</h2>
          <p data-aos="fade-right" data-aos-duration="1500">{project?.desc}</p>
          <h3 data-aos="fade-left" data-aos-duration="1000">Technologies</h3>
          <div className='technology'>
            {
              project?.technoligy?.split(', ').map(item => <span data-aos="zoom-in" data-aos-duration="2000">{item}</span>)
            }
          </div>
          <h3 data-aos="fade-right" data-aos-duration="1000">Related All Links</h3>
          <div data-aos="fade-right" data-aos-duration="1000" className="websiteLink">
            <a href={project?.liveLink}>Preview Live</a>
            <a href={project?.clientLink}>Client Side</a>
            <a href={project?.serverLink}>Server Side</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDelails;