import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';

const Market = () => {

  const [mrkt, setMrkt] = useState([]); 
  useEffect(() => {
      async function markets() {
          const marketdata = await fetch('https://controlf5.co.in/client-demo/sanctorum-wordpress/wp-json/wp/v2/pages/33');
          const marketdatas = await marketdata.json();
          setMrkt(marketdatas.acf.market_data);
          //console.log(marketdatas.acf.market_data);
      }
      markets();

    },[])


  return (
    <div>
      <Table className='right-content' bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{mrkt.market_data_1}</td>
          <td>{mrkt.market_distance_1}</td>
        </tr>
        <tr>
        <td>{mrkt.market_data_2}</td>
          <td>{mrkt.market_distance_2}</td>
        </tr>
        <tr>
        <td>{mrkt.market_data_3}</td>
          <td>{mrkt.market_distance_3}</td>
        </tr>
        <tr>
        <td>{mrkt.market_data_4}</td>
          <td>{mrkt.market_distance_4}</td>
        </tr>        
        <tr>
        <td>{mrkt.market_data_5}</td>
          <td>{mrkt.market_distance_5}</td>
        </tr>  
        <tr>
        <td>{mrkt.market_data_6}</td>
          <td>{mrkt.market_distance_6}</td>
        </tr>  
      </tbody>
    </Table>
    </div>
  )
}

export default Market;