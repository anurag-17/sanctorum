
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import { Pagination } from "swiper";

import { useEffect, useState } from "react";
import "./swiper.css";


export default function Slider() {

  const [buidingpost, setBuidingpost] = useState([]);
  useEffect(() => {

      async function buidingpostsdata(){

          const buidingpostsdatas = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/building_amenities/');

          const buidposts = await buidingpostsdatas.json(); 
          setBuidingpost(buidposts);
          //console.log(buidposts);

      }
      buidingpostsdata();
     

  },[])





  return (


          <section id="building"> 
           <div className='container'>
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  "1024": {
                    slidesPerView:4,
                    spaceBetween: 20,
                  },
                  "768": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  "640": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  "568": {
                    slidesPerView:2,
                    spaceBetween: 10,
                  },
                  "200": {
                    slidesPerView:1,
                    spaceBetween:0,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper">

                  {buidingpost.map((post, index) => ( 
                        <SwiperSlide key={index}> 
                          <div className='slide-contents'>
                           <img src={post.acf.feature_images}/>
                           <h4>{post.title.rendered}</h4>
                          </div>
                        </SwiperSlide> 
                   ))}
              </Swiper>
            </div>
          </section> 

  );
}