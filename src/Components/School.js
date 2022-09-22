import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';

const School = () => {

  const [schl, setSchl] = useState([]); 
  useEffect(() => {
      async function schldata() {
          const schldatas = await fetch('https://controlf5.co.in/client-demo/sanctorum-wordpress/wp-json/wp/v2/pages/33');
          const schldatass = await schldatas.json();
          setSchl(schldatass.acf.school_data);
          // console.log(schldatass.acf.school_data);
      }
      schldata();

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
          <td>{schl.school_1_name}</td>
          <td>{schl.school_1_distance}</td>
        </tr>
        <tr>
        <td>{schl.school_2_name}</td>
          <td>{schl.school_2_distance}</td>
        </tr>
        <tr>
        <td>{schl.school_3_name}</td>
          <td>{schl.school_3_distance}</td>
        </tr>
        <tr>
        <td>{schl.school_4_name}</td>
          <td>{schl.school_4_distance}</td>
        </tr>
        <tr>
        <td>{schl.school_5_name}</td>
          <td>{schl.school_5_distance}</td>
        </tr>
        <tr>
        <td>{schl.school_name_6}</td>
          <td>{schl.school_distance_6}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default School