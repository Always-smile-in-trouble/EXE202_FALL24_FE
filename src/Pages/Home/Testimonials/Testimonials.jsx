import React, { useEffect, useState } from "react";
import Container from "../../../Components/Container/Container";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";
import TestimonialCard from "./TestimonialCard";
import "./Testimoni.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="dark:bg-gray-700  pb-10 lg:pb-20">
      <SectionHeader heading={"Feedbacks of Users"}></SectionHeader>
      <Container>
        <Swiper
          autoplay={{ delay: 2300, disableOnInteraction: false }}
          speed={800}
          grabCursor={true}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <FadeInAnimation key={testimonial.id} custom={index}>
              <SwiperSlide id="testimonials">
                <TestimonialCard testimonial={testimonial}></TestimonialCard>
              </SwiperSlide>
            </FadeInAnimation>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonials;
