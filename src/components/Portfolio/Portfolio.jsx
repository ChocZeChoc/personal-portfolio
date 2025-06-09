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
                <img src={BeetleBreeder} width={'500px'}/>
                <h2>Beetle Breeder</h2>
                <p>Step into a simulated world where evolution unfolds before your eyes! In this intuitive simulation built with Unity and powered by NavMesh, you’ll watch as simple AI creatures compete, adapt, and evolve over generations. Each creature has a set of traits—like speed and vision—that affect how well they find food and avoid obstacles. The better they perform, the more likely they are to pass their genes to the next generation. With a built-in genetic algorithm, the game evolves in real-time, introducing small mutations that can lead to big changes. Will your creatures adapt and thrive—or fade into extinction? This simulation is a beginner-friendly way to explore the basics of natural selection, genetics, and emergent behavior, all within a dynamic, living environment.</p>
                <button onClick={() => handleClick(project_BB_Github)}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick(project_BB_itch)}>
                    Go to itch.io
                </button>
            </div>
            <div className="block">
                <img src={pototo} width={'500px'}/>
                <h2>Project 2</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
            </div>
            <div className="block">
                <img src={pototo} width={'500px'}/>
                <h2>Project 3</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
            </div>
            <div className="block">
                <img src={pototo} width={'500px'}/>
                <h2>Project 4</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
            </div>
            <div className="block">
                <img src={pototo} width={'500px'}/>
                <h2>Project 5</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
            </div>
            <div className="block">
                <img src={pototo} width={'500px'}/>
                <h2>Project 6</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
            </div>
            <div className="block">
                <img src={pototo} width={'500px'}/>
                <h2>Project 7</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
            </div>
            <div className="block">
                <img src={pototo} width={'500px'}/>
                <h2>Project 8</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum sunt dicta molestias repellat iusto cupiditate reiciendis ut aperiam rem consequatur, voluptates fugit, sequi corporis? Veniam fuga vel eligendi facere.</p>
            </div>
        </div>
    </div>
  );
};

export default Home;