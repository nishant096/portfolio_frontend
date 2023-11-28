import React from 'react';
import './projects.css';
import Java from '../../images/java.png';
import Clan from '../../images/c++.png';
import Python from '../../images/python.png';
import Matlab from '../../images/matlabPic.png';
import Julia from '../../images/julia.png';
import ReactP from '../../images/reactPic.png';
import WebDev from '../../images/webDevPic.webp';
import ML from '../../images/machinelearning.png';
import DSA from '../../images/dsa.png'; // Import the DSA image

const Projects = () => {
  return (
    <section id='projectPage'>
      <div id='project'>
        <h1 className="projectTitle">
          My Projects
        </h1>
        <p className="projectDesc">
          Explore my diverse portfolio of projects spanning multiple coding languages and technologies, a dynamic showcase that continually evolves as I embark on new coding adventures.
        </p>
        <p className='projectDesc2'>Click on the image to see project codes related to various programming languages</p>

        <div className="projectImgs">
          <div className="projectRow">
            <a href='https://drive.google.com/drive/folders/143uC26Ef4oMt_afb03pb7WodNAqg4QU-?usp=sharing' target='_blank'><img src="https://www.freepngimg.com/thumb/java/3-2-java-free-download-png-thumb.png" alt="java" className='projectImg'/></a>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZCjrmbfh4tp8Cmw9WifDkg2ipAUoJ7J7MblFbPRiZg&s" alt="cplus" className='projectImg'/>
            <img src="https://www.gcreddy.com/wp-content/uploads/2017/06/Python-1.jpg" alt="python" className='projectImg'/>
          </div>
          <div className="projectRow py-20">
            <img src={Matlab} alt="matlab" className='projectImg'/>
            <img src={Julia} alt="julia" className='projectImg'/>
            <img src={ReactP} alt="react" className='projectImg'/>
          </div>
          <div className="projectRow py-10">
            <img src={WebDev} alt="web" className='projectImg'/>
            <img src={ML} alt="machinelearning" className='projectImg'/>
            <a href='https://drive.google.com/drive/folders/1ZRQDY9_uDeNltn81KaDuIo2kix3x1Yix?usp=sharing' target='_blank'><img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg" alt='dsa' className='projectImg dsa-img'/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
