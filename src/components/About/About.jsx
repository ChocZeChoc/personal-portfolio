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
  tablet: {
    breakpoint: { max: 1500, min: 600 },
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
    imgsrc: './percent/91.png' ,
    name: "Skill1",
  },
  {
    id: 2,
    imgsrc: './percent/92.png',
    name: "Skill2",
  },
  {
    id: 3,
    imgsrc: './percent/93.png',
    name: "Skill3",
  },
  {
    id: 4,
    imgsrc: './percent/94.png',
    name: "Skill4",
  },
  {
    id: 5,
    imgsrc: './percent/95.png',
    name: "Skill5",
  },
  {
    id: 6,
    imgsrc: './percent/96.png',
    name: "Skill6",
  },
  {
    id: 7,
    imgsrc: './percent/97.png',
    name: "Skill7",
  },
  {
    id: 8,
    imgsrc: './percent/98.png',
    name: "Skill8",
  },
  {
    id: 9,
    imgsrc: './percent/99.png',
    name: "Skill9",
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
          <h1>About Me</h1>
        <p>Hey there! I’m 25, a Unity (C#) enthusiast, amateur beetle breeder(Yes, Really! I think they're cool), and proud parent to two mischievous cats. When I’m not coding VR experiences or experimenting with digital solutions, you’ll find me cooking up a storm or gaming to recharge. I love bringing curiosity and a playful mindset from my hobbies into my projects — making work as fun and engaging as possible.</p>
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
          <img src={caturl} width={'25rem'}/>
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