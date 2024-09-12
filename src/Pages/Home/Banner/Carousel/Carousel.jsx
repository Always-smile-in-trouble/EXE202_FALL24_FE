import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={30}
          autoplay={{ delay: 2300, disableOnInteraction: false }}
          speed={800}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[Autoplay, EffectCoverflow]}
        >
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://vcdn1-thethao.vnecdn.net/2023/03/16/tie-n-minh-jpeg-1651069222-165-3139-5498-1678930436.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=S-PiIrdACZqlZrHzACulEQ"
              alt="football"
              className="relative"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://badmintonw.com/uploads/images/doi-net-tieu-su-lin-dan-cau-long-tay-vot-huyen-thoai-trung-quoc1.png"
              alt="cricket"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://newsmd2fr.keeng.vn/tiin/archive/imageslead/2023/11/11/e7qi9xfmmrxvib50216nel8qckz2amew.jpg"
              alt="tennis"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://i.ibb.co/jrsFT7h/badminton.jpg"
              alt="badminton"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://duyendangvietnam.net.vn/public/uploads/file1s/caulong5-1696927464-297-width740height924.jpg"
              alt="rugby"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://badmintonw.com/wp-content/uploads/2018/11/danh-cau-long-giup-tang-chieu-cao-va-giam-can.jpg"
              alt="baseball"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://thanhnien.mediacdn.vn/Uploaded/2014/thethao.thanhnien.com.vn/Pictures20137/T_Lam/Arsenal/Thai1.jpg"
              alt="basketball"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://cdn.shopvnb.com/uploads/images/tin_tuc/top-5-tay-vot-nu-hay-nhat-the-gioi-bang-xep-hang-cau-long-don-nu-the-gioi-3.webp"
              alt="swimming"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://file3.qdnd.vn/data/images/0/2024/04/17/upload_2161/thuy-linh.jpg"
              alt="volleyball"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
