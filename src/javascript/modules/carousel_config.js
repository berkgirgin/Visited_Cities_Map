import tvGlitch from "../../assets/images/tv_static.gif";

import berlinImage_0 from "../../assets/images/city_images/germany/berlin/berlin_image_0.jpg";
import berlinImage_1 from "../../assets/images/city_images/germany/berlin/berlin_image_1.jpg";
import berlinImage_2 from "../../assets/images/city_images/germany/berlin/berlin_image_2.jpg";
import berlinImage_3 from "../../assets/images/city_images/germany/berlin/berlin_image_2.jpg";

import frankfurtImage_0 from "../../assets/images/city_images/germany/frankfurt/frankfurt_image_0.jpg";
import frankfurtImage_1 from "../../assets/images/city_images/germany/frankfurt/frankfurt_image_1.jpg";
import frankfurtImage_2 from "../../assets/images/city_images/germany/frankfurt/frankfurt_image_2.jpg";
import frankfurtImage_3 from "../../assets/images/city_images/germany/frankfurt/frankfurt_image_3.jpg";

export function ImageSRC() {
  this.defaultImagesList = [tvGlitch];

  this.berlinImagesList = [
    berlinImage_0,
    berlinImage_1,
    berlinImage_2,
    berlinImage_3,
  ];

  this.frankfurtImagesList = [
    frankfurtImage_0,
    frankfurtImage_1,
    frankfurtImage_2,
    frankfurtImage_3,
  ];
}
