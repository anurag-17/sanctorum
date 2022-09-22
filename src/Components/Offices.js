
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';


const Offices = () => {
  const [ofc, setOfc] = useState([]); 
  useEffect(() => {
      async function ofcdata() {
          const ofcdatas = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
          const ofcdatass = await ofcdatas.json();
          setOfc(ofcdatass.acf.Offices_data);
           //console.log(ofcdatass.acf.Offices_data);
      }
      ofcdata();

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
          <td>{ofc.offices_data_1}</td>
          <td>{ofc.offices_distance_1}</td>
        </tr>
        <tr>
        <td>{ofc.offices_data_2}</td>
          <td>{ofc.offices_distance_2}</td>
        </tr>
        <tr>
        <td>{ofc.offices_data_3}</td>
          <td>{ofc.offices_distance_3}</td>
        </tr>
        <tr>
        <td>{ofc.offices_data_4}</td>
          <td>{ofc.offices_distance_4}</td>
        </tr>
        <tr>
        <td>{ofc.offices_data_5}</td>
          <td>{ofc.offices_distance_5}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
    }
export default Offices