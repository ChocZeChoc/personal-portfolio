import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import './About.css'

import Skills from "../Skills";

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
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
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
    imgsrc: 'public/percent/91.png' ,
    name: "Skill1",
  },
  {
    id: 2,
    imgsrc: 'public/percent/92.png',
    name: "Skill2",
  },
  {
    id: 3,
    imgsrc: 'public/percent/93.png',
    name: "Skill3",
  },
  {
    id: 4,
    imgsrc: 'public/percent/94.png',
    name: "Skill4",
  },
  {
    id: 5,
    imgsrc: 'public/percent/95.png',
    name: "Skill5",
  },
  {
    id: 6,
    imgsrc: 'public/percent/96.png',
    name: "Skill6",
  },
  {
    id: 7,
    imgsrc: 'public/percent/97.png',
    name: "Skill7",
  },
  {
    id: 8,
    imgsrc: 'public/percent/98.png',
    name: "Skill8",
  },
  {
    id: 9,
    imgsrc: 'public/percent/99.png',
    name: "Skill9",
  }
]

  const skill = skillsData.map((item) => <Skills name={item.name} imgsrc={item.imgsrc}/>);

  return (
    <div>
      <div className="exp">
        <div class="exp-col-L">
          <img src='src/assets/img/Choc.png' />
        </div>
        <div class="exp-col-R">
          <h1>About Me</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sunt possimus natus, quam harum alias nemo quis, porro error dolores aut asperiores repellat, consectetur veniam iste corrupti minus unde quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem quam veritatis voluptates suscipit quo deserunt nisi reprehenderit animi nemo. Necessitatibus dolore tenetur, eaque esse debitis minima at maiores possimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sunt possimus natus, quam harum alias nemo quis, porro error dolores aut asperiores repellat, consectetur veniam iste corrupti minus unde quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem quam veritatis voluptates suscipit quo deserunt nisi reprehenderit animi nemo. Necessitatibus dolore tenetur, eaque esse debitis minima at maiores possimus.</p>
        <div class="tab-titles">
          <h3 className={toggleState === 1 ? "tab-links active-link" : "tab-links"} 
          onClick={() =>toggleTab(1)}>
            Experience</h3>
          <h3 className={toggleState === 2 ? "tab-links active-link" : "tab-links"} 
          onClick={() =>toggleTab(2)}>
            Education</h3>
          <h3 className={toggleState === 3 ? "tab-links active-link" : "tab-links"} 
          onClick={() => {toggleTab(3); onClickHandler();}}>
            Get Random Cat Image</h3>
        </div>
        
        <div className={toggleState === 1 ? "tab-contents activetab" : "tab-contents"}>
          <ul>
            <li><span>Being born 2000</span><br/>was busy being born</li>
            <li><span>Did some stuff 2020-2022</span><br/>Did some stuff</li>
            <li><span>Relax 2022-present</span><br/>Chilling with my cats</li>
          </ul>
        </div>
        <div className={toggleState === 2 ? "tab-contents activetab" : "tab-contents"}>
          <ul>
            <li><span>2007-2016</span><br/>Some random school I went to</li>
            <li><span>2018-2021</span><br/>Where the fun time begins</li>
            <li><span>2022-present</span><br/>Medialogy my man</li>
          </ul>
        </div>
        <div className={toggleState === 3 ? "tab-contents activetab" : "tab-contents"}>
          <img src={caturl} width={'250px'}/>
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