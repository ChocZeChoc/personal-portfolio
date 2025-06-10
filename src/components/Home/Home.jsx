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
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam! Explicabo, similique! Magni qui obcaecati cumque at porro eius corporis! Illum recusandae alias dignissimos perspiciatis nesciunt iusto provident odio sed sapiente blanditiis sit, suscipit doloremque voluptatem distinctio obcaecati totam, ad quod ex. Assumenda rerum odio qui. Dolorem et aspernatur rerum, dolorum doloremque cupiditate. Iste ut natus consequuntur aperiam autem voluptate debitis animi iure quae, est placeat facilis accusantium similique dicta. Dicta sunt labore in at laborum quam tenetur error exercitationem deleniti laudantium, magni corrupti molestias incidunt repudiandae voluptatibus ab aspernatur quibusdam eligendi explicabo aperiam quisquam. Nihil a sint consectetur dignissimos.</p>
    </span>
    <div className='IconButton'>
      <img src={GH_icon} alt="Github" class="iconButton" width={'50px'} onClick={() => handleClick(GitHub)}/>
      <img src={LN_icon} alt="Linkedin" class="iconButton" width={'50px'} onClick={() => handleClick(Linkedin)}/>
      <img src={IG_icon} alt="Instagram" class="iconButton" width={'50px'} onClick={() => handleClick(Instagram)}/>
    </div>
    </div>
    </div>
  );
};

export default Home;