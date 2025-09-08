import './Portfolio.css'

//Beetle-Breeder
import BeetleBreedPic from '/src/assets/img/Beetle Breeder.png'
let BeetleBreed_Github = "https://github.com/ChocZeChoc/Beetles_Breeder";
let BeetleBreed_itch = "https://choc-sama.itch.io/beetle-breeder";

//Orhandel
import OrdHandelPic from '/src/assets/img/OrdHandel.png'
let OrdHandel_Github = "https://github.com/DeadPieGamer/P2-Project";
let OrdHandel_itch = "https://med201.itch.io/ordhandel";

//App-Eel
import AppEelPic from '/src/assets/img/AppEel.png'
let AppEel_Github = "https://github.com/gulfurs/GameJam";
let AppEel_itch = "https://deadpiegamer.itch.io/appealapealeapeaealepaleplaep";

//BlockBand
import BlockBandPic from '/src/assets/img/BlockBand.png'
let BlockBand_Github = "https://github.com/gulfurs/P4-Project";

//EtLil
import EtLilPic from '/src/assets/img/EtLil.png'
let EtLil_Github = "https://github.com/gulfurs/P5-Project";
let EtLil_YT = "https://youtu.be/UUkmlhBr_5M?si=rWhe3Vp-giG8qcsu";

//LostTrans
import LostTransPic from '/src/assets/img/LostTrans.png'
let LostTrans_Github = "https://github.com/gulfurs/P6-Project";
let LostTrans_itch = "https://simonaxelsen.itch.io/lost-translation";

//WaveGame
import WaveGamePic from '/src/assets/img/WaveGame.png'
let WaveGame_Github = "https://github.com/gulfurs/GameJam";
let WaveGame_itch = "";

const Home = () => {

    const handleClick = (project) => {
        window.open(project);
    }

  return (
    <div>
        <div>
            <h2 className='PortTitle'>Projects</h2>
        </div>
        <div className="grid-container">
            <div className="block">
                <img src={BeetleBreedPic}/>
                <h2 className="projectHeader">Beetle Breeder (Solo)</h2>
                <p>Unity-powered simulation! Agents using built-in NavMesh compete, adapt, and evolve through natural selection. Traits like speed and vision affect survival, while genetic algorithms introduce mutations.</p>
                 <ul>
                    <li>Genetic Algorithm</li>
                    <li>NavMesh PathFinding(A*)</li>
                    <li>Unity C#</li>
                 </ul> 
                <div className='linkbutton'>
                <button onClick={() => handleClick(BeetleBreed_Github)}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick(BeetleBreed_itch)}>
                    Go to itch.io
                </button>
                </div>
            </div>
            <div className="block">
                <img src={OrdHandelPic}/>
                <h2 className="projectHeader">Ordhandel (Group)</h2>
                <p>Mobile Application created in Unity for new comers wanting to learn some basic danish words, Contains 30 words people might come across in a supermarket</p>
                 <ul>
                    <li>Game-Base Learning</li>
                    <li>Json</li>
                    <li>Unity C#</li>
                 </ul> 
                <div className='linkbutton'>
                <button onClick={() => handleClick(OrdHandel_Github)}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick(OrdHandel_itch)}>
                    Go to itch.io
                </button>
                </div>
            </div>
            <div className="block">
                <img src={AppEelPic}/>
                <h2 className="projectHeader">App-Eel (Group)</h2>
                <p>Fun little game, for GameJam at AAU. Containing many mini-games within, the theme is an Eel trying to go to court appealing his charges</p>
                 <ul>
                    <li>Graphic Design</li>
                    <li>Unity C#</li>
                 </ul> 
                <div className='linkbutton'>
                <button onClick={() => handleClick(AppEel_Github)}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick(AppEel_itch)}>
                    Go to itch.io
                </button>
                </div>
            </div>
            <div className="block">
                <img src={BlockBandPic}/>
                <h2 className="projectHeader">BlockBand (Group)</h2>
                <p>Project focused on hardware and Arduino, User can place blocks on top of each other connecting to Arduino which sends the resistor value of the block to Unity which then change the sound that is being played</p>
                 <ul>
                    <li>Unity C#</li>
                    <li>Arduino C++</li>
                    <li>Pure Data</li>
                 </ul> 
                 <div className='linkbutton'>
                <button onClick={() => handleClick(BlockBand_Github)}>
                    Go to Repository
                </button>
                </div>
            </div>
            <div className="block">
                <img src={EtLilPic}/>
                <h2 className="projectHeader">Et 'Lille' Problem (Group)</h2>
                <p>VR experience where pre-service teachers are put into a simulated environment where "wrong" decisions wouldn't have a real world consequnces. Improving their decision-making & Conflict-resolution skills</p>
                 <ul>
                    <li>VR</li>
                    <li>Unity C#</li>
                    <li>Branching structure</li>
                 </ul> 
                <div className='linkbutton'>
                <button onClick={() => handleClick(EtLil_Github)}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick(EtLil_YT)}>
                    Youtube
                </button>
                </div>
            </div>
            <div className="block">
                <img src={LostTransPic}/>
                <h2 className="projectHeader">Lost-Translation (Group)</h2>
                <p>A serious-game developed in Unity on Secound language aquisition through contextual approch. The game use a diglot weave method to teach the users some words in portugese</p>
                 <ul>
                    <li>Adaptive Dialog</li>
                    <li>Unity C#</li>
                 </ul> 
                <div className='linkbutton'>
                <button onClick={() => handleClick(LostTrans_Github)}>
                    Go to Repository
                </button>
                <button onClick={() => handleClick(LostTrans_itch)}>
                    Youtube
                </button>
                </div>
            </div>
            <div className="block">
                <img src={WaveGamePic}/>
                <h2 className="projectHeader">Simple Wave Game (Solo)</h2>
                <p>A simple wave game, where the players must face an infinite wave of enemies and survive as long as possible</p>
                 <ul>
                    <li>Random spawn</li>
                    <li>Camera movements</li>
                    <li>Unity C#</li>
                 </ul> 
                <div className='linkbutton'>
                <button onClick={() => handleClick(WaveGame_Github)}>
                    Go to Repository
                </button>
                {/* <button onClick={() => handleClick(WaveGame_itch)}>
                    Go to itch.io
                </button> */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;