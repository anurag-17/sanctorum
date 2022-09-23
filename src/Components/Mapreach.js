import React, { useState } from 'react'
import GoogleMapReact from "google-map-react";
import School from './School';
import './Mapreach.css';
import Market from './Market';
import Offices from './Offices';
import Connectivity from './Connectivity';

const Mapreach = () => {


  const [school,setSchool] = useState(true);
  const [market,setMarket] = useState(false);
  const [connectivity,setConnectivity] = useState(false);
  const [office,setOffice] = useState(false);

  const handleSchool = () => {
   // console.log(event);
    setSchool(true)
    setMarket(false)
    setConnectivity(false)
    setOffice(false)

  } 
  const handleMarket = () => {
    setSchool(false)
    setMarket(true)
    setConnectivity(false)
    setOffice(false)
}
const handleConnectivity = () => {
  setSchool(false)
  setMarket(false)
  setConnectivity(true)
  setOffice(false)

} 

const handleOffice = () => {
  setSchool(false)
  setMarket(false)
  setConnectivity(false)
  setOffice(true)

} 


   

  return (
    <div>
      <div id='mapreacg-sec'>
        <div className='container'>
          <div className='mapshadow'>
          <h3 className='mob-maptitle'>Everything Within Reach</h3>
            <div className='reach-map'>
                <div className='reach-left'>
                    <div id="map-container-google-1" className="z-depth-1-half map-container reach-map">
                      
                    {
  school&&
  
  <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6830343653137!2d75.84468151419425!3d22.702840485115917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdac89a09a53%3A0xa696c98e33dcd89f!2sLalbagh%20Garden!5e0!3m2!1sen!2sin!4v1663658939960!5m2!1sen!2sin' className='reach-ifram' allowFullScreen></iframe>
  
        }

{
market&&

<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2632111774838!2d75.85252801419459!3d22.718456185107883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0a3c2422a1%3A0xb8cf3a1b62708158!2sRajwada%20Palace!5e0!3m2!1sen!2sin!4v1663658643653!5m2!1sen!2sin' className='reach-ifram' allowFullScreen></iframe>

}

{
connectivity&&
<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.229878587793!2d75.85733281419468!3d22.719695585107218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0c74fc979b%3A0xe7b8b3b6f2fd64e!2sBoliya%20Sarkar%20Ki%20Chhatri!5e0!3m2!1sen!2sin!4v1663658803030!5m2!1sen!2sin' className='reach-ifram' allowFullScreen></iframe>

}

{

office&&
<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.8950747496233!2d75.8275771641941!3d22.694949585119918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc35796e7517%3A0x87b68bbf66d039be!2sPhooti%20Kothi%2C%20Indore%2C%20Madhya%20Pradesh%20452009!5e0!3m2!1sen!2sin!4v1663658838584!5m2!1sen!2sin' className='reach-ifram' allowFullScreen></iframe>

}



                      
                    </div>
                </div>
                <div className='reach-right'>
                  <h3 >Everything Within Reach</h3>
                  <div
                  defaultactivekey="School"
                  id="uncontrolled-tab-example"
                  className="mb-3 tab-rt"
                >
                  
              <ul className='tabs-links'>
              <li className={school ? "active" :undefined} eventkey="School" title="School" onClick={handleSchool}>Hospitals Nearby </li>
              <li className={market ? "active" :undefined} eventkey="Market" title="Market" onClick={handleMarket}>Markets </li>
              <li className={connectivity ? "active" :undefined} eventkey="Connectivity" title="Connectivity" onClick={handleConnectivity}>Connectivity</li>
              {/* <li className={office ? "active" :undefined} eventkey="Offices" title="Offices" onClick={handleOffice}> office</li> */}
              </ul>
               
               <div className='tablecontebts-map'>
                  {
  school&&
                    <School />

                  }
                  
                  
                  
                 
                    
                  {
  market&&
                    <Market />

}  
                   
               

                        
                  {
  connectivity&&
                    <Connectivity />
                  }
                  
                   
                    
                        
                  {
  office&&
                    <Offices />
                  }
                    
</div>

                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mapreach
