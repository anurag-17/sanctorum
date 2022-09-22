import React, { useEffect, useState } from 'react';


export const Seventeenfloor = () => {
const [svnteenflr, setSvnteenflr] = useState([]);

useEffect(() => {
  async function svnteenflrdata(){
            const svnteenflrdatas = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
            const svnteenflrdatass = await svnteenflrdatas.json();
            setSvnteenflr(svnteenflrdatass.acf);
            //console.log(fourflrdatass.acf);


  }

  svnteenflrdata()
},[])


  return (
    <div>     
        <img src={svnteenflr.floor_plan_tab_17}/>
      </div>
  )
}