import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Tabone } from './Tabone'
import { Tabthree } from './Tabthree'
import { Tabtwo } from './Tabtwo'
import {useEffect,useState} from 'react';
import { Groundfloor } from './Groundfloor';
import {Fourthfloor} from  './fourthfloor'
import { Ftosfloor } from './Fivetosixteenfloor';
import { Seventeenfloor } from './Seventeenfloor';
import { Eighteenfloor } from './Eighteenthtab';


function Floorplan() {
  const [floorcontent, setFloorcontent] = useState([]);

  useEffect(() => {
    async function floordata(){
              const floorcontentdata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
              const floorcontentdatas = await floorcontentdata.json();
  setFloorcontent(floorcontentdatas.acf);
  //console.log(floorcontentdatas.acf);
  
  
    }
  
    floordata()
  },[])



  return (
    <section id='plan-details'> 
<div id='floorplan' className='container'>
<h4> {floorcontent.floor_plan_title}  </h4>
            <h3> {floorcontent.floor_plan_subtitle} </h3>
    <Tabs
      defaultActiveKey="profile"
      id='uncontrolled-tab-example'
      className='mb-3'>
      <Tab eventKey="grndfloor" title="Ground Floor">
        <Groundfloor/>
      </Tab>
      <Tab eventKey="home" title="1st Floor">
        <Tabone/>
      </Tab>
      <Tab eventKey="profile" title="2nd Floor">
        <Tabtwo/>
      </Tab>
      <Tab eventKey="thirdfloor" title="3rd Floor">
        <Tabthree/>
      </Tab>
      <Tab eventKey="fourfloor" title="4th Floor">
     <Fourthfloor/>
      </Tab>
      <Tab eventKey="fivefloor" title="5th to 16th Floor">
        <Ftosfloor/>
      </Tab>
      <Tab eventKey="svnfloor" title="17th Floor">
      <Seventeenfloor/>
      </Tab>
      <Tab eventKey="eightfloor" title="18th Floor">
       <Eighteenfloor/>
      </Tab>
     


    </Tabs>
</div>

</section>
  );
}

export default Floorplan;