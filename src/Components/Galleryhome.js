import React, { useEffect, useState } from "react";
import './Galleryhome.css';
import Masony from "react-masonry-component";
import Carousel from 'react-bootstrap/Carousel';
import { initial, slice } from 'lodash'

// Masory Options
const masonryOptions = {
  fitWidth: false,
  columnWidth:350,
  gutter:10,
  itemSelector: ".photo-item"
};

export default function App() {
  const [imagesData, setImagesData] = React.useState([]);
  const [isFinished, setIsFinished] = useState(false)
  const [index, setIndex] = useState(6)
  const initialUsers = slice(imagesData, 0, index)

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

  const showMore = () => {
    setIndex(index+2)
    //console.log(index)
    if (index >= imagesData.length) {
      setIsFinished(true)
    } else {
      setIsFinished(false)
    }
  }

  const fetchData = () => {
    setPage(getData.acf);
    //console.log();
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
const [glyttl, setGlyttl] = useState([]);
  
useEffect(() => {
                async function gallerycon(){
               const gallerycondata = await fetch('https://controlf5.co.in/client-demo/sanctorum-wordpress/wp-json/wp/v2/pages/33');
               const gallerycondatas = await gallerycondata.json();
               setGlyttl(gallerycondatas.acf);
           }
           gallerycon();
        
},[])


  return (
    <>
    <section id='gallery'>
      <div className='container'>
      <h4> {glyttl.gallery_title}</h4>
        <h3>{glyttl.gallery_subtitle}</h3>
          <div className='galley-main'>
            <div className='conatiner'>            
              <div className='desktop-gallery'>
                <div datalength={imagesData.length}
                  hasmore="true"
                  loader={<h4></h4>}
                  endmessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                  pulldowntorefresh="true"
                  pulldowntorefreshthreshold={6}
                  pulldowntorefreshcontent={
                    <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
                  }
                  releasetorefreshcontent={
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
                    {imagesData &&
                      initialUsers.map((photo, index) => (
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
              {

              isFinished ? (
                <button
                  onClick={showMore}
                  type="button"
                  className="btn btn-info disabled"
                >
                  Nothing left ...
                </button>
              ) : (
                <button onClick={showMore} type="button" className="btn btn-dark showbtn">
                  Load more
                </button>
              )}

                

              </div> 

               <div className='mob-gallery'>
               <Carousel>
          {imagesData &&
                      imagesData.map((photo, index) => (
          <Carousel.Item interval={1000} key={index}>
            <img
              className='d-block w-100'
              src={photo.acf.image}
              alt="First slide"
            />
            
          </Carousel.Item>
          ))}

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