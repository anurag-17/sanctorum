import React, { useEffect, useState } from 'react'


export const Footer = () => {

  const [footerdata, setFooterdata] = useState([]);

  useEffect(() => {
    async function Footercontents(){

        const footerdatas = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
        const footerdetails = await footerdatas.json();
        setFooterdata(footerdetails.acf);
        //console.log(footerdetails.acf);

    }
    Footercontents();

   

  },[])



  return (
   
    <div id='connect' className='footer-main'> 
      
    <div className='container'> 
    <div className='footer-colms'> 
      <div className='left-details'> 
          <div className='foots-logo'>
            <img src={footerdata.footer_logo} alt="logo"/>
          </div>

          <ul> 
                <li><img src={footerdata.map_icon} alt="Locate"/></li> 
                <li><a href="">{footerdata.address}</a></li>
          </ul>
          <ul>
            <li><img src={footerdata.mail_icon} alt="Email"/></li> 
            <li> <a href={footerdata.mailto}>{footerdata.email_address}</a></li>
          </ul>
          <ul> 
              <li><img src={footerdata.phone_icon} alt="Phone"/></li> 
              <li><a href={footerdata.callto}>{footerdata.phone_number}</a></li>   
          </ul>


      </div>

          <div className='connect-right'> 
              
              <h3>{footerdata.connect_with_us}</h3>
              <form action="/action_page.php">

<ul> 
<li> <input type="text" id='name' placeholder='Name'/></li>
<li>  <input type="email" id='email' placeholder='Email'/></li>
</ul>

<ul> 
<input type="phone" id='phone' placeholder='Phone'/>


</ul>
<ul className='chkbx'>  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label htmlFor="vehicle1"> By giving my phone number, i agree to being contacted by Phone, SMS, Whatsapp or any other chanel.</label> </ul>

<input type="submit" value="ENQUIRE NOW"/>
</form> 
             




          </div>

          </div>


          <div className='footer-copyrights'> 
          <p>{footerdata.copyright_text}</p>



          </div>

  </div>


    
    </div>

  )
}
