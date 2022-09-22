import './App.css';
import Header from "./Components/Header";
import {Home} from './Components/Home';
import Homesectiontwo from './Components/Homesection-two';
import Galleryhome from './Components/Galleryhome';
import { Projectdevelopedby } from './Components/Projectdevelopedby';
import {Footer} from './Components/Footer';
import Floorplan from './Components/Floorplan';
import Mapreach from './Components/Mapreach';
import Timeline from './Components/Timeline'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './Components/Explore';
import { Tabsdata } from './Components/Tabsdata';
import Mobmenu from './Components/Mobmenu';
import Loadmore from './Components/Loadmore';

function App() {  


  return (
    <>
<BrowserRouter>
<Routes>
<Route path="/" element={Home}></Route>
</Routes>
</BrowserRouter>
    <Home/>
    <Homesectiontwo/>
    <Mapreach/>
    <Floorplan/>  
    <Loadmore/>
    <Explore/>
    <Projectdevelopedby/>
  {/* <Tabsdata/> */}
   <Footer/>
    </>
  );
}

export default App;


