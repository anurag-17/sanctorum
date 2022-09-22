import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';


export const Tabone = () => {
const [tabone, setTabone] = useState([]);

useEffect(() => {
  async function tabonedata(){
            const tabonedata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
            const tabonedatas = await tabonedata.json();
setTabone(tabonedatas.acf);
//console.log(tabonedatas.acf);


  }

  tabonedata()
},[])


  return (
    <div>     
        <img src={tabone.floor_plan_tab_one}/>
      </div>
  )
}