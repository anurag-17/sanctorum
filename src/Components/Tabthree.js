import React from 'react'
import { useEffect ,useState } from "react";


export const Tabthree = () => {


  const [tabthreecon, setTabthreecon] = useState([]); 
  useEffect(() => {
      async function tabthreecons() {
          const tabthreedata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
          const tabthreedatas = await tabthreedata.json();
          setTabthreecon(tabthreedatas.acf);
         //console.log(setTabthreecon.acf);

      }
      

      
      tabthreecons();
 }, [])
    // console.log(homes);


  return (
    <div><img src={tabthreecon.floor_plan_tab_three}/></div>
  )
}