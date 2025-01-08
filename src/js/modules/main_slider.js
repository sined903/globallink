import Swiper from "swiper";
import { Pagination } from "swiper/modules";
const mainSlider = () => {
  new Swiper(".slider", {
    modules: [Pagination],
    pagination: {
      el: ".slider__dots",
      type: "bullets",
    },
  });
};

export { mainSlider };
