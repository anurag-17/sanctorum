import React, { useEffect, useState } from 'react';


export const Fourthfloor = () => {
const [fourflr, setFourflr] = useState([]);

useEffect(() => {
  async function fourflrdata(){
            const fourflrdata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
            const fourflrdatas = await fourflrdata.json();
            setFourflr(fourflrdatas.acf);
            //console.log(fourflrdatas.acf);


  }

  fourflrdata()
},[])


  return (
    <div>     
        <img src={fourflr.floor_plan_tab_four}/>
      </div>
  )
}