import React, { useEffect, useState } from 'react';


export const Ftosfloor = () => {
const [ftosfloor, setFtosfloor] = useState([]);

useEffect(() => {
  async function Ftosfloordata(){
            const Ftosfloordatas = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
            const Ftosfloordatass = await Ftosfloordatas.json();
            setFtosfloor(Ftosfloordatass.acf);
            //console.log(Ftosfloordatass.acf);


  }

  Ftosfloordata()
},[])


  return (
    <div>     
        <img src={ftosfloor.floor_plan_tab_5to16}/>
      </div>
  )
}