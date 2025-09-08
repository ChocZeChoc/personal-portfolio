import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import './About.css'

import Skills from "../Skills";

import logo from '/src/assets/img/choc.png'

const base_url = "https://api.thecatapi.com/v1/images/search";

  const getRandomCat = async () => {
    const response = await fetch(base_url);
    
    const reply = await response.json();

    return reply[0].url;
  };

const Home = () => {
  const responsive = {
  superLargeDesktop: {

    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 6
  },
  Bigtablet: {
    breakpoint: { max: 1500, min: 1000 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1000, min: 600 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1
  }
};



const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
     setToggleState(index);
  }

  const [caturl, setUrl] = useState(null);

  const onClickHandler = async () => {
      const caturl = await getRandomCat();
      setUrl(caturl);
  };

  const skillsData = [
  {
    id: 1,
    imgsrc: './percent/85.png' ,
    name: "Unity C#",
  },
  {
    id: 2,
    imgsrc: './percent/73.png',
    name: "Python",
  },
  {
    id: 3,
    imgsrc: './percent/95.png',
    name: "Html",
  },
  {
    id: 4,
    imgsrc: './percent/80.png',
    name: "CSS",
  },
  {
    id: 5,
    imgsrc: './percent/80.png',
    name: "JS",
  },
  {
    id: 6,
    imgsrc: './percent/85.png',
    name: "Elektronik",
  },
  {
    id: 7,
    imgsrc: './percent/80.png',
    name: "3D CAD",
  },
  {
    id: 8,
    imgsrc: './percent/90.png',
    name: "Affinity/Adobe",
  },
  {
    id: 9,
    imgsrc: './percent/80.png',
    name: "Google Sheets/Excel",
  }
]

  const skill = skillsData.map((item) => <Skills name={item.name} imgsrc={item.imgsrc}/>);

  return (
    <div>
      <div className="exp">
        <div class="exp-col-L">
          <img src={logo} />
        </div>
        <div class="exp-col-R">
          <h2>About Me</h2>
        <p>I’m a Junior <span class="bolded">Unity</span> Developer with foundation in <span class="bolded">C#</span> programming and game development, experienced in building projects such as <span class="bolded">BeetleBreeder a small AI simulation, Language teaching game, a Simple wave game, 2D mini-games.</span> Alongside Unity, I know basics in <span class="bolded">HTML, CSS, JavaScript, Python,</span> and graphic design main tools I use for this is <span class="bolded">Affinity Designer & Photo</span>, as well as experience with <span class="bolded">CAD</span> software such as Fusion360, Onshape, etc. and electronics/Arduino projects, which give me a versatile technical background. I’m passionate about creating interactive, engaging experiences and enjoy combining creativity with problem-solving to bring ideas to life. My goal is to contribute to a professional team , continue learning, and grow into a well-rounded developer while delivering meaningful projects.</p>
        <div class="tab-titles">
          <h3 className={toggleState === 1 ? "tab-links active-link" : "tab-links"} 
          onClick={() =>toggleTab(1)}>
            Experience</h3>
          <h3 className={toggleState === 2 ? "tab-links active-link" : "tab-links"} 
          onClick={() =>toggleTab(2)}>
            Education</h3>
          <h3 className={toggleState === 3 ? "tab-links active-link" : "tab-links"} 
          onClick={() => {toggleTab(3); onClickHandler();}}>
            CatImage</h3>
        </div>
        
        <div className={toggleState === 1 ? "tab-contents activetab" : "tab-contents"}>
          <ul>
            <li><span>2016</span><br/>1 Week internship at Vision Graphics</li>
            <li><span>2021-2022</span><br/>Store Manager at Domino's</li>
            <li><span>2023-Present</span><br/>1.Assistant at Netto</li>
          </ul>
        </div>
        <div className={toggleState === 2 ? "tab-contents activetab" : "tab-contents"}>
          <ul>
            <li><span>2018-2021</span><br/>HTX køge | EUC sjælland</li>
            <li><span>2022-2025</span><br/>Medialogy Bachelor | Aalborg University (KBH)</li>
          </ul>
        </div>
        <div className={toggleState === 3 ? "tab-contents activetab" : "tab-contents"}>
          <img src={caturl}/>
        </div>
        </div>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <Carousel 
        className="carouselContainer"
        responsive={responsive}
        infinite={true}
        >
            {skill}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;