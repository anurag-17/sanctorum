import React, { useEffect, useState } from 'react';


export const Eighteenfloor = () => {
const [Egthnfloor, setEgthnfloor] = useState([]);

useEffect(() => {
  async function Egthnfloordata(){
            const Egthnfloors = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
            const Egthnfloorss = await Egthnfloors.json();
            setEgthnfloor(Egthnfloorss.acf);
           // console.log(Egthnfloorss.acf);


  }

  Egthnfloordata()
},[])


  return (
    <div>     
        <img src={Egthnfloor.floor_plan_tab_18}/>
      </div>
  )
}