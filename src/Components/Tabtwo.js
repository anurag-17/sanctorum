import React, { useEffect, useState } from 'react'

export const Tabtwo = () => {
      const [tabtwo, setHometwo] = useState([]); 
      useEffect(() => {
          async function tabtwocontent(){
              const tabtwodata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
              const tabtwodatashow = await tabtwodata.json();
                setHometwo(tabtwodatashow.acf);
               // console.log(tabtwodatashow.acf);
          }
          tabtwocontent();

      },[])

  return (
    <div><img src={tabtwo.floor_plan_tab_two}/></div>
  )
}

