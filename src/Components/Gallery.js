import React from 'react'
import './Gallery.css'
import Masonry from "react-responsive-masonry"
import gallerimg1 from "./Photos/Gallery1.jpg"
import gallerimg2 from "./Photos/Gallery2.jpg"
import gallerimg3 from "./Photos/Gallery3.jpg"
import gallerimg4 from "./Photos/Gallery4.jpg"
import gallerimg5 from "./Photos/Gallery5.jpg"
import gallerimg6 from "./Photos/Gallery6.jpg"


const Gallery = () => {
  const images = [
    gallerimg1,
    gallerimg2 ,
    gallerimg3 ,
    gallerimg4 ,
    gallerimg5 ,
    gallerimg6 ,
]

  return (
    <div>
        <section id='gallery'> 
        <div className='container'>
         <h4> gallery  </h4>
         <h3>Recent Site Photos </h3>
          <div className='galley-main'>
           <div className='conatiner'> 
           <Masonry columnsCount={3} gutter="10px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />
                ))}
            </Masonry>      
          </div>
         </div>
        </div>
        </section>
    </div>
  )
}

export default Gallery;