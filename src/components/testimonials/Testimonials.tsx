import "./testimonials.css"
import Silhouette from "../../assets/Wako.png";
import { InfoContext } from "../../context/InfoContext"
import { useContext } from "react";

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonials() {
  const { opinions }:any = useContext(InfoContext)
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        { 
          opinions.map((x: any, index:any) =>
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={Silhouette} alt="" />
              </div>  
              <h5 className="client__name">{x.Name}</h5>
              <small className="client__review"> {x.Review} </small>
            </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
}
export default Testimonials;
