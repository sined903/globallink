import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
const mainSlider = () => {
  new Swiper(".slider", {
    modules: [Pagination],
    pagination: {
      el: ".slider__dots",
      type: "bullets",
    },
  });
};

const brendSlider = () => {
  new Swiper(".brends__slider", {
    modules: [Navigation],
    navigation: {
      nextEl: '.brends__slide-btn_next',
      prevEl: '.brends__slide-btn_prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      577: {
        slidesPerView: 4,
      }
    }
  });
};


export { mainSlider, brendSlider };
