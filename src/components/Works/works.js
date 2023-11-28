import React from 'react'
import './works.css';
import Portfolio1 from '../../images/portfolio1.jpg';
import Portfolio2 from '../../images/portfolio2.jpg';
import Portfolio3 from '../../images/portfolio3.avif';
import Portfolio4 from '../../images/portfolio4.avif';
import Portfolio5 from '../../images/portfolio5.avif';
import Portfolio6 from '../../images/portfolio6.avif';

const works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className="worksDesc">I'm a dedicated software enthusiast with an unwavering passion for crafting cutting-edge web solutions, seamlessly blends creativity and code to transform ideas into captivating digital experiences.</span>

        <div className="worksImgs">
            <img src="https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg" alt="Portfolio1" className="worksImg" />
            <img src="https://blog.depositphotos.com/wp-content/uploads/2019/04/Depositphotos_209179682_m-2015kk.jpg.webp" alt="Portfolio2" className="worksImg" />
            <img src="https://www.archisoup.com/wp-content/uploads/2023/06/Architecture-Portfolio-Design-Guide.jpg" alt="Portfolio3" className="worksImg" />
            <img src="https://elements-cover-images-0.imgix.net/7f715f96-3abe-42e7-94d4-b0618295167a?auto=compress%2Cformat&w=900&fit=max&s=504fc97c13723cc5a629058ab3a0463b" alt="Portfolio4" className="worksImg" />
            <img src="https://img.freepik.com/free-vector/flat-design-colored-portfolio-template_23-2149215470.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701129600&semt=ais" alt="Portfolio5" className="worksImg" />
            <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/24_The%2014%20Best%20Graphic%20Design%20Portfolios%20Weve%20Ever%20Seen%2C%20%26%20How%20to%20Start%20Your%20Own.jpg?%20How%20to%20Start%20Your%20Own.jpg&width=595&height=400&name=24_The%2014%20Best%20Graphic%20Design%20Portfolios%20Weve%20Ever%20Seen%2C%20%26%20How%20to%20Start%20Your%20Own.jpg?%20How%20to%20Start%20Your%20Own.jpg" alt="Portfolio6" className="worksImg" />
        </div>
        <button className="worksBtn">
            See More
        </button>
    </section>
  );
}

export default works
