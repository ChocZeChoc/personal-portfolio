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
            <h2 className='homePosition'>Cat Lover & Beetle Breeder</h2>
          <span className='homeText'>
            <p>I’m 25 and passionate about creating digital solutions using Unity (C#), programming, and problem-solving. I enjoy turning ideas into functional applications and optimizing workflows to improve efficiency. Outside of work, I’m a dedicated cat parent, enjoy cooking, and love gaming, which fuels my creativity and attention to detail.</p>
        </span>
          <div className='IconButton'>
            <img src={GH_icon} alt="Github" class="iconButton" onClick={() => handleClick(GitHub)}/>
            <img src={LN_icon} alt="Linkedin" class="iconButton" onClick={() => handleClick(Linkedin)}/>
            <img src={IG_icon} alt="Instagram" class="iconButton" onClick={() => handleClick(Instagram)}/>
          </div>
        </div>
    </div>
  );
};

export default Home;