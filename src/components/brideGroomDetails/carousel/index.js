import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "./carousel.css";
import "swiper/css";
import "swiper/css/effect-cards";
import data from "../../../ssr.json";

const Carousel = ({ cardsData }) => {
  const { image } = data["brideDetails"];

  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        data-section
        id="couple"
      >
        {cardsData?.map((card) => (
          <SwiperSlide key={card.id}>
            <img
              src={
                card?.imgUrl &&
                require(`../../../assets/images/${card?.imgUrl}`)
              }
              alt="img"
              style={{
                pointerEvents: "none",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
