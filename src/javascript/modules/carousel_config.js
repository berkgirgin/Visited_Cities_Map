import tvGlitch from "../../assets/images/tv_static.gif";

import berlinImage_0 from "../../assets/images/city_images/berlin/berlin_image_0.jpg";
import berlinImage_1 from "../../assets/images/city_images/berlin/berlin_image_1.jpg";
import berlinImage_2 from "../../assets/images/city_images/berlin/berlin_image_2.jpg";
import berlinImage_3 from "../../assets/images/city_images/berlin/berlin_image_3.jpg";
import berlinImage_4 from "../../assets/images/city_images/berlin/berlin_image_4.jpg";
import berlinImage_5 from "../../assets/images/city_images/berlin/berlin_image_5.jpg";

export const citiesWithImages = [
  "berlin",
  "frankfurt",
  "munich",
  "cologne",
  "paris",
  "strasbourg",
  "brussels",
  "vienna",
  "venice",
  "naples",
  "prague",
  "riga",
  "skopje",
  "athens",
  "thessaloniki",
  "shanghai",
];

export function ImageSRC() {
  this.defaultImagesList = [tvGlitch];

  this.berlinImagesList = [
    berlinImage_0,
    berlinImage_1,
    berlinImage_2,
    berlinImage_3,
    berlinImage_4,
    berlinImage_5,
  ];

  for (let i = 1; i < citiesWithImages.length; i++) {
    let city = citiesWithImages[i];
    const cityListName = `${city}ImagesList`;
    this[cityListName] = [];
    for (let i = 0; i < 4; i++) {
      const imageName = `${city}_image_${i}`;
      const image = require(`../../assets/images/city_images/${city}/${imageName}.jpg`);

      this[cityListName].push(image);
    }
  }
}
