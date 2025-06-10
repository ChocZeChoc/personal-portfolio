import './Portfolio.css'

import BeetleBreeder from '/src/assets/img/Beetle Breeder.png'
import pototo from '/src/assets/img/Pototo.jpg'

let project_BB_Github = "https://github.com/ChocZeChoc/Beetles_Breeder";
let project_BB_itch = "https://choc-sama.itch.io/beetle-breeder";

const Home = () => {

    const handleClick = (project) => {
        window.open(project);
    }

  return (
    <div>
        <div>
            <h1>Portfolio</h1>
        </div>
        <div className="grid-container">
            <div className="block">
                <img src={BeetleBreeder} width={'460px'} height={'460px'}/>
                <h2 className="projectHeader">Beetle Breeder</h2>
                <p>Experience evolution in action with this Unity-powered simulation! Watch AI creatures compete, adapt, and evolve through natural selection. Traits like speed and vision affect survival, while genetic algorithms introduce mutations. Beginner-friendly and dynamic, it’s a fun, interactive way to explore evolution, genetics, and emergent behavior in a living digital world.</p>
                <div className='linkbutton'>
                <button onClick={() => handleClick(project_BB_Github)}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick(project_BB_itch)}>
                    Go to itch.io
                </button>
                </div>
            </div>
            <div className="block">
                <img src={pototo} width={'460px'} height={'460px'}/>
                <h2 className="projectHeader">Project 2</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
                <div className='linkbutton'>
                <button onClick={() => handleClick()}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick()}>
                    Go to itch.io
                </button>
                </div>
            </div>
            <div className="block">
                <img src={pototo} width={'460px'} height={'460px'}/>
                <h2 className="projectHeader">Project 3</h2>
                <p>Lere.</p>
                <div className='linkbutton'>
                <button onClick={() => handleClick()}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick()}>
                    Go to itch.io
                </button>
                </div>
            </div>
            <div className="block">
                <img src={pototo} width={'460px'} height={'460px'}/>
                <h2 className="projectHeader">Project 4</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
                <div className='linkbutton'>
                <button onClick={() => handleClick()}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick()}>
                    Go to itch.io
                </button>
                </div>
            </div>
            <div className="block">
                <img src={pototo} width={'460px'} height={'460px'}/>
                <h2 className="projectHeader">Project 5</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
                <div className='linkbutton'>
                <button onClick={() => handleClick()}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick()}>
                    Go to itch.io
                </button>
                </div>
            </div>
            <div className="block">
                <img src={pototo} width={'460px'} height={'460px'}/>
                <h2 className="projectHeader">Project 6</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
                <div className='linkbutton'>
                <button onClick={() => handleClick()}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick()}>
                    Go to itch.io
                </button>
                </div>
            </div>
            <div className="block">
                <img src={pototo} width={'460px'} height={'460px'}/>
                <h2 className="projectHeader">Project 7</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
                <div className='linkbutton'>
                <button onClick={() => handleClick()}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick()}>
                    Go to itch.io
                </button>
                </div>
            </div>
            <div className="block">
                <img src={pototo} width={'460px'} height={'460px'}/>
                <h2 className="projectHeader">Project 8</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
                <div className='linkbutton'>
                <button onClick={() => handleClick()}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick()}>
                    Go to itch.io
                </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;