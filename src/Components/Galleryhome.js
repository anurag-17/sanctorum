import React, { useEffect, useState } from "react";
import './Galleryhome.css';
import Masony from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroll-component";
import Carousel from 'react-bootstrap/Carousel';
import gallery1 from '../Components/Photos/gallery_1.jpg';
import gallery2 from '../Components/Photos/gallery_2.jpg';
import gallery3 from '../Components/Photos/gallery_3.jpg';
import gallery4 from '../Components/Photos/gallery_4.jpg';
import gallery5 from '../Components/Photos/gallery_5.jpg';
import gallery6 from '../Components/Photos/gallery_6.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


// Masory Options
const masonryOptions = {
  fitWidth: false,
  columnWidth:350,
  gutter:10,
  itemSelector: ".photo-item"
};



export default function Galleryhome({ postsToRender }) {
  const [imagesData, setImagesData] = React.useState([]);

  const [imageModal, setImageModal] = React.useState({
    showModal: false,
    modalSrc: null,
    imageIndex: null,
    currentSectionLength: null
  });

  const [page, setPage] = React.useState(0);

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

  const fetchData = () => {
    setPage(getData.acf);
    console.log();
    getData();
  };

  const refresh = () => {
  //  console.log("refresh.....");
  };

  
  const onSet = (type) => {
    if (type == "prev") {
      if (imageModal.imageIndex != 0) {
        let data = imagesData[imageModal.imageIndex - 1];

        setImageModal((modal) => ({
          ...modal,
          imageIndex: imageModal.imageIndex - 1,
          modalSrc: data.acf.image
        }));
      } else {
        alert("NO MORE LEFT IMAGE");
      }
    } else if (type == "next") {
      if (imageModal.imageIndex > imagesData.length) {
        alert("NO MORE LEFT IMAGE");
      } else {
        let data = imagesData[imageModal.imageIndex + 1];

        setImageModal((modal) => ({
          ...modal,
          imageIndex: imageModal.imageIndex + 1,
          modalSrc: data.acf.image
        }));
      }
    }
  };

//console.log(imagesData);





//mobile slider
const [timeline, setTimeline] = useState([]);
const [cosntructionsdata, setCosntructionsdata] = useState([]);
  
useEffect(() => {
           async function Timelines(){
               const timelinedata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-content/uploads/2022/');
               const timelinedatas = await timelinedata.json();
               setTimeline(timelinedatas.acf);
               //console.log(timelinedatas.acf);    
           }
           Timelines();
           async function cosntructionss(){
               const constructiondata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/construction_status');
               const constructionpost = await constructiondata.json();
               setCosntructionsdata(constructionpost);
           }
           cosntructionss();
},[])

  //mobile slider end
  
 

  return (    
    <>
    <section id='gallery'>
      <div class='container'>
        <h4> gallery</h4>
        <h3>Recent Site Photos</h3>
          <div class='galley-main'>
            <div class='conatiner'>            
              <div className='desktop-gallery'>
                <div dataLength={imagesData.length}
                  next={fetchData}
                  hasMore={true}
                  loader={<h4></h4>}
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                  refreshFunction={refresh}
                  pullDownToRefresh
                  pullDownToRefreshThreshold={8}
                  pullDownToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
                  }
                  releaseToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
                  }
                >
                  <Masony
                    className={"photo-list"}
                    elementType={"ul"}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                  >
                    {
                      postsToRender .map((photo, index) => (
                        <li className={`photo-item`} key={index}>
                          <img
                            src={photo.acf.image}
                            alt=""
                            onClick={() => {
                              setImageModal({
                                showModal: true,
                                modalSrc: photo.acf.image,
                                imageIndex: index,
                                currentSectionLength: imagesData.length
                              });
                            }}
                          />
                        </li>
                      ))}                      
                  </Masony>  

                </div>
              </div> 


          <div className='mob-gallery'>
          <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className='d-block w-100'
              src={gallery1}
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className='d-block w-100'
              src={gallery2}
              alt="Second slide"
            />       
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={gallery3}
              alt="Third slide"
            />       
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={gallery4}
              alt="Third slide"
            />       
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={gallery5}
              alt="Third slide"
            />       
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={gallery6}
              alt="Third slide"
            />       
          </Carousel.Item>

        </Carousel>
          </div>    
             </div> 
          
          </div>
       </div>
    </section>

      <div
        id='myModal'
        className='modal'
        style={{
          display: imageModal.showModal ? "block" : "none"
        }}
      >
        <div>
          <span
            className="close"
            onClick={() =>
              setImageModal((modal) => ({ ...modal, showModal: false }))
            }
          >
            &times;
          </span>

          <div
            className='mySlides'
            style={{ display: imageModal.showModal ? "block" : "none" }}
          >
            <img
              className='modal-content'
              id="img01"
              src={imageModal.modalSrc}
              alt=""
            />
          </div>

          <a href="#" className="prev" onClick={() => onSet("prev")}>
            &#10094;
          </a>
          <a href="#" className="next" onClick={() => onSet("next")}>
            &#10095;
          </a>

          <div />
        </div>
      </div>
    </>
  );
}
