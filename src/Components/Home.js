import React, { useEffect ,useState } from "react";
import Bannerbg from './images/Banner.jpg'
import bgvideo from './images/bg.mp4'
import {Link} from 'react-router-dom';
import Mobmenu from "./Mobmenu";


export const Home = () => {
    const [posts, setPosts] = useState([]); 
    const [homes, setHome] = useState([]);  
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('https://controlf5.co.in/client-demo/sanctorum-wordpress/wp-json/wp/v2/media/28');
            const posts = await response.json();
            setPosts(posts.guid.rendered);
        }
        async function homepagecontent() {
            const homepagedata = await fetch('https://controlf5.co.in/client-demo/sanctorum-wordpress/wp-json/wp/v2/pages/33');
            const homedata = await homepagedata.json();
            setHome(homedata.acf);
         //  console.log(homedata.acf);
        }
    

        loadPosts();
        homepagecontent();
   }, [])
      // console.log(homes);
  return (
    <div> 
           <>

    <div className='home-sec' id='top-sections'>
      <div className='main-slide'>
      <Mobmenu />
      <video className="videoTag video-overly" autoPlay loop muted poster={Bannerbg}> 
                    <source src={bgvideo} type='video/mp4' />
       </video>
       </div>
    
    </div>
    <div className='home-top-banner'>
        <div className='container'>
            <div className='top-logo'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            </div>
            {/* <div className="botm-sect-ones">
              <h1>{homes.welcome_title}</h1>
                <p>{homes.paragraph_banner}</p>
            </div> */}
        </div>
    </div>
  

</></div>
  )
}
