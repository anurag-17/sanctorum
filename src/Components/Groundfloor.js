import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';


export const Groundfloor = () => {
const [grndflr, setGrndflr] = useState([]);

useEffect(() => {
  async function Grndflrs(){
            const Grndflrdata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
            const Grndflrdatas = await Grndflrdata.json();
            setGrndflr(Grndflrdatas.acf);
//console.log(Grndflrdatas.acf);


  }

  Grndflrs();
},[])


  return (
    <div>     
        <img src={grndflr.floor_plan_tab_ground}/>
      </div>
  )
}