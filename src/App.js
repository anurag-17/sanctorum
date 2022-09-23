import './App.css';
import {Home} from './Components/Home';
import Homesectiontwo from './Components/Homesection-two';
import Galleryhome from './Components/Galleryhome';
import { Projectdevelopedby } from './Components/Projectdevelopedby';
import {Footer} from './Components/Footer';
import Floorplan from './Components/Floorplan';
import Mapreach from './Components/Mapreach';
import Explore from './Components/Explore';
function App() {  


  return (
    <>
    <Home/>
    <Homesectiontwo/>
    <Mapreach/>
    <Floorplan/> 
    <Galleryhome/>
    <Explore/>
    <Projectdevelopedby/>
   <Footer/>
    </>
  );
}

export default App;


