import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "./carousel.css";
import "swiper/css";
import "swiper/css/effect-cards";
import data from "../../../ssr.json";
import image1 from "../../../assets/images/1.jpg";

const Carousel = () => {
  console.log(data);
  const { image } = data["brideDetails"];
  console.log(image);
  let k = `../../../assets/images/${image}`;
  console.log(k, "hello");
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src={require(`../../../assets/images/${image}`)}
          alt="img"
          style={{
            height: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require(`../../../assets/images/${image}`)}
          alt="img"
          style={{
            height: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require(`../../../assets/images/${image}`)}
          alt="img"
          style={{
            height: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
