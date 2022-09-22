
import React, { useState, useEffect } from "react";
import Galleryhome from './Galleryhome';
const postsPerPage =5;
let arrayForHoldingPosts = [];

const Loadmore = () => {

    const [postsToShow, setPostsToShow] = useState([]);
    const [imagesData, setImagesData] = React.useState([]);
    const [next, setNext] = useState(5);

    React.useEffect(() => {
        getData();
      }, []);
    
    
      const getData = () => {
       fetch('https://controlf5.co.in/client-demo/sanctorum-wordpress/wp-json/wp/v2/gallery_slider/')
          .then((response) => response.json())
          .then((res) => {
            setImagesData([...imagesData, ...res]);
    
          })
          .catch((err) => {});
      };
  
    const loopWithSlice = (start, end) => {
      const slicedPosts = imagesData.slice(start, end);
      arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
      setPostsToShow(arrayForHoldingPosts);
    };
  
    useEffect(() => {
      loopWithSlice(3, postsPerPage);
    }, []);
  
    const handleShowMorePosts = () => {
      loopWithSlice(next, next + postsPerPage);
      setNext(next + postsPerPage);
    };

    


  return (
    <div>
        <div className="container">
         <div className="gallery-slide">
         <Galleryhome postsToRender={postsToShow}/>
         <div className="loadbtn1">
           <button onClick={handleShowMorePosts} className='loadbtn'> Show more!</button>  
         </div>
       </div>
       </div>
    </div>
  )
}

export default Loadmore;
