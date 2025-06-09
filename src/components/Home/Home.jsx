import './Home.css'
import profile from '/src/assets/img/Linkedin.png'

const Home = () => {
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
    </div>
    </div>
  );
};

export default Home;