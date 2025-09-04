import './Home.css'
import profile from '/src/assets/img/Linkedin.png'
import GH_icon from '/src/assets/img/github.svg'
import LN_icon from '/src/assets/img/linkedin.svg'
import IG_icon from '/src/assets/img/instagram.svg'

let GitHub = 'https://github.com/ChocZeChoc';
let Linkedin = 'https://www.linkedin.com/in/nathansl/';
let Instagram = 'https://www.instagram.com/im_nathan.mp4/';

const Home = () => {
   const handleClick = (project) => {
        window.open(project);
    }

  return (
    <div className='homePage'>
      <div>
          <img src={profile} alt='profile pic' className='profileimg'/>
      </div>
        <div className='homeIntro'>
            <h1 className='homeHello'>Hello I'm <span style={{color:'#6600cc'}}>Nathan Sean Littlefield</span>!</h1> 
            <h2 className='homePosition'>Unity Developer (C#)</h2>
          <span className='homeText'>
            <p>I’m a Junior Unity Developer with a foundation in C# programming and interactive game design. My background also includes some basic WebDev (HTML, CSS, JavaScript & React), Python scripting, graphic design, and experience with CAD software and electronics. Through my education and hands-on projects, I’ve built interactive experiences and problem-solving skills that I’m eager to bring to a professional team.</p>
        </span>
          <div className='IconButton'>
            <img src={GH_icon} alt="Github" class="iconButton" onClick={() => handleClick(GitHub)}/>
            <img src={LN_icon} alt="Linkedin" class="iconButton" onClick={() => handleClick(Linkedin)}/>
            {/* <img src={IG_icon} alt="Instagram" class="iconButton" onClick={() => handleClick(Instagram)}/> */}
          </div>
        </div>
    </div>
  );
};

export default Home;