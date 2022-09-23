import React, { useEffect, useState } from 'react';
import './Explore.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Walls from './Walls'
import Flooring from './Flooring';
import Sanitary from './Sanitary';
import Work from './Work';
import Doors from './Doors';
import Electricals from './Electricals';
import Safety from './Safety';
import WaterSupply from './WaterSupply';
import GreenBuilding from './GreenBuilding';

const Explore = () => {

        const [exploredata, SetExploredata] = useState([]);
        const [explorecategory, setExplorecategory] = useState([]);
        const [explorecharges, setExplorecharges] = useState([]);
        const [depositedatas, setDepositedatas] = useState([]);
        const [amenity, setAmenity] = useState([]);

        useEffect(() => {
            async function explorecontent(){
                const response = await fetch('https://controlf5.co.in/client-demo/sanctorum-wordpress/wp-json/wp/v2/pages/33');
                const responsedata = await response.json();
                SetExploredata(responsedata.acf);
                setExplorecategory(responsedata.acf.table_categories);
                setExplorecharges(responsedata.acf.charge);
                setDepositedatas(responsedata.acf.deposite);
              
            }
            //console.log(explorecategory);
            //console.log(depositedatas);
            explorecontent();

            async function amenities(){
              const amenitiesdata = await fetch('https://controlf5.co.in/client-demo/sanctorum-wordpress/wp-json/wp/v2/building_amenities/');
              const amenitiesres = await amenitiesdata.json();
              setAmenity(amenitiesres);
             // console.log(amenitiesres);

            }
            amenities();




        },[])




  return (
    <div>        
        <section id='AmenitiesDetails'>
            <div className='container'>
            <div className='explor-section'>
                <h3>{exploredata.explore_title}</h3>
                <p>{exploredata.explore_content}</p>
            </div>
            <div className='Ament-mian'>
                    {amenity.map((post, index) => (
                        <div className='At-item1' key={index}>
                              <div className='Atimg'>
                                <img src={post.acf.feature_images} alt={post.title.rendered}></img>
                              </div>                   
                              <div className='Ament-title'>
                                  <h5>{post.title.rendered}</h5>
                              </div>
                        </div>
                    ))}
             </div>            
        </div>
        </section >

        <section id='Specifications'>
            <div className='container'>
               {/* <h3>{exploredata.payment_plan_title}</h3>  */}
               <h3>Specifications</h3>       
               <h3>{exploredata.specification_title}</h3>
               <div className='specifictab'>
               <Tab.Container id='left-tabs-example' defaultActiveKey="first">
                <Row g-0="true">
                    <Col sm={3}>
                    <Nav variant="pills" className='flex-column'>
                        <Nav.Item>
                        <Nav.Link eventKey="first"> Walls</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second"> Flooring/Tiling </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third"> Sanitary & CP fittings </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="fourth">  Doors & Windows   </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="fivth"> Electricals </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="six"> Safety & Security   </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="seven"> Water Supply </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="eight">Green Building Sustainable Initiatives  </Nav.Link>
                        </Nav.Item>
                       
                    </Nav>
                    </Col>
                    <Col sm={9} className='tab-des'>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Walls />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Flooring />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Sanitary />
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                        <Doors />
                        </Tab.Pane>
                        <Tab.Pane eventKey="fivth">
                        <Electricals />
                        </Tab.Pane>
                        <Tab.Pane eventKey="six">
                        <Safety />
                        </Tab.Pane>
                        <Tab.Pane eventKey="seven">
                        <WaterSupply />
                        </Tab.Pane>
                        <Tab.Pane eventKey="eight">
                        <GreenBuilding />
                        </Tab.Pane>
                        <Tab.Pane eventKey="nine">
                        <Safety />
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </div>
            </div>
        </section>

        <section id='Payment-sec'>
            <div className='container'>
               <div className='Payment-main'>
                 <h3>{exploredata.payment_plan_title}</h3>

                  <div className='extra-ct'>               
                   <table className='table table-extra table-bordered table-striped categry-tble'>
                        <thead>
                            <tr>
                              <th scope="col">{exploredata.category_title} </th>
                              <th scope="col">{exploredata.charge_title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{explorecategory.line14} </td>  
                              <td>{explorecharges.charge_14}</td>
                            </tr> 
                            <tr>
                                <td><span>1</span>{explorecategory.line_1} </td>  
                              <td>{explorecharges.charge_1}</td>
                            </tr>  
                            <tr>
                              <td><span>2</span>{explorecategory.line_2}</td>
                        <td>{explorecharges.charge_2}</td>
                            </tr>  
                            <tr>
                               <td><span>3</span>{explorecategory.line_3}</td> 
                              <td>{explorecharges.charge_3}</td> 
                            </tr> 

                            <tr>
                              <td><span>4</span>{explorecategory.line_4}</td> 
                              <td>{explorecharges.charge_4}</td> 
                            </tr> 
                            <tr>
                              <td><span>5</span>{explorecategory.line_5}</td> 
                              <td>{explorecharges.charge_5}</td> 
                            </tr> 
                            <tr>
                              <td><span>6</span>{explorecategory.line_6}</td> 
                              <td>{explorecharges.charge_6}</td> 
                            </tr> 
                            <tr>
                              <td><span>7</span>{explorecategory.line_7}</td> 
                              <td>{explorecharges.charge_7}</td> 
                            </tr> 
                            <tr>
                              <td><span>8</span>{explorecategory.line_8}</td> 
                              <td>{explorecharges.charge_8}</td> 
                            </tr> 
                            <tr>
                              <td><span>9</span>{explorecategory.line_9}</td> 
                              <td>{explorecharges.charge_9}</td> 
                            </tr> 
                            <tr>
                              <td><span>10</span>{explorecategory.line_10}</td> 
                              <td>{explorecharges.charge_10}</td> 
                            </tr> 
                            <tr>
                              <td><span>11</span>{explorecategory.line_11}</td> 
                              <td>{explorecharges.charge_11}</td> 
                            </tr> 
                            <tr>
                              <td><span>12</span>{explorecategory.line_12}</td> 
                              <td>{explorecharges.charge_12}</td> 
                            </tr> 
                            <tr>
                              <td>{explorecategory.line_13}</td> 
                              <td>{explorecharges.charge_13}</td> 
                            </tr> 
                        </tbody>
                   </table>

                   {/* <div className='Deposit'>
                   <table className='table table-extra table-bordered table-striped  categry-tble Deposittable'>
                        <thead>
                            <tr>
                              <th colSpan={2}> 
                              {exploredata.deposit_title}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td><span>1</span>{depositedatas.left_site_content_1}</td>
                              <td>{depositedatas.Reft_site_content_1}</td>
                            </tr>                            
                        </tbody>
                     </table>
                   
                   </div> */}
                 </div>
               </div>
            </div>
        </section>
    </div>
  )
}

export default Explore;