(self["webpackChunkvisited_cities_map"] = self["webpackChunkvisited_cities_map"] || []).push([["sidebar"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/skyfont/Skyfont-NonCommercial.otf */ "./src/assets/fonts/skyfont/Skyfont-NonCommercial.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Travel/Travel.otf */ "./src/assets/fonts/Travel/Travel.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/travel_journal/travel_journal.ttf */ "./src/assets/fonts/travel_journal/travel_journal.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes translateX {\n  0% {\n    opacity: 0;\n    transform: translateX(60px);\n  }\n\n  80% {\n    transform: translateX(-5px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes growDown {\n  0% {\n    opacity: 0;\n    transform: scaleX(0);\n  }\n  70% {\n    transform: scaleX(1.1);\n  }\n  100% {\n    opacity: 1;\n    transform: scaleX(1);\n  }\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(8px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-16px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(16px, 0, 0);\n  }\n}\n\n@keyframes slide1 {\n  0%,\n  100% {\n    transform: translate(0, 0);\n  }\n\n  50% {\n    transform: translate(0, 10px);\n  }\n}\n\n@font-face {\n  font-family: \"Skyfont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Travel\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"TravelJournal\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  font-size: 1.4rem;\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n\n  --font_color_white: #e8e6e3;\n  --main_container_gap: 1rem;\n\n  --hover-color-default: #d6d3d1;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n\n  --sidebar_icon_gap: 0.2rem;\n  --sidebar_item_animation_duration: 2s;\n  --main_containers_padding: 1rem;\n  --flixbus-orange: #ff9a1e;\n  --flixbus-green: #5dbe26;\n  --background-color-sidebar-grey: #232323;\n  --background-color-grey: #1a1a1a;\n  --neutral-black: #121212;\n}\n\nbody {\n  background-color: grey;\n\n  margin: 0;\n  padding: 0;\n  height: 100%;\n\n  background-color: var(--background-color-grey);\n  color: var(--font_color_white);\n}\n\n/* ************** */\n/* Main Container */\n/* ************** */\n\n.main_container {\n  min-height: 100vh;\n\n  display: grid;\n  grid-template-columns: 11rem 5fr;\n  grid-template-rows: 3.5rem auto 1.5rem;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\"\n    \"footer footer\";\n}\n\n.header_main_container {\n  grid-area: header;\n}\n.sidebar_main_container {\n  grid-area: sidebar;\n}\n.content_main_container {\n  grid-area: main;\n}\nfooter {\n  grid-area: footer;\n}\n/* ************** */\n/* ************** */\n/* ************** */\n\n/* ****** */\n/* Header */\n/* ****** */\n\n.header_main_container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--main_containers_padding);\n}\n\n.header_left {\n  flex: 1;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.header_left div {\n  font-family: Skyfont;\n  font-weight: bold;\n  font-size: 2.5rem;\n  margin-left: 1rem;\n}\n\n.header_right button {\n  width: 80px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header_right button img {\n  height: 1.5rem;\n}\n/* ****** */\n/* ****** */\n\n/* ******* */\n/* ******* */\n/* Sidebar > starts here */\n/* ******* */\n/* ******* */\n\n/* ************ */\n/* Sidebar Main */\n\n.sidebar_main_container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: var(--main_containers_padding);\n  background-color: var(--background-color-sidebar-grey);\n  font-family: TravelJournal;\n}\n\nul,\nli {\n  list-style-type: none;\n  margin: 0;\n  padding-left: 0.5rem;\n}\n\n.sidebar_main_container .top_block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.sidebar_main_container .top_block img {\n  height: calc(5rem + 5vh);\n}\n.sidebar_main_container .top_block div {\n  margin-top: -1rem;\n  font-size: 0.9rem;\n}\n\n.sidebar_main_container .top_block div span {\n  animation: slide1 1s ease-in-out infinite;\n  display: inline-block;\n  color: var(--flixbus-green);\n}\n\n/* ************ */\n\n/* ****************** */\n/* Country Categories */\n\n.country_category {\n  font-size: 1.3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_menu_country_category {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  margin-bottom: 0.2rem;\n}\n\n.main_menu_country_category.active {\n  border-bottom: 3px var(--flixbus-orange) solid;\n  border-radius: 8px;\n}\n\n.sub_menu_country_category {\n  display: none;\n  flex-direction: column;\n  gap: var(--sidebar_icon_gap);\n}\n.sub_menu_country_category.active {\n  display: flex;\n}\n\n.sub_menu_country_category > li {\n  opacity: 0;\n}\n\n.sub_menu_country_category.active > li {\n  animation: translateX 1s ease-in-out forwards;\n}\n\n/* ****************** */\n\n/* ********* */\n/* Countries */\n.country {\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_menu_country {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  margin-bottom: 0.1rem;\n}\n\n.sub_menu_country {\n  display: none;\n  flex-direction: column;\n  gap: var(--sidebar_icon_gap);\n}\n.sub_menu_country.active {\n  display: flex;\n}\n\n.sub_menu_country > li {\n  opacity: 0;\n}\n\n.sub_menu_country.active > li {\n  animation: translateX 1s ease-in-out forwards;\n  animation-delay: 2s;\n}\n\n/* ********* */\n\n/* ****** */\n/* Cities */\n\n.city {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  font-size: 1rem;\n}\n\n/* ****** */\n\n/* ****************** */\n/* buttons and arrows */\n\n.arrow {\n  pointer-events: none;\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  transform: rotate(45deg);\n}\n.arrow.active {\n  transform: rotate(-135deg);\n}\n\n.arrow.arrow_skip_left {\n  width: 0.6rem;\n  height: 0.6rem;\n  pointer-events: none;\n  border-width: 0 9px 9px 0;\n  margin-left: 0.3rem;\n  transform: rotate(135deg);\n}\n\n.arrow.arrow_skip_right {\n  width: 0.6rem;\n  height: 0.6rem;\n  pointer-events: none;\n  border-width: 0 9px 9px 0;\n  margin-right: 0.3rem;\n  transform: rotate(-45deg);\n}\n\nbutton {\n  cursor: pointer;\n  border-radius: var(--border_radius);\n  border: none;\n  box-shadow: inset 0 0 0.2rem black;\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n}\nbutton:hover {\n  transform: scale(1.1);\n}\n\nbutton.extend_country_category,\nbutton.extend_country {\n  border: 2px black solid;\n  border-radius: 200px;\n  background-color: var(--flixbus-orange);\n}\n\n.city_button {\n  opacity: 0.4;\n  width: 4rem;\n}\n\n.available_city {\n  opacity: 1;\n  background-color: var(--flixbus-green);\n  font-weight: bold;\n}\n\n/* ****************** */\n\n/* ******* */\n/* ******* */\n/* Sidebar > ends here */\n/* ******* */\n/* ******* */\n\n/* ******* */\n/* ******* */\n/* Content > starts here */\n/* ******* */\n/* ******* */\n\n.content_main_container {\n  padding: 0 15vh;\n  padding-top: 0.2rem;\n  margin-bottom: 2rem;\n}\n\n.carousel {\n  display: flex;\n  flex-direction: column;\n  background-color: #232323;\n  padding: 0.2rem;\n\n  border-radius: 18px;\n  border: 0.2rem solid var(--neutral-black);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.carousel button {\n  height: 3rem;\n  width: 3rem;\n  align-self: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.3rem;\n}\n\n.carousel .city_name {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.6rem;\n  padding-bottom: 0.3rem;\n  font-size: 1.9rem;\n  font-weight: 700;\n  font-family: Skyfont;\n}\n\n.carousel .image_counter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.4rem;\n}\n\n.image_main_container {\n  /* flex: 1; */\n  display: flex;\n}\n\n.image_main_container .image_container {\n  flex: 1;\n  background-color: black;\n  border-radius: 18px;\n  border: 0.7rem solid var(--neutral-black);\n\n  aspect-ratio: 16/9;\n  max-height: 70vh;\n\n  display: flex;\n  overflow: hidden;\n  box-shadow: inset 0 0 1rem var(--flixbus-orange);\n}\n\n.image_main_container .image_container img {\n  height: 100%;\n  width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  /* add box shadow */\n\n  object-fit: cover;\n\n  display: none;\n  opacity: 0;\n}\n\n.image_main_container .image_container img.active_image {\n  display: block;\n  animation: growDown 1500ms ease-in-out forwards;\n}\n.image_main_container .image_container img.static_image {\n  display: block;\n  opacity: 1;\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n}\n\n.image_counter > div {\n  height: 0.5rem;\n  width: 0.5rem;\n  border: 3px solid black;\n  border-radius: 50px;\n  margin: 0.1rem 0.3rem;\n  background-color: var(--font_color_white);\n}\n\n.image_counter > div.active_image {\n  background-color: black;\n}\n/* ******* */\n/* ******* */\n/* Content > ends here */\n/* ******* */\n/* ******* */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  background-color: var(--neutral-black);\n  color: var(--font_color_white);\n  font-size: 0.7rem;\n  /* font-family: sans-serif; */\n\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* z-index: 2; */\n  /* text-shadow: none; */\n  border-top: 1px black solid;\n}\n\nfooter img {\n  height: 1.1rem;\n  scale: 1.2;\n  padding: 0;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n\n/* ****** */\n/* ****** */\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["@keyframes translateX {\n  0% {\n    opacity: 0;\n    transform: translateX(60px);\n  }\n\n  80% {\n    transform: translateX(-5px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes growDown {\n  0% {\n    opacity: 0;\n    transform: scaleX(0);\n  }\n  70% {\n    transform: scaleX(1.1);\n  }\n  100% {\n    opacity: 1;\n    transform: scaleX(1);\n  }\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(8px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-16px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(16px, 0, 0);\n  }\n}\n\n@keyframes slide1 {\n  0%,\n  100% {\n    transform: translate(0, 0);\n  }\n\n  50% {\n    transform: translate(0, 10px);\n  }\n}\n\n@font-face {\n  font-family: \"Skyfont\";\n  src: url(\"../assets/fonts/skyfont/Skyfont-NonCommercial.otf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Travel\";\n  src: url(\"../assets/fonts/Travel/Travel.otf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"TravelJournal\";\n  src: url(\"../assets/fonts/travel_journal/travel_journal.ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  font-size: 1.4rem;\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n\n  --font_color_white: #e8e6e3;\n  --main_container_gap: 1rem;\n\n  --hover-color-default: #d6d3d1;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n\n  --sidebar_icon_gap: 0.2rem;\n  --sidebar_item_animation_duration: 2s;\n  --main_containers_padding: 1rem;\n  --flixbus-orange: #ff9a1e;\n  --flixbus-green: #5dbe26;\n  --background-color-sidebar-grey: #232323;\n  --background-color-grey: #1a1a1a;\n  --neutral-black: #121212;\n}\n\nbody {\n  background-color: grey;\n\n  margin: 0;\n  padding: 0;\n  height: 100%;\n\n  background-color: var(--background-color-grey);\n  color: var(--font_color_white);\n}\n\n/* ************** */\n/* Main Container */\n/* ************** */\n\n.main_container {\n  min-height: 100vh;\n\n  display: grid;\n  grid-template-columns: 11rem 5fr;\n  grid-template-rows: 3.5rem auto 1.5rem;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\"\n    \"footer footer\";\n}\n\n.header_main_container {\n  grid-area: header;\n}\n.sidebar_main_container {\n  grid-area: sidebar;\n}\n.content_main_container {\n  grid-area: main;\n}\nfooter {\n  grid-area: footer;\n}\n/* ************** */\n/* ************** */\n/* ************** */\n\n/* ****** */\n/* Header */\n/* ****** */\n\n.header_main_container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--main_containers_padding);\n}\n\n.header_left {\n  flex: 1;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.header_left div {\n  font-family: Skyfont;\n  font-weight: bold;\n  font-size: 2.5rem;\n  margin-left: 1rem;\n}\n\n.header_right button {\n  width: 80px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header_right button img {\n  height: 1.5rem;\n}\n/* ****** */\n/* ****** */\n\n/* ******* */\n/* ******* */\n/* Sidebar > starts here */\n/* ******* */\n/* ******* */\n\n/* ************ */\n/* Sidebar Main */\n\n.sidebar_main_container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: var(--main_containers_padding);\n  background-color: var(--background-color-sidebar-grey);\n  font-family: TravelJournal;\n}\n\nul,\nli {\n  list-style-type: none;\n  margin: 0;\n  padding-left: 0.5rem;\n}\n\n.sidebar_main_container .top_block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.sidebar_main_container .top_block img {\n  height: calc(5rem + 5vh);\n}\n.sidebar_main_container .top_block div {\n  margin-top: -1rem;\n  font-size: 0.9rem;\n}\n\n.sidebar_main_container .top_block div span {\n  animation: slide1 1s ease-in-out infinite;\n  display: inline-block;\n  color: var(--flixbus-green);\n}\n\n/* ************ */\n\n/* ****************** */\n/* Country Categories */\n\n.country_category {\n  font-size: 1.3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_menu_country_category {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  margin-bottom: 0.2rem;\n}\n\n.main_menu_country_category.active {\n  border-bottom: 3px var(--flixbus-orange) solid;\n  border-radius: 8px;\n}\n\n.sub_menu_country_category {\n  display: none;\n  flex-direction: column;\n  gap: var(--sidebar_icon_gap);\n}\n.sub_menu_country_category.active {\n  display: flex;\n}\n\n.sub_menu_country_category > li {\n  opacity: 0;\n}\n\n.sub_menu_country_category.active > li {\n  animation: translateX 1s ease-in-out forwards;\n}\n\n/* ****************** */\n\n/* ********* */\n/* Countries */\n.country {\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_menu_country {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  margin-bottom: 0.1rem;\n}\n\n.sub_menu_country {\n  display: none;\n  flex-direction: column;\n  gap: var(--sidebar_icon_gap);\n}\n.sub_menu_country.active {\n  display: flex;\n}\n\n.sub_menu_country > li {\n  opacity: 0;\n}\n\n.sub_menu_country.active > li {\n  animation: translateX 1s ease-in-out forwards;\n  animation-delay: 2s;\n}\n\n/* ********* */\n\n/* ****** */\n/* Cities */\n\n.city {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  font-size: 1rem;\n}\n\n/* ****** */\n\n/* ****************** */\n/* buttons and arrows */\n\n.arrow {\n  pointer-events: none;\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  transform: rotate(45deg);\n}\n.arrow.active {\n  transform: rotate(-135deg);\n}\n\n.arrow.arrow_skip_left {\n  width: 0.6rem;\n  height: 0.6rem;\n  pointer-events: none;\n  border-width: 0 9px 9px 0;\n  margin-left: 0.3rem;\n  transform: rotate(135deg);\n}\n\n.arrow.arrow_skip_right {\n  width: 0.6rem;\n  height: 0.6rem;\n  pointer-events: none;\n  border-width: 0 9px 9px 0;\n  margin-right: 0.3rem;\n  transform: rotate(-45deg);\n}\n\nbutton {\n  cursor: pointer;\n  border-radius: var(--border_radius);\n  border: none;\n  box-shadow: inset 0 0 0.2rem black;\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n}\nbutton:hover {\n  transform: scale(1.1);\n}\n\nbutton.extend_country_category,\nbutton.extend_country {\n  border: 2px black solid;\n  border-radius: 200px;\n  background-color: var(--flixbus-orange);\n}\n\n.city_button {\n  opacity: 0.4;\n  width: 4rem;\n}\n\n.available_city {\n  opacity: 1;\n  background-color: var(--flixbus-green);\n  font-weight: bold;\n}\n\n/* ****************** */\n\n/* ******* */\n/* ******* */\n/* Sidebar > ends here */\n/* ******* */\n/* ******* */\n\n/* ******* */\n/* ******* */\n/* Content > starts here */\n/* ******* */\n/* ******* */\n\n.content_main_container {\n  padding: 0 15vh;\n  padding-top: 0.2rem;\n  margin-bottom: 2rem;\n}\n\n.carousel {\n  display: flex;\n  flex-direction: column;\n  background-color: #232323;\n  padding: 0.2rem;\n\n  border-radius: 18px;\n  border: 0.2rem solid var(--neutral-black);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.carousel button {\n  height: 3rem;\n  width: 3rem;\n  align-self: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.3rem;\n}\n\n.carousel .city_name {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.6rem;\n  padding-bottom: 0.3rem;\n  font-size: 1.9rem;\n  font-weight: 700;\n  font-family: Skyfont;\n}\n\n.carousel .image_counter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.4rem;\n}\n\n.image_main_container {\n  /* flex: 1; */\n  display: flex;\n}\n\n.image_main_container .image_container {\n  flex: 1;\n  background-color: black;\n  border-radius: 18px;\n  border: 0.7rem solid var(--neutral-black);\n\n  aspect-ratio: 16/9;\n  max-height: 70vh;\n\n  display: flex;\n  overflow: hidden;\n  box-shadow: inset 0 0 1rem var(--flixbus-orange);\n}\n\n.image_main_container .image_container img {\n  height: 100%;\n  width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  /* add box shadow */\n\n  object-fit: cover;\n\n  display: none;\n  opacity: 0;\n}\n\n.image_main_container .image_container img.active_image {\n  display: block;\n  animation: growDown 1500ms ease-in-out forwards;\n}\n.image_main_container .image_container img.static_image {\n  display: block;\n  opacity: 1;\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n}\n\n.image_counter > div {\n  height: 0.5rem;\n  width: 0.5rem;\n  border: 3px solid black;\n  border-radius: 50px;\n  margin: 0.1rem 0.3rem;\n  background-color: var(--font_color_white);\n}\n\n.image_counter > div.active_image {\n  background-color: black;\n}\n/* ******* */\n/* ******* */\n/* Content > ends here */\n/* ******* */\n/* ******* */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  background-color: var(--neutral-black);\n  color: var(--font_color_white);\n  font-size: 0.7rem;\n  /* font-family: sans-serif; */\n\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* z-index: 2; */\n  /* text-shadow: none; */\n  border-top: 1px black solid;\n}\n\nfooter img {\n  height: 1.1rem;\n  scale: 1.2;\n  padding: 0;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n\n/* ****** */\n/* ****** */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/city_images sync recursive ^\\.\\/.*\\/.*\\.jpg$":
/*!***************************************************************!*\
  !*** ./src/assets/images/city_images/ sync ^\.\/.*\/.*\.jpg$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./athens/athens_image_0.jpg": "./src/assets/images/city_images/athens/athens_image_0.jpg",
	"./athens/athens_image_1.jpg": "./src/assets/images/city_images/athens/athens_image_1.jpg",
	"./athens/athens_image_2.jpg": "./src/assets/images/city_images/athens/athens_image_2.jpg",
	"./athens/athens_image_3.jpg": "./src/assets/images/city_images/athens/athens_image_3.jpg",
	"./berlin/berlin_image_0.jpg": "./src/assets/images/city_images/berlin/berlin_image_0.jpg",
	"./berlin/berlin_image_1.jpg": "./src/assets/images/city_images/berlin/berlin_image_1.jpg",
	"./berlin/berlin_image_2.jpg": "./src/assets/images/city_images/berlin/berlin_image_2.jpg",
	"./berlin/berlin_image_3.jpg": "./src/assets/images/city_images/berlin/berlin_image_3.jpg",
	"./berlin/berlin_image_4.jpg": "./src/assets/images/city_images/berlin/berlin_image_4.jpg",
	"./berlin/berlin_image_5.jpg": "./src/assets/images/city_images/berlin/berlin_image_5.jpg",
	"./brussels/brussels_image_0.jpg": "./src/assets/images/city_images/brussels/brussels_image_0.jpg",
	"./brussels/brussels_image_1.jpg": "./src/assets/images/city_images/brussels/brussels_image_1.jpg",
	"./brussels/brussels_image_2.jpg": "./src/assets/images/city_images/brussels/brussels_image_2.jpg",
	"./brussels/brussels_image_3.jpg": "./src/assets/images/city_images/brussels/brussels_image_3.jpg",
	"./cologne/cologne_image_0.jpg": "./src/assets/images/city_images/cologne/cologne_image_0.jpg",
	"./cologne/cologne_image_1.jpg": "./src/assets/images/city_images/cologne/cologne_image_1.jpg",
	"./cologne/cologne_image_2.jpg": "./src/assets/images/city_images/cologne/cologne_image_2.jpg",
	"./cologne/cologne_image_3.jpg": "./src/assets/images/city_images/cologne/cologne_image_3.jpg",
	"./frankfurt/frankfurt_image_0.jpg": "./src/assets/images/city_images/frankfurt/frankfurt_image_0.jpg",
	"./frankfurt/frankfurt_image_1.jpg": "./src/assets/images/city_images/frankfurt/frankfurt_image_1.jpg",
	"./frankfurt/frankfurt_image_2.jpg": "./src/assets/images/city_images/frankfurt/frankfurt_image_2.jpg",
	"./frankfurt/frankfurt_image_3.jpg": "./src/assets/images/city_images/frankfurt/frankfurt_image_3.jpg",
	"./munich/munich_image_0.jpg": "./src/assets/images/city_images/munich/munich_image_0.jpg",
	"./munich/munich_image_1.jpg": "./src/assets/images/city_images/munich/munich_image_1.jpg",
	"./munich/munich_image_2.jpg": "./src/assets/images/city_images/munich/munich_image_2.jpg",
	"./munich/munich_image_3.jpg": "./src/assets/images/city_images/munich/munich_image_3.jpg",
	"./naples/naples_image_0.jpg": "./src/assets/images/city_images/naples/naples_image_0.jpg",
	"./naples/naples_image_1.jpg": "./src/assets/images/city_images/naples/naples_image_1.jpg",
	"./naples/naples_image_2.jpg": "./src/assets/images/city_images/naples/naples_image_2.jpg",
	"./naples/naples_image_3.jpg": "./src/assets/images/city_images/naples/naples_image_3.jpg",
	"./paris/paris_image_0.jpg": "./src/assets/images/city_images/paris/paris_image_0.jpg",
	"./paris/paris_image_1.jpg": "./src/assets/images/city_images/paris/paris_image_1.jpg",
	"./paris/paris_image_2.jpg": "./src/assets/images/city_images/paris/paris_image_2.jpg",
	"./paris/paris_image_3.jpg": "./src/assets/images/city_images/paris/paris_image_3.jpg",
	"./paris/paris_image_4.jpg": "./src/assets/images/city_images/paris/paris_image_4.jpg",
	"./prague/prague_image_0.jpg": "./src/assets/images/city_images/prague/prague_image_0.jpg",
	"./prague/prague_image_1.jpg": "./src/assets/images/city_images/prague/prague_image_1.jpg",
	"./prague/prague_image_2.jpg": "./src/assets/images/city_images/prague/prague_image_2.jpg",
	"./prague/prague_image_3.jpg": "./src/assets/images/city_images/prague/prague_image_3.jpg",
	"./riga/riga_image_0.jpg": "./src/assets/images/city_images/riga/riga_image_0.jpg",
	"./riga/riga_image_1.jpg": "./src/assets/images/city_images/riga/riga_image_1.jpg",
	"./riga/riga_image_2.jpg": "./src/assets/images/city_images/riga/riga_image_2.jpg",
	"./riga/riga_image_3.jpg": "./src/assets/images/city_images/riga/riga_image_3.jpg",
	"./shanghai/shanghai_image_0.jpg": "./src/assets/images/city_images/shanghai/shanghai_image_0.jpg",
	"./shanghai/shanghai_image_1.jpg": "./src/assets/images/city_images/shanghai/shanghai_image_1.jpg",
	"./shanghai/shanghai_image_2.jpg": "./src/assets/images/city_images/shanghai/shanghai_image_2.jpg",
	"./shanghai/shanghai_image_3.jpg": "./src/assets/images/city_images/shanghai/shanghai_image_3.jpg",
	"./skopje/skopje_image_0.jpg": "./src/assets/images/city_images/skopje/skopje_image_0.jpg",
	"./skopje/skopje_image_1.jpg": "./src/assets/images/city_images/skopje/skopje_image_1.jpg",
	"./skopje/skopje_image_2.jpg": "./src/assets/images/city_images/skopje/skopje_image_2.jpg",
	"./skopje/skopje_image_3.jpg": "./src/assets/images/city_images/skopje/skopje_image_3.jpg",
	"./strasbourg/strasbourg_image_0.jpg": "./src/assets/images/city_images/strasbourg/strasbourg_image_0.jpg",
	"./strasbourg/strasbourg_image_1.jpg": "./src/assets/images/city_images/strasbourg/strasbourg_image_1.jpg",
	"./strasbourg/strasbourg_image_2.jpg": "./src/assets/images/city_images/strasbourg/strasbourg_image_2.jpg",
	"./strasbourg/strasbourg_image_3.jpg": "./src/assets/images/city_images/strasbourg/strasbourg_image_3.jpg",
	"./thessaloniki/thessaloniki_image_0.jpg": "./src/assets/images/city_images/thessaloniki/thessaloniki_image_0.jpg",
	"./thessaloniki/thessaloniki_image_1.jpg": "./src/assets/images/city_images/thessaloniki/thessaloniki_image_1.jpg",
	"./thessaloniki/thessaloniki_image_2.jpg": "./src/assets/images/city_images/thessaloniki/thessaloniki_image_2.jpg",
	"./thessaloniki/thessaloniki_image_3.jpg": "./src/assets/images/city_images/thessaloniki/thessaloniki_image_3.jpg",
	"./venice/venice_image_0.jpg": "./src/assets/images/city_images/venice/venice_image_0.jpg",
	"./venice/venice_image_1.jpg": "./src/assets/images/city_images/venice/venice_image_1.jpg",
	"./venice/venice_image_2.jpg": "./src/assets/images/city_images/venice/venice_image_2.jpg",
	"./venice/venice_image_3.jpg": "./src/assets/images/city_images/venice/venice_image_3.jpg",
	"./vienna/vienna_image_0.jpg": "./src/assets/images/city_images/vienna/vienna_image_0.jpg",
	"./vienna/vienna_image_1.jpg": "./src/assets/images/city_images/vienna/vienna_image_1.jpg",
	"./vienna/vienna_image_2.jpg": "./src/assets/images/city_images/vienna/vienna_image_2.jpg",
	"./vienna/vienna_image_3.jpg": "./src/assets/images/city_images/vienna/vienna_image_3.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/city_images sync recursive ^\\.\\/.*\\/.*\\.jpg$";

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCityImages": () => (/* binding */ createCityImages)
/* harmony export */ });
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _javascript_modules_sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../javascript/modules/sidebar.js */ "./src/javascript/modules/sidebar.js");
/* harmony import */ var _javascript_modules_carousel_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../javascript/modules/carousel_config.js */ "./src/javascript/modules/carousel_config.js");





const sidebarDOM = (0,_javascript_modules_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.SidebarDOM)();
sidebarDOM.createSidebarDOM();

const getImageSRC = new _javascript_modules_carousel_config_js__WEBPACK_IMPORTED_MODULE_2__.ImageSRC();

const carousel = document.querySelector(".carousel");
const cityName = document.querySelector(".city_name");
const imageMainContainer = document.querySelector(".image_main_container");
const skipLeftButton = document.querySelector("button.skip_left");
const skipRightButton = document.querySelector("button.skip_right");
skipRightButton.addEventListener("click", () => {
  slideImage("right");
});
skipLeftButton.addEventListener("click", () => {
  slideImage("left");
});

const imageContainer = document.querySelector(".image_container");
const imageCounter = document.querySelector(".image_counter");

// ***********************
// ***********************
// ***********************

let imageIndex = 0;

function slideImage(right_or_left) {
  if (right_or_left === "left") {
    imageIndex--;
  } else if (right_or_left === "right") {
    imageIndex++;
  }

  let allImageCircles = imageCounter.querySelectorAll("div");
  let allImages = imageContainer.querySelectorAll("img");
  if (imageIndex >= allImages.length) {
    imageIndex = 0;
  } else if (imageIndex === -1) {
    imageIndex = allImages.length - 1;
  }

  allImages.forEach((image) => {
    if (image.dataset.imageIndex === imageIndex.toString()) {
      image.classList.add("active_image");
    } else {
      image.classList.remove("active_image");
    }
  });

  allImageCircles.forEach((imageCircle) => {
    if (imageCircle.dataset.imageIndex === imageIndex.toString()) {
      imageCircle.classList.add("active_image");
    } else {
      imageCircle.classList.remove("active_image");
    }
  });
}

// ***********************
// ***********************
// ***********************

// *****************
// adding auto slide
let autoSlideInterval = setInterval(autoSlide, 8000);

function autoSlide() {
  slideImage("right");
}
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}
function startAutoSlide() {
  autoSlideInterval = setInterval(autoSlide, 8000);
}

carousel.addEventListener("mouseover", () => {
  stopAutoSlide();
});
carousel.addEventListener("mouseleave", () => {
  startAutoSlide();
});

// *****************

// ***************************************
// adding images to HTML from city buttons
// ***************************************

let berlinImagesList = getImageSRC.berlinImagesList;
let defaultImagesList = getImageSRC.defaultImagesList;

function createCityImages(images_list) {
  imageContainer.innerHTML = "";
  imageCounter.innerHTML = "";

  for (let i = 0; i < images_list.length; i++) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", images_list[i]);
    newImage.setAttribute("alt", "berlin");
    newImage.setAttribute("data-image-index", i);
    newImage.classList.add("image");
    if (i === 0) {
      newImage.classList.add("active_image");
    }
    imageContainer.appendChild(newImage);

    const newImageCounterCircle = document.createElement("div");
    newImageCounterCircle.setAttribute("data-image-index", i);

    if (images_list.length <= 1) {
      newImageCounterCircle.setAttribute("style", "opacity: 0;");
      let selectedImage = document.querySelector(
        ".image_main_container .image_container img"
      );
      selectedImage.classList.add("static_image");

      // selectedImage.setAttribute("style", "animation: none; opacity: 1;");
    }
    if (i === 0 && images_list.length > 1) {
      newImageCounterCircle.classList.add("active_image");
    }
    imageCounter.appendChild(newImageCounterCircle);
  }
}

createCityImages(defaultImagesList);
cityName.innerHTML = "&#8656; Check the cities!! &#8656;";
// ***************************************
// ***************************************

function addAudioConfig() {
  const audio = document.querySelector("audio");
  const audioIconOn = document.querySelector("button.audio_button .icon_on");
  const audioIconOff = document.querySelector("button.audio_button .icon_off");
  audioIconOn.style.display = "none";
  const audioButton = document.querySelector("button.audio_button");

  function togglePlay() {
    if (audio.paused) {
      audioIconOn.style.display = "block";
      audioIconOff.style.display = "none";
      audio.play();
    } else {
      audioIconOn.style.display = "none";
      audioIconOff.style.display = "block";
      audio.pause();
    }
  }

  audioButton.addEventListener("click", () => {
    togglePlay();
  });
}

addAudioConfig();


/***/ }),

/***/ "./src/javascript/modules/carousel_config.js":
/*!***************************************************!*\
  !*** ./src/javascript/modules/carousel_config.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSRC": () => (/* binding */ ImageSRC),
/* harmony export */   "citiesWithImages": () => (/* binding */ citiesWithImages)
/* harmony export */ });
/* harmony import */ var _assets_images_tv_static_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/tv_static.gif */ "./src/assets/images/tv_static.gif");
/* harmony import */ var _assets_images_city_images_berlin_berlin_image_0_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/city_images/berlin/berlin_image_0.jpg */ "./src/assets/images/city_images/berlin/berlin_image_0.jpg");
/* harmony import */ var _assets_images_city_images_berlin_berlin_image_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/city_images/berlin/berlin_image_1.jpg */ "./src/assets/images/city_images/berlin/berlin_image_1.jpg");
/* harmony import */ var _assets_images_city_images_berlin_berlin_image_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/city_images/berlin/berlin_image_2.jpg */ "./src/assets/images/city_images/berlin/berlin_image_2.jpg");
/* harmony import */ var _assets_images_city_images_berlin_berlin_image_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/city_images/berlin/berlin_image_3.jpg */ "./src/assets/images/city_images/berlin/berlin_image_3.jpg");
/* harmony import */ var _assets_images_city_images_berlin_berlin_image_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/city_images/berlin/berlin_image_4.jpg */ "./src/assets/images/city_images/berlin/berlin_image_4.jpg");
/* harmony import */ var _assets_images_city_images_berlin_berlin_image_5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/city_images/berlin/berlin_image_5.jpg */ "./src/assets/images/city_images/berlin/berlin_image_5.jpg");









const citiesWithImages = [
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

function ImageSRC() {
  this.defaultImagesList = [_assets_images_tv_static_gif__WEBPACK_IMPORTED_MODULE_0__];

  this.berlinImagesList = [
    _assets_images_city_images_berlin_berlin_image_0_jpg__WEBPACK_IMPORTED_MODULE_1__,
    _assets_images_city_images_berlin_berlin_image_1_jpg__WEBPACK_IMPORTED_MODULE_2__,
    _assets_images_city_images_berlin_berlin_image_2_jpg__WEBPACK_IMPORTED_MODULE_3__,
    _assets_images_city_images_berlin_berlin_image_3_jpg__WEBPACK_IMPORTED_MODULE_4__,
    _assets_images_city_images_berlin_berlin_image_4_jpg__WEBPACK_IMPORTED_MODULE_5__,
    _assets_images_city_images_berlin_berlin_image_5_jpg__WEBPACK_IMPORTED_MODULE_6__,
  ];

  for (let i = 1; i < citiesWithImages.length; i++) {
    let city = citiesWithImages[i];
    const cityListName = `${city}ImagesList`;
    this[cityListName] = [];
    for (let i = 0; i < 4; i++) {
      const imageName = `${city}_image_${i}`;
      const image = __webpack_require__("./src/assets/images/city_images sync recursive ^\\.\\/.*\\/.*\\.jpg$")(`./${city}/${imageName}.jpg`);

      this[cityListName].push(image);
    }
  }
}


/***/ }),

/***/ "./src/javascript/modules/sidebar.js":
/*!*******************************************!*\
  !*** ./src/javascript/modules/sidebar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDOM": () => (/* binding */ SidebarDOM)
/* harmony export */ });
/* harmony import */ var _sidebar_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar_config.js */ "./src/javascript/modules/sidebar_config.js");
/* harmony import */ var _carousel_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel_config.js */ "./src/javascript/modules/carousel_config.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./src/javascript/index.js");





const getImageSRC = new _carousel_config_js__WEBPACK_IMPORTED_MODULE_1__.ImageSRC();

function SidebarDOM() {
  const sidebarMainContainer = document.querySelector(
    ".sidebar_main_container"
  );

  function createSidebarDOM() {
    function createCountryCategory(countryCategoryName, countriesArray) {
      const newCountryCategory = document.createElement("li");
      newCountryCategory.classList.add("country_category");
      sidebarMainContainer.appendChild(newCountryCategory);

      // ******
      const newmainMenuCountryCategory = document.createElement("div");
      newmainMenuCountryCategory.classList.add("main_menu_country_category");
      newCountryCategory.appendChild(newmainMenuCountryCategory);

      const newCountryCategoryName = document.createElement("div");
      newCountryCategoryName.classList.add("country_category_name");
      newCountryCategoryName.innerHTML = countryCategoryName;
      newmainMenuCountryCategory.appendChild(newCountryCategoryName);

      const newButtonExtendCountryCategory = document.createElement("button");
      newButtonExtendCountryCategory.classList.add("extend_country_category");
      newmainMenuCountryCategory.appendChild(newButtonExtendCountryCategory);

      const newArrow = document.createElement("i");
      newArrow.classList.add("arrow");
      newButtonExtendCountryCategory.appendChild(newArrow);

      // ******
      const newSubMenuCountryCategory = document.createElement("ul");
      newSubMenuCountryCategory.classList.add("sub_menu_country_category");
      newCountryCategory.appendChild(newSubMenuCountryCategory);

      for (let i = 0; i < countriesArray.length; i++) {
        const newCountry = document.createElement("li");
        newCountry.classList.add("country");
        newCountry.classList.add(countriesArray[i].countryName);
        newCountry.setAttribute("style", `animation-delay: ${i * 80}ms;`);
        newSubMenuCountryCategory.appendChild(newCountry);

        // ***
        const newMainMenuCountry = document.createElement("div");
        newMainMenuCountry.classList.add("main_menu_country");
        newCountry.appendChild(newMainMenuCountry);

        const newCountryName = document.createElement("div");
        newCountryName.classList.add("country_name");
        newCountryName.innerHTML = countriesArray[i].countryName;
        newMainMenuCountry.appendChild(newCountryName);

        const newButtonExtendCountry = document.createElement("button");
        newButtonExtendCountry.classList.add("extend_country");
        newMainMenuCountry.appendChild(newButtonExtendCountry);

        const newArrow = document.createElement("i");
        newArrow.classList.add("arrow");
        newButtonExtendCountry.appendChild(newArrow);

        // ***
        const newSubMenuCountry = document.createElement("ul");
        newSubMenuCountry.classList.add("sub_menu_country");
        newCountry.appendChild(newSubMenuCountry);

        for (let j = 0; j < countriesArray[i].citiesList.length; j++) {
          const newCity = document.createElement("li");
          newCity.classList.add("city");
          newCity.setAttribute("style", `animation-delay: ${j * 150}ms;`);
          newSubMenuCountry.appendChild(newCity);

          const newButtonCity = document.createElement("button");
          newButtonCity.classList.add("city_button");
          newButtonCity.classList.add(
            countriesArray[i].citiesList[j].toLowerCase()
          );

          if (
            _carousel_config_js__WEBPACK_IMPORTED_MODULE_1__.citiesWithImages.includes(
              countriesArray[i].citiesList[j].toLowerCase()
            )
          ) {
            newButtonCity.classList.add("available_city");
          }
          newButtonCity.innerHTML = `${countriesArray[i].citiesList[j]}`;
          newCity.appendChild(newButtonCity);

          newButtonCity.addEventListener("click", () => {
            const cityName = document.querySelector(".carousel > .city_name");
            cityName.innerHTML = "";

            let nameForImageList =
              countriesArray[i].citiesList[j].toLowerCase();
            let imageListName = nameForImageList + "ImagesList";

            if (getImageSRC[imageListName] != undefined) {
              (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.createCityImages)(getImageSRC[imageListName]);
            } else {
              (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.createCityImages)(getImageSRC.defaultImagesList);
            }

            cityName.innerHTML = countriesArray[i].citiesList[j];
          });
        }
      }
    }

    function addSidebarEventListeners() {
      const extendCountryCategoryButtons = document.querySelectorAll(
        "button.extend_country_category"
      );

      extendCountryCategoryButtons.forEach((extendCountryCategoryButton) => {
        const countryCategory =
          extendCountryCategoryButton.parentNode.parentNode;
        const mainMenuCountryCategory = extendCountryCategoryButton.parentNode;
        const subMenuCountryCategory = countryCategory.querySelector(
          ".sub_menu_country_category"
        );

        const arrowIconCountryCategory =
          extendCountryCategoryButton.querySelector(".arrow");

        const childArrowIconsCountryCategory =
          countryCategory.querySelectorAll(".arrow");

        const subMenusCountries =
          countryCategory.querySelectorAll(".sub_menu_country");

        extendCountryCategoryButton.addEventListener("click", () => {
          mainMenuCountryCategory.classList.toggle("active");
          subMenuCountryCategory.classList.toggle("active");
          arrowIconCountryCategory.classList.toggle("active");
          if (!subMenuCountryCategory.classList.contains("active")) {
            subMenusCountries.forEach((subMenuCountries) => {
              subMenuCountries.classList.remove("active");
            });
            childArrowIconsCountryCategory.forEach((childArrow) => {
              childArrow.classList.remove("active");
            });
          }
        });
      });

      // ******

      const extendCountryButtons = document.querySelectorAll(
        "button.extend_country"
      );

      extendCountryButtons.forEach((extendCountryButton) => {
        const country = extendCountryButton.parentNode.parentNode;
        const subMenuCountry = country.querySelector(".sub_menu_country");
        const arrowIconCountry = extendCountryButton.querySelector(".arrow");

        extendCountryButton.addEventListener("click", () => {
          subMenuCountry.classList.toggle("active");
          arrowIconCountry.classList.toggle("active");
        });
      });
    }

    createCountryCategory("&nbsp;Western Europe", _sidebar_config_js__WEBPACK_IMPORTED_MODULE_0__.westernEurope);
    createCountryCategory("&nbsp;Eastern Europe", _sidebar_config_js__WEBPACK_IMPORTED_MODULE_0__.easternEurope);
    createCountryCategory("&nbsp;Balkans", _sidebar_config_js__WEBPACK_IMPORTED_MODULE_0__.balkans);
    createCountryCategory("&nbsp;Asia", _sidebar_config_js__WEBPACK_IMPORTED_MODULE_0__.asia);

    addSidebarEventListeners();
  }

  return { createSidebarDOM };
}


/***/ }),

/***/ "./src/javascript/modules/sidebar_config.js":
/*!**************************************************!*\
  !*** ./src/javascript/modules/sidebar_config.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asia": () => (/* binding */ asia),
/* harmony export */   "balkans": () => (/* binding */ balkans),
/* harmony export */   "easternEurope": () => (/* binding */ easternEurope),
/* harmony export */   "westernEurope": () => (/* binding */ westernEurope)
/* harmony export */ });
function CreateCountry(country_name, cities_list) {
  let countryName = country_name;
  let citiesList = cities_list;

  return { countryName, citiesList };
}

const germanyCities = [
  "Berlin",
  "Munich",
  "Cologne",
  "Frankfurt",
  "Stuttgart",
  "Düsseldorf",
  "Dresden",
  "Heidelberg",
  "Nuremberg",
  "Göttingen",
];

const greeceCities = [
  "Athens",
  "Thessaloniki",
  "Corinth",
  "Kastoria",
  "Volos",
  "Skiathos",
  "Kallithea",
  "Samos",
];

// Western Europe
// **************

const germany = CreateCountry("Germany", germanyCities);
const france = CreateCountry("France", ["Paris", "Strasbourg"]);
const belgium = CreateCountry("Belgium", ["Brussels", "Bruges"]);
const netherlands = CreateCountry("Netherlands", [
  "Amsterdam",
  "Rotterdam",
  "Utrecht",
]);
const luxembourg = CreateCountry("Luxembourg", ["Luxembourg"]);
const austria = CreateCountry("Austria", ["Vienna"]);
const italy = CreateCountry("Italy", ["Venice", "Verona", "Bergamo", "Naples"]);
const spain = CreateCountry("Spain", ["Madrid"]);
const portugal = CreateCountry("Portugal", ["Lisbon", "Porto"]);

const westernEurope = [
  germany,
  france,
  belgium,
  netherlands,
  luxembourg,
  austria,
  italy,
  spain,
  portugal,
];
// **************

// Eastern Europe
// **************

const poland = CreateCountry("Poland", [
  "Warsaw",
  "Krakow",
  "Lublin",
  "Zakopane",
]);
const czechia = CreateCountry("Czechia", ["Prague"]);
const slovakia = CreateCountry("Slovakia", ["Bratislava"]);
const lithuania = CreateCountry("Lithuania", ["Vilnius"]);
const latvia = CreateCountry("Latvia", ["Riga"]);
const estonia = CreateCountry("Estonia", ["Tallinn"]);
const belarus = CreateCountry("Belarus", ["Grodno"]);
const ukraine = CreateCountry("Ukraine", ["Kiev", "Chernobil"]);
const moldova = CreateCountry("Moldova", ["Chisinau"]);

const easternEurope = [
  poland,
  czechia,
  slovakia,
  lithuania,
  latvia,
  estonia,
  belarus,
  ukraine,
  moldova,
];
// **************

// Balkans
// *******

const hungary = CreateCountry("Hungary", ["Budapest"]);
const slovenia = CreateCountry("Slovenia", ["Ljubljana"]);
const croatia = CreateCountry("Croatia", ["Zagreb"]);
const serbia = CreateCountry("Serbia", ["Belgrade", "Nis"]);
const kosovo = CreateCountry("Kosovo", ["Pristina"]);
const macedonia = CreateCountry("Macedonia", ["Skopje", "Ohrid"]);
const greece = CreateCountry("Greece", greeceCities);

const balkans = [
  greece,
  macedonia,
  kosovo,
  serbia,
  croatia,
  slovenia,
  hungary,
];
// *******

// Asia
// ****
const china = CreateCountry("China", ["Beijing", "Shanghai"]);
const asia = [china];
// ****


/***/ }),

/***/ "./src/assets/fonts/Travel/Travel.otf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Travel/Travel.otf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "529e3bf5acc549702c67.otf";

/***/ }),

/***/ "./src/assets/fonts/skyfont/Skyfont-NonCommercial.otf":
/*!************************************************************!*\
  !*** ./src/assets/fonts/skyfont/Skyfont-NonCommercial.otf ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d2151277ce0814443935.otf";

/***/ }),

/***/ "./src/assets/fonts/travel_journal/travel_journal.ttf":
/*!************************************************************!*\
  !*** ./src/assets/fonts/travel_journal/travel_journal.ttf ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "382073150a258131cdf9.ttf";

/***/ }),

/***/ "./src/assets/images/city_images/athens/athens_image_0.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/athens/athens_image_0.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e895a181527573a46bc9.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/athens/athens_image_1.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/athens/athens_image_1.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0f37305507acf3e57fb4.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/athens/athens_image_2.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/athens/athens_image_2.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "75e1f4c8534fb6fd6b93.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/athens/athens_image_3.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/athens/athens_image_3.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9bd5b4ead52191128bbb.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/berlin/berlin_image_0.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/berlin/berlin_image_0.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "14b636c3a4332863bae0.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/berlin/berlin_image_1.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/berlin/berlin_image_1.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d9ee215d1e03b80a6143.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/berlin/berlin_image_2.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/berlin/berlin_image_2.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d93008cec1474a5a63f6.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/berlin/berlin_image_3.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/berlin/berlin_image_3.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3956bb3d006df1ccf35e.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/berlin/berlin_image_4.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/berlin/berlin_image_4.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "92fa52d431bdd94ae3dc.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/berlin/berlin_image_5.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/berlin/berlin_image_5.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8a22a1ba8d0dc4f34049.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/brussels/brussels_image_0.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/city_images/brussels/brussels_image_0.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "04c02f44b8e1d335f8d7.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/brussels/brussels_image_1.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/city_images/brussels/brussels_image_1.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3d4bac3ea199941eaeb1.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/brussels/brussels_image_2.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/city_images/brussels/brussels_image_2.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ce434f4fbfea8296fed9.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/brussels/brussels_image_3.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/city_images/brussels/brussels_image_3.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "22b3a16af808f2d4dbc0.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/cologne/cologne_image_0.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/city_images/cologne/cologne_image_0.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ddb04cca80914083ea25.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/cologne/cologne_image_1.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/city_images/cologne/cologne_image_1.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "42ce0d56b78f7605e7fc.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/cologne/cologne_image_2.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/city_images/cologne/cologne_image_2.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "91ce9a74ad189686838e.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/cologne/cologne_image_3.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/city_images/cologne/cologne_image_3.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fa6fff2d1eb403c45757.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/frankfurt/frankfurt_image_0.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/images/city_images/frankfurt/frankfurt_image_0.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "769d981d076d77fcacfe.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/frankfurt/frankfurt_image_1.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/images/city_images/frankfurt/frankfurt_image_1.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "87ff1062147125659e91.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/frankfurt/frankfurt_image_2.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/images/city_images/frankfurt/frankfurt_image_2.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "480936155f0b271b67ab.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/frankfurt/frankfurt_image_3.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/images/city_images/frankfurt/frankfurt_image_3.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0ab97c21ff5c86f733e6.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/munich/munich_image_0.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/munich/munich_image_0.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a1b60115c387070d4870.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/munich/munich_image_1.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/munich/munich_image_1.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a0c62352e513161cf073.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/munich/munich_image_2.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/munich/munich_image_2.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cb647f9a8f974ad47fb3.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/munich/munich_image_3.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/munich/munich_image_3.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b67f5932691da0207072.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/naples/naples_image_0.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/naples/naples_image_0.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "387873a2937bfba7b0f8.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/naples/naples_image_1.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/naples/naples_image_1.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "937dcb1e656303dfed1b.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/naples/naples_image_2.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/naples/naples_image_2.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b0244cd638517e3b4087.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/naples/naples_image_3.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/naples/naples_image_3.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f1e2752cf32f3ca4b437.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/paris/paris_image_0.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/city_images/paris/paris_image_0.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8b729289c8cdc48886ec.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/paris/paris_image_1.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/city_images/paris/paris_image_1.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "374f5fb45a61e8fdea3a.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/paris/paris_image_2.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/city_images/paris/paris_image_2.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f606e9e6b3005f8efbe4.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/paris/paris_image_3.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/city_images/paris/paris_image_3.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "39965272907851f042e6.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/paris/paris_image_4.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/city_images/paris/paris_image_4.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9c5e94f5841998dec217.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/prague/prague_image_0.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/prague/prague_image_0.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8b0b582782cd4902e36c.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/prague/prague_image_1.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/prague/prague_image_1.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7f7032d75f1c34805d4d.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/prague/prague_image_2.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/prague/prague_image_2.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0833322284be5b231765.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/prague/prague_image_3.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/prague/prague_image_3.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5a11ffa15ca34b274c58.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/riga/riga_image_0.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/city_images/riga/riga_image_0.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9b92edf8da5b924434bf.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/riga/riga_image_1.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/city_images/riga/riga_image_1.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4f3f328e72759f09dec5.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/riga/riga_image_2.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/city_images/riga/riga_image_2.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7d3effdfbbb63f2b3182.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/riga/riga_image_3.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/city_images/riga/riga_image_3.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7a1e33dfbb93b85551cb.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/shanghai/shanghai_image_0.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/city_images/shanghai/shanghai_image_0.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e7fad391ff5ac81ea24b.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/shanghai/shanghai_image_1.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/city_images/shanghai/shanghai_image_1.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bb3e3a25c40f7a13050f.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/shanghai/shanghai_image_2.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/city_images/shanghai/shanghai_image_2.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9ff7cf85459782f9f74a.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/shanghai/shanghai_image_3.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/city_images/shanghai/shanghai_image_3.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "90dedece197b8bdce5ac.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/skopje/skopje_image_0.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/skopje/skopje_image_0.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cdfaa12d3dee3bf0b2ef.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/skopje/skopje_image_1.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/skopje/skopje_image_1.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "05a6b87b54b2de4f9ab3.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/skopje/skopje_image_2.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/skopje/skopje_image_2.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8ef45263380756ae1f70.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/skopje/skopje_image_3.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/skopje/skopje_image_3.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a470a65f0f793491c577.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/strasbourg/strasbourg_image_0.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/city_images/strasbourg/strasbourg_image_0.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9b36738c2d996d3c9c73.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/strasbourg/strasbourg_image_1.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/city_images/strasbourg/strasbourg_image_1.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e23f41d8a4b8b36d57f7.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/strasbourg/strasbourg_image_2.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/city_images/strasbourg/strasbourg_image_2.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "068839ffd650715d4126.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/strasbourg/strasbourg_image_3.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/city_images/strasbourg/strasbourg_image_3.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8a948a2249ad75d1e66b.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/thessaloniki/thessaloniki_image_0.jpg":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/city_images/thessaloniki/thessaloniki_image_0.jpg ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1fe7283eae9920270023.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/thessaloniki/thessaloniki_image_1.jpg":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/city_images/thessaloniki/thessaloniki_image_1.jpg ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "93452608d7aca4b9f48d.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/thessaloniki/thessaloniki_image_2.jpg":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/city_images/thessaloniki/thessaloniki_image_2.jpg ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d16a1a4015c18fe15c00.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/thessaloniki/thessaloniki_image_3.jpg":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/city_images/thessaloniki/thessaloniki_image_3.jpg ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "27e0092f314f2efda857.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/venice/venice_image_0.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/venice/venice_image_0.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8183d8abbc642f9ac1ee.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/venice/venice_image_1.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/venice/venice_image_1.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "de9975a71cb50130a03a.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/venice/venice_image_2.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/venice/venice_image_2.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "61e963ecb1aa4dd98fe6.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/venice/venice_image_3.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/venice/venice_image_3.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "77b0dbdb7727be4f5519.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/vienna/vienna_image_0.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/vienna/vienna_image_0.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4e693c72fe352595a7f8.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/vienna/vienna_image_1.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/vienna/vienna_image_1.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5d78ad32250a229d23a5.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/vienna/vienna_image_2.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/vienna/vienna_image_2.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c1f9962ecb35d980c630.jpg";

/***/ }),

/***/ "./src/assets/images/city_images/vienna/vienna_image_3.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/city_images/vienna/vienna_image_3.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "466867e459a2a62c2833.jpg";

/***/ }),

/***/ "./src/assets/images/tv_static.gif":
/*!*****************************************!*\
  !*** ./src/assets/images/tv_static.gif ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc375c23a508fa9c6567.gif";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/modules/sidebar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsZ0JBQWdCLG1CQUFtQixlQUFlLGVBQWUsR0FBRyxzQkFBc0IsMEJBQTBCLEdBQUcsdUNBQXVDLHVGQUF1RixLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxPQUFPLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFlBQVksY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLFdBQVcsVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxVQUFVLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLFdBQVcsWUFBWSxjQUFjLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxPQUFPLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUs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LFVBQVUsdURBQU87QUFDbEQsaUNBQWlDLE9BQU8sb0RBQUk7O0FBRTVDO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92aXNpdGVkX2NpdGllc19tYXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly92aXNpdGVkX2NpdGllc19tYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly92aXNpdGVkX2NpdGllc19tYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly92aXNpdGVkX2NpdGllc19tYXAvLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy8gc3luYyBeXFwuXFwvLipcXC8uKlxcLmpwZyQiLCJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vc3JjL2phdmFzY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy9jYXJvdXNlbF9jb25maWcuanMiLCJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy9zaWRlYmFyLmpzIiwid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvc2lkZWJhcl9jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9za3lmb250L1NreWZvbnQtTm9uQ29tbWVyY2lhbC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvVHJhdmVsL1RyYXZlbC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvdHJhdmVsX2pvdXJuYWwvdHJhdmVsX2pvdXJuYWwudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIHRyYW5zbGF0ZVgge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNjBweCk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ3Jvd0Rvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIH1cXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMTAlLFxcbiAgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE2cHgsIDAsIDApO1xcbiAgfVxcblxcbiAgNDAlLFxcbiAgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNnB4LCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZTEge1xcbiAgMCUsXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcXG4gIH1cXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNreWZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlRyYXZlbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJhdmVsSm91cm5hbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcblxcbiAgLS1mb250X2NvbG9yX3doaXRlOiAjZThlNmUzO1xcbiAgLS1tYWluX2NvbnRhaW5lcl9nYXA6IDFyZW07XFxuXFxuICAtLWhvdmVyLWNvbG9yLWRlZmF1bHQ6ICNkNmQzZDE7XFxuICAtLWJvcmRlcl9jb2xvcl9ncmV5OiAjODU4NTg1O1xcbiAgLS1ib3JkZXJfcmFkaXVzOiAxMHB4O1xcblxcbiAgLS1zaWRlYmFyX2ljb25fZ2FwOiAwLjJyZW07XFxuICAtLXNpZGViYXJfaXRlbV9hbmltYXRpb25fZHVyYXRpb246IDJzO1xcbiAgLS1tYWluX2NvbnRhaW5lcnNfcGFkZGluZzogMXJlbTtcXG4gIC0tZmxpeGJ1cy1vcmFuZ2U6ICNmZjlhMWU7XFxuICAtLWZsaXhidXMtZ3JlZW46ICM1ZGJlMjY7XFxuICAtLWJhY2tncm91bmQtY29sb3Itc2lkZWJhci1ncmV5OiAjMjMyMzIzO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICMxYTFhMWE7XFxuICAtLW5ldXRyYWwtYmxhY2s6ICMxMjEyMTI7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG5cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWdyZXkpO1xcbiAgY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qIE1haW4gQ29udGFpbmVyICovXFxuLyogKioqKioqKioqKioqKiogKi9cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMXJlbSA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMuNXJlbSBhdXRvIDEuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJzaWRlYmFyIGhlYWRlclxcXCJcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBIZWFkZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tbWFpbl9jb250YWluZXJzX3BhZGRpbmcpO1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQge1xcbiAgZmxleDogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJfbGVmdCBkaXYge1xcbiAgZm9udC1mYW1pbHk6IFNreWZvbnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5oZWFkZXJfcmlnaHQgYnV0dG9uIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlcl9yaWdodCBidXR0b24gaW1nIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG4vKiAqKioqKiogKi9cXG4vKiAqKioqKiogKi9cXG5cXG4vKiAqKioqKioqICovXFxuLyogKioqKioqKiAqL1xcbi8qIFNpZGViYXIgPiBzdGFydHMgaGVyZSAqL1xcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqICovXFxuLyogU2lkZWJhciBNYWluICovXFxuXFxuLnNpZGViYXJfbWFpbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogdmFyKC0tbWFpbl9jb250YWluZXJzX3BhZGRpbmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1zaWRlYmFyLWdyZXkpO1xcbiAgZm9udC1mYW1pbHk6IFRyYXZlbEpvdXJuYWw7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciAudG9wX2Jsb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXJfbWFpbl9jb250YWluZXIgLnRvcF9ibG9jayBpbWcge1xcbiAgaGVpZ2h0OiBjYWxjKDVyZW0gKyA1dmgpO1xcbn1cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciAudG9wX2Jsb2NrIGRpdiB7XFxuICBtYXJnaW4tdG9wOiAtMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciAudG9wX2Jsb2NrIGRpdiBzcGFuIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUxIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IHZhcigtLWZsaXhidXMtZ3JlZW4pO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBDb3VudHJ5IENhdGVnb3JpZXMgKi9cXG5cXG4uY291bnRyeV9jYXRlZ29yeSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW5fbWVudV9jb3VudHJ5X2NhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpZGViYXJfaWNvbl9nYXApO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4ubWFpbl9tZW51X2NvdW50cnlfY2F0ZWdvcnkuYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b206IDNweCB2YXIoLS1mbGl4YnVzLW9yYW5nZSkgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5zdWJfbWVudV9jb3VudHJ5X2NhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zaWRlYmFyX2ljb25fZ2FwKTtcXG59XFxuLnN1Yl9tZW51X2NvdW50cnlfY2F0ZWdvcnkuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdWJfbWVudV9jb3VudHJ5X2NhdGVnb3J5ID4gbGkge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnN1Yl9tZW51X2NvdW50cnlfY2F0ZWdvcnkuYWN0aXZlID4gbGkge1xcbiAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKiogKi9cXG4vKiBDb3VudHJpZXMgKi9cXG4uY291bnRyeSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW5fbWVudV9jb3VudHJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpZGViYXJfaWNvbl9nYXApO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcbn1cXG5cXG4uc3ViX21lbnVfY291bnRyeSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tc2lkZWJhcl9pY29uX2dhcCk7XFxufVxcbi5zdWJfbWVudV9jb3VudHJ5LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3ViX21lbnVfY291bnRyeSA+IGxpIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zdWJfbWVudV9jb3VudHJ5LmFjdGl2ZSA+IGxpIHtcXG4gIGFuaW1hdGlvbjogdHJhbnNsYXRlWCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XFxufVxcblxcbi8qICoqKioqKioqKiAqL1xcblxcbi8qICoqKioqKiAqL1xcbi8qIENpdGllcyAqL1xcblxcbi5jaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpZGViYXJfaWNvbl9nYXApO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiAqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBidXR0b25zIGFuZCBhcnJvd3MgKi9cXG5cXG4uYXJyb3cge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLmFycm93LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG59XFxuXFxuLmFycm93LmFycm93X3NraXBfbGVmdCB7XFxuICB3aWR0aDogMC42cmVtO1xcbiAgaGVpZ2h0OiAwLjZyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci13aWR0aDogMCA5cHggOXB4IDA7XFxuICBtYXJnaW4tbGVmdDogMC4zcmVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG59XFxuXFxuLmFycm93LmFycm93X3NraXBfcmlnaHQge1xcbiAgd2lkdGg6IDAuNnJlbTtcXG4gIGhlaWdodDogMC42cmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDAgOXB4IDlweCAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyX3JhZGl1cyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC4ycmVtIGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmJ1dHRvbi5leHRlbmRfY291bnRyeV9jYXRlZ29yeSxcXG5idXR0b24uZXh0ZW5kX2NvdW50cnkge1xcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsaXhidXMtb3JhbmdlKTtcXG59XFxuXFxuLmNpdHlfYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4uYXZhaWxhYmxlX2NpdHkge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsaXhidXMtZ3JlZW4pO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuLyogU2lkZWJhciA+IGVuZHMgaGVyZSAqL1xcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuXFxuLyogKioqKioqKiAqL1xcbi8qICoqKioqKiogKi9cXG4vKiBDb250ZW50ID4gc3RhcnRzIGhlcmUgKi9cXG4vKiAqKioqKioqICovXFxuLyogKioqKioqKiAqL1xcblxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMTV2aDtcXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLW5ldXRyYWwtYmxhY2spO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwgYnV0dG9uIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjNyZW07XFxufVxcblxcbi5jYXJvdXNlbCAuY2l0eV9uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAxLjlyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1mYW1pbHk6IFNreWZvbnQ7XFxufVxcblxcbi5jYXJvdXNlbCAuaW1hZ2VfY291bnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbn1cXG5cXG4uaW1hZ2VfbWFpbl9jb250YWluZXIge1xcbiAgLyogZmxleDogMTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbWFnZV9tYWluX2NvbnRhaW5lciAuaW1hZ2VfY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBib3JkZXI6IDAuN3JlbSBzb2xpZCB2YXIoLS1uZXV0cmFsLWJsYWNrKTtcXG5cXG4gIGFzcGVjdC1yYXRpbzogMTYvOTtcXG4gIG1heC1oZWlnaHQ6IDcwdmg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcmVtIHZhcigtLWZsaXhidXMtb3JhbmdlKTtcXG59XFxuXFxuLmltYWdlX21haW5fY29udGFpbmVyIC5pbWFnZV9jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIC8qIGFkZCBib3ggc2hhZG93ICovXFxuXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uaW1hZ2VfbWFpbl9jb250YWluZXIgLmltYWdlX2NvbnRhaW5lciBpbWcuYWN0aXZlX2ltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYW5pbWF0aW9uOiBncm93RG93biAxNTAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcbi5pbWFnZV9tYWluX2NvbnRhaW5lciAuaW1hZ2VfY29udGFpbmVyIGltZy5zdGF0aWNfaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcblxcbi5pbWFnZV9jb3VudGVyID4gZGl2IHtcXG4gIGhlaWdodDogMC41cmVtO1xcbiAgd2lkdGg6IDAuNXJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIG1hcmdpbjogMC4xcmVtIDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbn1cXG5cXG4uaW1hZ2VfY291bnRlciA+IGRpdi5hY3RpdmVfaW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuLyogQ29udGVudCA+IGVuZHMgaGVyZSAqL1xcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogZm9vdGVyICovXFxuLyogKioqKioqICovXFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICAvKiBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgKi9cXG5cXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiB6LWluZGV4OiAyOyAqL1xcbiAgLyogdGV4dC1zaGFkb3c6IG5vbmU7ICovXFxuICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiAxLjFyZW07XFxuICBzY2FsZTogMS4yO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZm9vdGVyIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxV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RUFFaEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1COztFQUVuQixpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdFQUFnRTtFQUNoRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCLFlBQVk7QUFDWixZQUFZOztBQUVaLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVzs7QUFFWDtFQUNFLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLDZCQUE2Qjs7RUFFN0Isd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsV0FBVztBQUNYLFdBQVdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyB0cmFuc2xhdGVYIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYwcHgpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dEb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB9XFxuICA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjEpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDEwJSxcXG4gIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XFxuICB9XFxuXFxuICAyMCUsXFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCk7XFxuICB9XFxuXFxuICAzMCUsXFxuICA1MCUsXFxuICA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNnB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTZweCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUxIHtcXG4gIDAlLFxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XFxuICB9XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTa3lmb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvc2t5Zm9udC9Ta3lmb250LU5vbkNvbW1lcmNpYWwub3RmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJhdmVsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvVHJhdmVsL1RyYXZlbC5vdGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmF2ZWxKb3VybmFsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvdHJhdmVsX2pvdXJuYWwvdHJhdmVsX2pvdXJuYWwudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcblxcbiAgLS1mb250X2NvbG9yX3doaXRlOiAjZThlNmUzO1xcbiAgLS1tYWluX2NvbnRhaW5lcl9nYXA6IDFyZW07XFxuXFxuICAtLWhvdmVyLWNvbG9yLWRlZmF1bHQ6ICNkNmQzZDE7XFxuICAtLWJvcmRlcl9jb2xvcl9ncmV5OiAjODU4NTg1O1xcbiAgLS1ib3JkZXJfcmFkaXVzOiAxMHB4O1xcblxcbiAgLS1zaWRlYmFyX2ljb25fZ2FwOiAwLjJyZW07XFxuICAtLXNpZGViYXJfaXRlbV9hbmltYXRpb25fZHVyYXRpb246IDJzO1xcbiAgLS1tYWluX2NvbnRhaW5lcnNfcGFkZGluZzogMXJlbTtcXG4gIC0tZmxpeGJ1cy1vcmFuZ2U6ICNmZjlhMWU7XFxuICAtLWZsaXhidXMtZ3JlZW46ICM1ZGJlMjY7XFxuICAtLWJhY2tncm91bmQtY29sb3Itc2lkZWJhci1ncmV5OiAjMjMyMzIzO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICMxYTFhMWE7XFxuICAtLW5ldXRyYWwtYmxhY2s6ICMxMjEyMTI7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG5cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWdyZXkpO1xcbiAgY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qIE1haW4gQ29udGFpbmVyICovXFxuLyogKioqKioqKioqKioqKiogKi9cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMXJlbSA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMuNXJlbSBhdXRvIDEuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJzaWRlYmFyIGhlYWRlclxcXCJcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBIZWFkZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tbWFpbl9jb250YWluZXJzX3BhZGRpbmcpO1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQge1xcbiAgZmxleDogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJfbGVmdCBkaXYge1xcbiAgZm9udC1mYW1pbHk6IFNreWZvbnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5oZWFkZXJfcmlnaHQgYnV0dG9uIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlcl9yaWdodCBidXR0b24gaW1nIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG4vKiAqKioqKiogKi9cXG4vKiAqKioqKiogKi9cXG5cXG4vKiAqKioqKioqICovXFxuLyogKioqKioqKiAqL1xcbi8qIFNpZGViYXIgPiBzdGFydHMgaGVyZSAqL1xcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqICovXFxuLyogU2lkZWJhciBNYWluICovXFxuXFxuLnNpZGViYXJfbWFpbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogdmFyKC0tbWFpbl9jb250YWluZXJzX3BhZGRpbmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1zaWRlYmFyLWdyZXkpO1xcbiAgZm9udC1mYW1pbHk6IFRyYXZlbEpvdXJuYWw7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciAudG9wX2Jsb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXJfbWFpbl9jb250YWluZXIgLnRvcF9ibG9jayBpbWcge1xcbiAgaGVpZ2h0OiBjYWxjKDVyZW0gKyA1dmgpO1xcbn1cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciAudG9wX2Jsb2NrIGRpdiB7XFxuICBtYXJnaW4tdG9wOiAtMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciAudG9wX2Jsb2NrIGRpdiBzcGFuIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUxIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IHZhcigtLWZsaXhidXMtZ3JlZW4pO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBDb3VudHJ5IENhdGVnb3JpZXMgKi9cXG5cXG4uY291bnRyeV9jYXRlZ29yeSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW5fbWVudV9jb3VudHJ5X2NhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpZGViYXJfaWNvbl9nYXApO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4ubWFpbl9tZW51X2NvdW50cnlfY2F0ZWdvcnkuYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b206IDNweCB2YXIoLS1mbGl4YnVzLW9yYW5nZSkgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5zdWJfbWVudV9jb3VudHJ5X2NhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zaWRlYmFyX2ljb25fZ2FwKTtcXG59XFxuLnN1Yl9tZW51X2NvdW50cnlfY2F0ZWdvcnkuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdWJfbWVudV9jb3VudHJ5X2NhdGVnb3J5ID4gbGkge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnN1Yl9tZW51X2NvdW50cnlfY2F0ZWdvcnkuYWN0aXZlID4gbGkge1xcbiAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKiogKi9cXG4vKiBDb3VudHJpZXMgKi9cXG4uY291bnRyeSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW5fbWVudV9jb3VudHJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpZGViYXJfaWNvbl9nYXApO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcbn1cXG5cXG4uc3ViX21lbnVfY291bnRyeSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tc2lkZWJhcl9pY29uX2dhcCk7XFxufVxcbi5zdWJfbWVudV9jb3VudHJ5LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3ViX21lbnVfY291bnRyeSA+IGxpIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zdWJfbWVudV9jb3VudHJ5LmFjdGl2ZSA+IGxpIHtcXG4gIGFuaW1hdGlvbjogdHJhbnNsYXRlWCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XFxufVxcblxcbi8qICoqKioqKioqKiAqL1xcblxcbi8qICoqKioqKiAqL1xcbi8qIENpdGllcyAqL1xcblxcbi5jaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpZGViYXJfaWNvbl9nYXApO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiAqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBidXR0b25zIGFuZCBhcnJvd3MgKi9cXG5cXG4uYXJyb3cge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLmFycm93LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG59XFxuXFxuLmFycm93LmFycm93X3NraXBfbGVmdCB7XFxuICB3aWR0aDogMC42cmVtO1xcbiAgaGVpZ2h0OiAwLjZyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci13aWR0aDogMCA5cHggOXB4IDA7XFxuICBtYXJnaW4tbGVmdDogMC4zcmVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG59XFxuXFxuLmFycm93LmFycm93X3NraXBfcmlnaHQge1xcbiAgd2lkdGg6IDAuNnJlbTtcXG4gIGhlaWdodDogMC42cmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDAgOXB4IDlweCAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyX3JhZGl1cyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC4ycmVtIGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmJ1dHRvbi5leHRlbmRfY291bnRyeV9jYXRlZ29yeSxcXG5idXR0b24uZXh0ZW5kX2NvdW50cnkge1xcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsaXhidXMtb3JhbmdlKTtcXG59XFxuXFxuLmNpdHlfYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4uYXZhaWxhYmxlX2NpdHkge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsaXhidXMtZ3JlZW4pO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuLyogU2lkZWJhciA+IGVuZHMgaGVyZSAqL1xcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuXFxuLyogKioqKioqKiAqL1xcbi8qICoqKioqKiogKi9cXG4vKiBDb250ZW50ID4gc3RhcnRzIGhlcmUgKi9cXG4vKiAqKioqKioqICovXFxuLyogKioqKioqKiAqL1xcblxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMTV2aDtcXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLW5ldXRyYWwtYmxhY2spO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwgYnV0dG9uIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjNyZW07XFxufVxcblxcbi5jYXJvdXNlbCAuY2l0eV9uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAxLjlyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1mYW1pbHk6IFNreWZvbnQ7XFxufVxcblxcbi5jYXJvdXNlbCAuaW1hZ2VfY291bnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbn1cXG5cXG4uaW1hZ2VfbWFpbl9jb250YWluZXIge1xcbiAgLyogZmxleDogMTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbWFnZV9tYWluX2NvbnRhaW5lciAuaW1hZ2VfY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBib3JkZXI6IDAuN3JlbSBzb2xpZCB2YXIoLS1uZXV0cmFsLWJsYWNrKTtcXG5cXG4gIGFzcGVjdC1yYXRpbzogMTYvOTtcXG4gIG1heC1oZWlnaHQ6IDcwdmg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcmVtIHZhcigtLWZsaXhidXMtb3JhbmdlKTtcXG59XFxuXFxuLmltYWdlX21haW5fY29udGFpbmVyIC5pbWFnZV9jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIC8qIGFkZCBib3ggc2hhZG93ICovXFxuXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uaW1hZ2VfbWFpbl9jb250YWluZXIgLmltYWdlX2NvbnRhaW5lciBpbWcuYWN0aXZlX2ltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYW5pbWF0aW9uOiBncm93RG93biAxNTAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcbi5pbWFnZV9tYWluX2NvbnRhaW5lciAuaW1hZ2VfY29udGFpbmVyIGltZy5zdGF0aWNfaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcblxcbi5pbWFnZV9jb3VudGVyID4gZGl2IHtcXG4gIGhlaWdodDogMC41cmVtO1xcbiAgd2lkdGg6IDAuNXJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIG1hcmdpbjogMC4xcmVtIDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbn1cXG5cXG4uaW1hZ2VfY291bnRlciA+IGRpdi5hY3RpdmVfaW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuLyogQ29udGVudCA+IGVuZHMgaGVyZSAqL1xcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogZm9vdGVyICovXFxuLyogKioqKioqICovXFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICAvKiBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgKi9cXG5cXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiB6LWluZGV4OiAyOyAqL1xcbiAgLyogdGV4dC1zaGFkb3c6IG5vbmU7ICovXFxuICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiAxLjFyZW07XFxuICBzY2FsZTogMS4yO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZm9vdGVyIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2F0aGVucy9hdGhlbnNfaW1hZ2VfMC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2F0aGVucy9hdGhlbnNfaW1hZ2VfMC5qcGdcIixcblx0XCIuL2F0aGVucy9hdGhlbnNfaW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2F0aGVucy9hdGhlbnNfaW1hZ2VfMS5qcGdcIixcblx0XCIuL2F0aGVucy9hdGhlbnNfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2F0aGVucy9hdGhlbnNfaW1hZ2VfMi5qcGdcIixcblx0XCIuL2F0aGVucy9hdGhlbnNfaW1hZ2VfMy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2F0aGVucy9hdGhlbnNfaW1hZ2VfMy5qcGdcIixcblx0XCIuL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMC5qcGdcIixcblx0XCIuL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMS5qcGdcIixcblx0XCIuL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMi5qcGdcIixcblx0XCIuL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMy5qcGdcIixcblx0XCIuL2Jlcmxpbi9iZXJsaW5faW1hZ2VfNC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfNC5qcGdcIixcblx0XCIuL2Jlcmxpbi9iZXJsaW5faW1hZ2VfNS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfNS5qcGdcIixcblx0XCIuL2JydXNzZWxzL2JydXNzZWxzX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9icnVzc2Vscy9icnVzc2Vsc19pbWFnZV8wLmpwZ1wiLFxuXHRcIi4vYnJ1c3NlbHMvYnJ1c3NlbHNfaW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2JydXNzZWxzL2JydXNzZWxzX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9icnVzc2Vscy9icnVzc2Vsc19pbWFnZV8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvYnJ1c3NlbHMvYnJ1c3NlbHNfaW1hZ2VfMi5qcGdcIixcblx0XCIuL2JydXNzZWxzL2JydXNzZWxzX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9icnVzc2Vscy9icnVzc2Vsc19pbWFnZV8zLmpwZ1wiLFxuXHRcIi4vY29sb2duZS9jb2xvZ25lX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9jb2xvZ25lL2NvbG9nbmVfaW1hZ2VfMC5qcGdcIixcblx0XCIuL2NvbG9nbmUvY29sb2duZV9pbWFnZV8xLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvY29sb2duZS9jb2xvZ25lX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9jb2xvZ25lL2NvbG9nbmVfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2NvbG9nbmUvY29sb2duZV9pbWFnZV8yLmpwZ1wiLFxuXHRcIi4vY29sb2duZS9jb2xvZ25lX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9jb2xvZ25lL2NvbG9nbmVfaW1hZ2VfMy5qcGdcIixcblx0XCIuL2ZyYW5rZnVydC9mcmFua2Z1cnRfaW1hZ2VfMC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2ZyYW5rZnVydC9mcmFua2Z1cnRfaW1hZ2VfMC5qcGdcIixcblx0XCIuL2ZyYW5rZnVydC9mcmFua2Z1cnRfaW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2ZyYW5rZnVydC9mcmFua2Z1cnRfaW1hZ2VfMS5qcGdcIixcblx0XCIuL2ZyYW5rZnVydC9mcmFua2Z1cnRfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2ZyYW5rZnVydC9mcmFua2Z1cnRfaW1hZ2VfMi5qcGdcIixcblx0XCIuL2ZyYW5rZnVydC9mcmFua2Z1cnRfaW1hZ2VfMy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2ZyYW5rZnVydC9mcmFua2Z1cnRfaW1hZ2VfMy5qcGdcIixcblx0XCIuL211bmljaC9tdW5pY2hfaW1hZ2VfMC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL211bmljaC9tdW5pY2hfaW1hZ2VfMC5qcGdcIixcblx0XCIuL211bmljaC9tdW5pY2hfaW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL211bmljaC9tdW5pY2hfaW1hZ2VfMS5qcGdcIixcblx0XCIuL211bmljaC9tdW5pY2hfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL211bmljaC9tdW5pY2hfaW1hZ2VfMi5qcGdcIixcblx0XCIuL211bmljaC9tdW5pY2hfaW1hZ2VfMy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL211bmljaC9tdW5pY2hfaW1hZ2VfMy5qcGdcIixcblx0XCIuL25hcGxlcy9uYXBsZXNfaW1hZ2VfMC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL25hcGxlcy9uYXBsZXNfaW1hZ2VfMC5qcGdcIixcblx0XCIuL25hcGxlcy9uYXBsZXNfaW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL25hcGxlcy9uYXBsZXNfaW1hZ2VfMS5qcGdcIixcblx0XCIuL25hcGxlcy9uYXBsZXNfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL25hcGxlcy9uYXBsZXNfaW1hZ2VfMi5qcGdcIixcblx0XCIuL25hcGxlcy9uYXBsZXNfaW1hZ2VfMy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL25hcGxlcy9uYXBsZXNfaW1hZ2VfMy5qcGdcIixcblx0XCIuL3BhcmlzL3BhcmlzX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9wYXJpcy9wYXJpc19pbWFnZV8wLmpwZ1wiLFxuXHRcIi4vcGFyaXMvcGFyaXNfaW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3BhcmlzL3BhcmlzX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9wYXJpcy9wYXJpc19pbWFnZV8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvcGFyaXMvcGFyaXNfaW1hZ2VfMi5qcGdcIixcblx0XCIuL3BhcmlzL3BhcmlzX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9wYXJpcy9wYXJpc19pbWFnZV8zLmpwZ1wiLFxuXHRcIi4vcGFyaXMvcGFyaXNfaW1hZ2VfNC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3BhcmlzL3BhcmlzX2ltYWdlXzQuanBnXCIsXG5cdFwiLi9wcmFndWUvcHJhZ3VlX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9wcmFndWUvcHJhZ3VlX2ltYWdlXzAuanBnXCIsXG5cdFwiLi9wcmFndWUvcHJhZ3VlX2ltYWdlXzEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9wcmFndWUvcHJhZ3VlX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9wcmFndWUvcHJhZ3VlX2ltYWdlXzIuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9wcmFndWUvcHJhZ3VlX2ltYWdlXzIuanBnXCIsXG5cdFwiLi9wcmFndWUvcHJhZ3VlX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9wcmFndWUvcHJhZ3VlX2ltYWdlXzMuanBnXCIsXG5cdFwiLi9yaWdhL3JpZ2FfaW1hZ2VfMC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3JpZ2EvcmlnYV9pbWFnZV8wLmpwZ1wiLFxuXHRcIi4vcmlnYS9yaWdhX2ltYWdlXzEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9yaWdhL3JpZ2FfaW1hZ2VfMS5qcGdcIixcblx0XCIuL3JpZ2EvcmlnYV9pbWFnZV8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvcmlnYS9yaWdhX2ltYWdlXzIuanBnXCIsXG5cdFwiLi9yaWdhL3JpZ2FfaW1hZ2VfMy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3JpZ2EvcmlnYV9pbWFnZV8zLmpwZ1wiLFxuXHRcIi4vc2hhbmdoYWkvc2hhbmdoYWlfaW1hZ2VfMC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3NoYW5naGFpL3NoYW5naGFpX2ltYWdlXzAuanBnXCIsXG5cdFwiLi9zaGFuZ2hhaS9zaGFuZ2hhaV9pbWFnZV8xLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvc2hhbmdoYWkvc2hhbmdoYWlfaW1hZ2VfMS5qcGdcIixcblx0XCIuL3NoYW5naGFpL3NoYW5naGFpX2ltYWdlXzIuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9zaGFuZ2hhaS9zaGFuZ2hhaV9pbWFnZV8yLmpwZ1wiLFxuXHRcIi4vc2hhbmdoYWkvc2hhbmdoYWlfaW1hZ2VfMy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3NoYW5naGFpL3NoYW5naGFpX2ltYWdlXzMuanBnXCIsXG5cdFwiLi9za29wamUvc2tvcGplX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9za29wamUvc2tvcGplX2ltYWdlXzAuanBnXCIsXG5cdFwiLi9za29wamUvc2tvcGplX2ltYWdlXzEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9za29wamUvc2tvcGplX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9za29wamUvc2tvcGplX2ltYWdlXzIuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9za29wamUvc2tvcGplX2ltYWdlXzIuanBnXCIsXG5cdFwiLi9za29wamUvc2tvcGplX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9za29wamUvc2tvcGplX2ltYWdlXzMuanBnXCIsXG5cdFwiLi9zdHJhc2JvdXJnL3N0cmFzYm91cmdfaW1hZ2VfMC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3N0cmFzYm91cmcvc3RyYXNib3VyZ19pbWFnZV8wLmpwZ1wiLFxuXHRcIi4vc3RyYXNib3VyZy9zdHJhc2JvdXJnX2ltYWdlXzEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9zdHJhc2JvdXJnL3N0cmFzYm91cmdfaW1hZ2VfMS5qcGdcIixcblx0XCIuL3N0cmFzYm91cmcvc3RyYXNib3VyZ19pbWFnZV8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvc3RyYXNib3VyZy9zdHJhc2JvdXJnX2ltYWdlXzIuanBnXCIsXG5cdFwiLi9zdHJhc2JvdXJnL3N0cmFzYm91cmdfaW1hZ2VfMy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3N0cmFzYm91cmcvc3RyYXNib3VyZ19pbWFnZV8zLmpwZ1wiLFxuXHRcIi4vdGhlc3NhbG9uaWtpL3RoZXNzYWxvbmlraV9pbWFnZV8wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdGhlc3NhbG9uaWtpL3RoZXNzYWxvbmlraV9pbWFnZV8wLmpwZ1wiLFxuXHRcIi4vdGhlc3NhbG9uaWtpL3RoZXNzYWxvbmlraV9pbWFnZV8xLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdGhlc3NhbG9uaWtpL3RoZXNzYWxvbmlraV9pbWFnZV8xLmpwZ1wiLFxuXHRcIi4vdGhlc3NhbG9uaWtpL3RoZXNzYWxvbmlraV9pbWFnZV8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdGhlc3NhbG9uaWtpL3RoZXNzYWxvbmlraV9pbWFnZV8yLmpwZ1wiLFxuXHRcIi4vdGhlc3NhbG9uaWtpL3RoZXNzYWxvbmlraV9pbWFnZV8zLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdGhlc3NhbG9uaWtpL3RoZXNzYWxvbmlraV9pbWFnZV8zLmpwZ1wiLFxuXHRcIi4vdmVuaWNlL3ZlbmljZV9pbWFnZV8wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdmVuaWNlL3ZlbmljZV9pbWFnZV8wLmpwZ1wiLFxuXHRcIi4vdmVuaWNlL3ZlbmljZV9pbWFnZV8xLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdmVuaWNlL3ZlbmljZV9pbWFnZV8xLmpwZ1wiLFxuXHRcIi4vdmVuaWNlL3ZlbmljZV9pbWFnZV8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdmVuaWNlL3ZlbmljZV9pbWFnZV8yLmpwZ1wiLFxuXHRcIi4vdmVuaWNlL3ZlbmljZV9pbWFnZV8zLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdmVuaWNlL3ZlbmljZV9pbWFnZV8zLmpwZ1wiLFxuXHRcIi4vdmllbm5hL3ZpZW5uYV9pbWFnZV8wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdmllbm5hL3ZpZW5uYV9pbWFnZV8wLmpwZ1wiLFxuXHRcIi4vdmllbm5hL3ZpZW5uYV9pbWFnZV8xLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdmllbm5hL3ZpZW5uYV9pbWFnZV8xLmpwZ1wiLFxuXHRcIi4vdmllbm5hL3ZpZW5uYV9pbWFnZV8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdmllbm5hL3ZpZW5uYV9pbWFnZV8yLmpwZ1wiLFxuXHRcIi4vdmllbm5hL3ZpZW5uYV9pbWFnZV8zLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvdmllbm5hL3ZpZW5uYV9pbWFnZV8zLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLy4qXFxcXC5qcGckXCI7IiwiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgU2lkZWJhckRPTSB9IGZyb20gXCIuLi9qYXZhc2NyaXB0L21vZHVsZXMvc2lkZWJhci5qc1wiO1xuXG5pbXBvcnQgeyBJbWFnZVNSQyB9IGZyb20gXCIuLi9qYXZhc2NyaXB0L21vZHVsZXMvY2Fyb3VzZWxfY29uZmlnLmpzXCI7XG5cbmNvbnN0IHNpZGViYXJET00gPSBTaWRlYmFyRE9NKCk7XG5zaWRlYmFyRE9NLmNyZWF0ZVNpZGViYXJET00oKTtcblxuY29uc3QgZ2V0SW1hZ2VTUkMgPSBuZXcgSW1hZ2VTUkMoKTtcblxuY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpO1xuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlfbmFtZVwiKTtcbmNvbnN0IGltYWdlTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VfbWFpbl9jb250YWluZXJcIik7XG5jb25zdCBza2lwTGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uc2tpcF9sZWZ0XCIpO1xuY29uc3Qgc2tpcFJpZ2h0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5za2lwX3JpZ2h0XCIpO1xuc2tpcFJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNsaWRlSW1hZ2UoXCJyaWdodFwiKTtcbn0pO1xuc2tpcExlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc2xpZGVJbWFnZShcImxlZnRcIik7XG59KTtcblxuY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlX2NvbnRhaW5lclwiKTtcbmNvbnN0IGltYWdlQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VfY291bnRlclwiKTtcblxuLy8gKioqKioqKioqKioqKioqKioqKioqKipcbi8vICoqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKlxuXG5sZXQgaW1hZ2VJbmRleCA9IDA7XG5cbmZ1bmN0aW9uIHNsaWRlSW1hZ2UocmlnaHRfb3JfbGVmdCkge1xuICBpZiAocmlnaHRfb3JfbGVmdCA9PT0gXCJsZWZ0XCIpIHtcbiAgICBpbWFnZUluZGV4LS07XG4gIH0gZWxzZSBpZiAocmlnaHRfb3JfbGVmdCA9PT0gXCJyaWdodFwiKSB7XG4gICAgaW1hZ2VJbmRleCsrO1xuICB9XG5cbiAgbGV0IGFsbEltYWdlQ2lyY2xlcyA9IGltYWdlQ291bnRlci5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICBsZXQgYWxsSW1hZ2VzID0gaW1hZ2VDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcbiAgaWYgKGltYWdlSW5kZXggPj0gYWxsSW1hZ2VzLmxlbmd0aCkge1xuICAgIGltYWdlSW5kZXggPSAwO1xuICB9IGVsc2UgaWYgKGltYWdlSW5kZXggPT09IC0xKSB7XG4gICAgaW1hZ2VJbmRleCA9IGFsbEltYWdlcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgYWxsSW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgaWYgKGltYWdlLmRhdGFzZXQuaW1hZ2VJbmRleCA9PT0gaW1hZ2VJbmRleC50b1N0cmluZygpKSB7XG4gICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX2ltYWdlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlX2ltYWdlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgYWxsSW1hZ2VDaXJjbGVzLmZvckVhY2goKGltYWdlQ2lyY2xlKSA9PiB7XG4gICAgaWYgKGltYWdlQ2lyY2xlLmRhdGFzZXQuaW1hZ2VJbmRleCA9PT0gaW1hZ2VJbmRleC50b1N0cmluZygpKSB7XG4gICAgICBpbWFnZUNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX2ltYWdlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZUNpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlX2ltYWdlXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8gKioqKioqKioqKioqKioqKipcbi8vIGFkZGluZyBhdXRvIHNsaWRlXG5sZXQgYXV0b1NsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhdXRvU2xpZGUsIDgwMDApO1xuXG5mdW5jdGlvbiBhdXRvU2xpZGUoKSB7XG4gIHNsaWRlSW1hZ2UoXCJyaWdodFwiKTtcbn1cbmZ1bmN0aW9uIHN0b3BBdXRvU2xpZGUoKSB7XG4gIGNsZWFySW50ZXJ2YWwoYXV0b1NsaWRlSW50ZXJ2YWwpO1xufVxuZnVuY3Rpb24gc3RhcnRBdXRvU2xpZGUoKSB7XG4gIGF1dG9TbGlkZUludGVydmFsID0gc2V0SW50ZXJ2YWwoYXV0b1NsaWRlLCA4MDAwKTtcbn1cblxuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gIHN0b3BBdXRvU2xpZGUoKTtcbn0pO1xuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICBzdGFydEF1dG9TbGlkZSgpO1xufSk7XG5cbi8vICoqKioqKioqKioqKioqKioqXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gYWRkaW5nIGltYWdlcyB0byBIVE1MIGZyb20gY2l0eSBidXR0b25zXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxubGV0IGJlcmxpbkltYWdlc0xpc3QgPSBnZXRJbWFnZVNSQy5iZXJsaW5JbWFnZXNMaXN0O1xubGV0IGRlZmF1bHRJbWFnZXNMaXN0ID0gZ2V0SW1hZ2VTUkMuZGVmYXVsdEltYWdlc0xpc3Q7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaXR5SW1hZ2VzKGltYWdlc19saXN0KSB7XG4gIGltYWdlQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGltYWdlQ291bnRlci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmV3SW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlc19saXN0W2ldKTtcbiAgICBuZXdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJiZXJsaW5cIik7XG4gICAgbmV3SW1hZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1pbWFnZS1pbmRleFwiLCBpKTtcbiAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VcIik7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfaW1hZ2VcIik7XG4gICAgfVxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0ltYWdlKTtcblxuICAgIGNvbnN0IG5ld0ltYWdlQ291bnRlckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3SW1hZ2VDb3VudGVyQ2lyY2xlLnNldEF0dHJpYnV0ZShcImRhdGEtaW1hZ2UtaW5kZXhcIiwgaSk7XG5cbiAgICBpZiAoaW1hZ2VzX2xpc3QubGVuZ3RoIDw9IDEpIHtcbiAgICAgIG5ld0ltYWdlQ291bnRlckNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm9wYWNpdHk6IDA7XCIpO1xuICAgICAgbGV0IHNlbGVjdGVkSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5pbWFnZV9tYWluX2NvbnRhaW5lciAuaW1hZ2VfY29udGFpbmVyIGltZ1wiXG4gICAgICApO1xuICAgICAgc2VsZWN0ZWRJbWFnZS5jbGFzc0xpc3QuYWRkKFwic3RhdGljX2ltYWdlXCIpO1xuXG4gICAgICAvLyBzZWxlY3RlZEltYWdlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYW5pbWF0aW9uOiBub25lOyBvcGFjaXR5OiAxO1wiKTtcbiAgICB9XG4gICAgaWYgKGkgPT09IDAgJiYgaW1hZ2VzX2xpc3QubGVuZ3RoID4gMSkge1xuICAgICAgbmV3SW1hZ2VDb3VudGVyQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfaW1hZ2VcIik7XG4gICAgfVxuICAgIGltYWdlQ291bnRlci5hcHBlbmRDaGlsZChuZXdJbWFnZUNvdW50ZXJDaXJjbGUpO1xuICB9XG59XG5cbmNyZWF0ZUNpdHlJbWFnZXMoZGVmYXVsdEltYWdlc0xpc3QpO1xuY2l0eU5hbWUuaW5uZXJIVE1MID0gXCImIzg2NTY7IENoZWNrIHRoZSBjaXRpZXMhISAmIzg2NTY7XCI7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5mdW5jdGlvbiBhZGRBdWRpb0NvbmZpZygpIHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXVkaW9cIik7XG4gIGNvbnN0IGF1ZGlvSWNvbk9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hdWRpb19idXR0b24gLmljb25fb25cIik7XG4gIGNvbnN0IGF1ZGlvSWNvbk9mZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYXVkaW9fYnV0dG9uIC5pY29uX29mZlwiKTtcbiAgYXVkaW9JY29uT24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCBhdWRpb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYXVkaW9fYnV0dG9uXCIpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gICAgaWYgKGF1ZGlvLnBhdXNlZCkge1xuICAgICAgYXVkaW9JY29uT24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGF1ZGlvSWNvbk9mZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBhdWRpby5wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1ZGlvSWNvbk9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGF1ZGlvSWNvbk9mZi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICB9XG4gIH1cblxuICBhdWRpb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZVBsYXkoKTtcbiAgfSk7XG59XG5cbmFkZEF1ZGlvQ29uZmlnKCk7XG4iLCJpbXBvcnQgdHZHbGl0Y2ggZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdHZfc3RhdGljLmdpZlwiO1xuXG5pbXBvcnQgYmVybGluSW1hZ2VfMCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzAuanBnXCI7XG5pbXBvcnQgYmVybGluSW1hZ2VfMSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzEuanBnXCI7XG5pbXBvcnQgYmVybGluSW1hZ2VfMiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzIuanBnXCI7XG5pbXBvcnQgYmVybGluSW1hZ2VfMyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzMuanBnXCI7XG5pbXBvcnQgYmVybGluSW1hZ2VfNCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzQuanBnXCI7XG5pbXBvcnQgYmVybGluSW1hZ2VfNSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzUuanBnXCI7XG5cbmV4cG9ydCBjb25zdCBjaXRpZXNXaXRoSW1hZ2VzID0gW1xuICBcImJlcmxpblwiLFxuICBcImZyYW5rZnVydFwiLFxuICBcIm11bmljaFwiLFxuICBcImNvbG9nbmVcIixcbiAgXCJwYXJpc1wiLFxuICBcInN0cmFzYm91cmdcIixcbiAgXCJicnVzc2Vsc1wiLFxuICBcInZpZW5uYVwiLFxuICBcInZlbmljZVwiLFxuICBcIm5hcGxlc1wiLFxuICBcInByYWd1ZVwiLFxuICBcInJpZ2FcIixcbiAgXCJza29wamVcIixcbiAgXCJhdGhlbnNcIixcbiAgXCJ0aGVzc2Fsb25pa2lcIixcbiAgXCJzaGFuZ2hhaVwiLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIEltYWdlU1JDKCkge1xuICB0aGlzLmRlZmF1bHRJbWFnZXNMaXN0ID0gW3R2R2xpdGNoXTtcblxuICB0aGlzLmJlcmxpbkltYWdlc0xpc3QgPSBbXG4gICAgYmVybGluSW1hZ2VfMCxcbiAgICBiZXJsaW5JbWFnZV8xLFxuICAgIGJlcmxpbkltYWdlXzIsXG4gICAgYmVybGluSW1hZ2VfMyxcbiAgICBiZXJsaW5JbWFnZV80LFxuICAgIGJlcmxpbkltYWdlXzUsXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjaXRpZXNXaXRoSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNpdHkgPSBjaXRpZXNXaXRoSW1hZ2VzW2ldO1xuICAgIGNvbnN0IGNpdHlMaXN0TmFtZSA9IGAke2NpdHl9SW1hZ2VzTGlzdGA7XG4gICAgdGhpc1tjaXR5TGlzdE5hbWVdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke2NpdHl9X2ltYWdlXyR7aX1gO1xuICAgICAgY29uc3QgaW1hZ2UgPSByZXF1aXJlKGAuLi8uLi9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzLyR7Y2l0eX0vJHtpbWFnZU5hbWV9LmpwZ2ApO1xuXG4gICAgICB0aGlzW2NpdHlMaXN0TmFtZV0ucHVzaChpbWFnZSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICB3ZXN0ZXJuRXVyb3BlLFxuICBlYXN0ZXJuRXVyb3BlLFxuICBiYWxrYW5zLFxuICBhc2lhLFxufSBmcm9tIFwiLi9zaWRlYmFyX2NvbmZpZy5qc1wiO1xuXG5pbXBvcnQgeyBJbWFnZVNSQywgY2l0aWVzV2l0aEltYWdlcyB9IGZyb20gXCIuL2Nhcm91c2VsX2NvbmZpZy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2l0eUltYWdlcyB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xuXG5jb25zdCBnZXRJbWFnZVNSQyA9IG5ldyBJbWFnZVNSQygpO1xuXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhckRPTSgpIHtcbiAgY29uc3Qgc2lkZWJhck1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnNpZGViYXJfbWFpbl9jb250YWluZXJcIlxuICApO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJET00oKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlQ291bnRyeUNhdGVnb3J5KGNvdW50cnlDYXRlZ29yeU5hbWUsIGNvdW50cmllc0FycmF5KSB7XG4gICAgICBjb25zdCBuZXdDb3VudHJ5Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBuZXdDb3VudHJ5Q2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNvdW50cnlfY2F0ZWdvcnlcIik7XG4gICAgICBzaWRlYmFyTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDb3VudHJ5Q2F0ZWdvcnkpO1xuXG4gICAgICAvLyAqKioqKipcbiAgICAgIGNvbnN0IG5ld21haW5NZW51Q291bnRyeUNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld21haW5NZW51Q291bnRyeUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJtYWluX21lbnVfY291bnRyeV9jYXRlZ29yeVwiKTtcbiAgICAgIG5ld0NvdW50cnlDYXRlZ29yeS5hcHBlbmRDaGlsZChuZXdtYWluTWVudUNvdW50cnlDYXRlZ29yeSk7XG5cbiAgICAgIGNvbnN0IG5ld0NvdW50cnlDYXRlZ29yeU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3Q291bnRyeUNhdGVnb3J5TmFtZS5jbGFzc0xpc3QuYWRkKFwiY291bnRyeV9jYXRlZ29yeV9uYW1lXCIpO1xuICAgICAgbmV3Q291bnRyeUNhdGVnb3J5TmFtZS5pbm5lckhUTUwgPSBjb3VudHJ5Q2F0ZWdvcnlOYW1lO1xuICAgICAgbmV3bWFpbk1lbnVDb3VudHJ5Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQobmV3Q291bnRyeUNhdGVnb3J5TmFtZSk7XG5cbiAgICAgIGNvbnN0IG5ld0J1dHRvbkV4dGVuZENvdW50cnlDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBuZXdCdXR0b25FeHRlbmRDb3VudHJ5Q2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImV4dGVuZF9jb3VudHJ5X2NhdGVnb3J5XCIpO1xuICAgICAgbmV3bWFpbk1lbnVDb3VudHJ5Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQobmV3QnV0dG9uRXh0ZW5kQ291bnRyeUNhdGVnb3J5KTtcblxuICAgICAgY29uc3QgbmV3QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgIG5ld0Fycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvd1wiKTtcbiAgICAgIG5ld0J1dHRvbkV4dGVuZENvdW50cnlDYXRlZ29yeS5hcHBlbmRDaGlsZChuZXdBcnJvdyk7XG5cbiAgICAgIC8vICoqKioqKlxuICAgICAgY29uc3QgbmV3U3ViTWVudUNvdW50cnlDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgIG5ld1N1Yk1lbnVDb3VudHJ5Q2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcInN1Yl9tZW51X2NvdW50cnlfY2F0ZWdvcnlcIik7XG4gICAgICBuZXdDb3VudHJ5Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQobmV3U3ViTWVudUNvdW50cnlDYXRlZ29yeSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRyaWVzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3Q291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbmV3Q291bnRyeS5jbGFzc0xpc3QuYWRkKFwiY291bnRyeVwiKTtcbiAgICAgICAgbmV3Q291bnRyeS5jbGFzc0xpc3QuYWRkKGNvdW50cmllc0FycmF5W2ldLmNvdW50cnlOYW1lKTtcbiAgICAgICAgbmV3Q291bnRyeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYW5pbWF0aW9uLWRlbGF5OiAke2kgKiA4MH1tcztgKTtcbiAgICAgICAgbmV3U3ViTWVudUNvdW50cnlDYXRlZ29yeS5hcHBlbmRDaGlsZChuZXdDb3VudHJ5KTtcblxuICAgICAgICAvLyAqKipcbiAgICAgICAgY29uc3QgbmV3TWFpbk1lbnVDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3TWFpbk1lbnVDb3VudHJ5LmNsYXNzTGlzdC5hZGQoXCJtYWluX21lbnVfY291bnRyeVwiKTtcbiAgICAgICAgbmV3Q291bnRyeS5hcHBlbmRDaGlsZChuZXdNYWluTWVudUNvdW50cnkpO1xuXG4gICAgICAgIGNvbnN0IG5ld0NvdW50cnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3Q291bnRyeU5hbWUuY2xhc3NMaXN0LmFkZChcImNvdW50cnlfbmFtZVwiKTtcbiAgICAgICAgbmV3Q291bnRyeU5hbWUuaW5uZXJIVE1MID0gY291bnRyaWVzQXJyYXlbaV0uY291bnRyeU5hbWU7XG4gICAgICAgIG5ld01haW5NZW51Q291bnRyeS5hcHBlbmRDaGlsZChuZXdDb3VudHJ5TmFtZSk7XG5cbiAgICAgICAgY29uc3QgbmV3QnV0dG9uRXh0ZW5kQ291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5ld0J1dHRvbkV4dGVuZENvdW50cnkuY2xhc3NMaXN0LmFkZChcImV4dGVuZF9jb3VudHJ5XCIpO1xuICAgICAgICBuZXdNYWluTWVudUNvdW50cnkuYXBwZW5kQ2hpbGQobmV3QnV0dG9uRXh0ZW5kQ291bnRyeSk7XG5cbiAgICAgICAgY29uc3QgbmV3QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgbmV3QXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93XCIpO1xuICAgICAgICBuZXdCdXR0b25FeHRlbmRDb3VudHJ5LmFwcGVuZENoaWxkKG5ld0Fycm93KTtcblxuICAgICAgICAvLyAqKipcbiAgICAgICAgY29uc3QgbmV3U3ViTWVudUNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG5ld1N1Yk1lbnVDb3VudHJ5LmNsYXNzTGlzdC5hZGQoXCJzdWJfbWVudV9jb3VudHJ5XCIpO1xuICAgICAgICBuZXdDb3VudHJ5LmFwcGVuZENoaWxkKG5ld1N1Yk1lbnVDb3VudHJ5KTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50cmllc0FycmF5W2ldLmNpdGllc0xpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBuZXdDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgIG5ld0NpdHkuY2xhc3NMaXN0LmFkZChcImNpdHlcIik7XG4gICAgICAgICAgbmV3Q2l0eS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYW5pbWF0aW9uLWRlbGF5OiAke2ogKiAxNTB9bXM7YCk7XG4gICAgICAgICAgbmV3U3ViTWVudUNvdW50cnkuYXBwZW5kQ2hpbGQobmV3Q2l0eSk7XG5cbiAgICAgICAgICBjb25zdCBuZXdCdXR0b25DaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICBuZXdCdXR0b25DaXR5LmNsYXNzTGlzdC5hZGQoXCJjaXR5X2J1dHRvblwiKTtcbiAgICAgICAgICBuZXdCdXR0b25DaXR5LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICBjb3VudHJpZXNBcnJheVtpXS5jaXRpZXNMaXN0W2pdLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2l0aWVzV2l0aEltYWdlcy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgY291bnRyaWVzQXJyYXlbaV0uY2l0aWVzTGlzdFtqXS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBuZXdCdXR0b25DaXR5LmNsYXNzTGlzdC5hZGQoXCJhdmFpbGFibGVfY2l0eVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3QnV0dG9uQ2l0eS5pbm5lckhUTUwgPSBgJHtjb3VudHJpZXNBcnJheVtpXS5jaXRpZXNMaXN0W2pdfWA7XG4gICAgICAgICAgbmV3Q2l0eS5hcHBlbmRDaGlsZChuZXdCdXR0b25DaXR5KTtcblxuICAgICAgICAgIG5ld0J1dHRvbkNpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCA+IC5jaXR5X25hbWVcIik7XG4gICAgICAgICAgICBjaXR5TmFtZS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgICAgICBsZXQgbmFtZUZvckltYWdlTGlzdCA9XG4gICAgICAgICAgICAgIGNvdW50cmllc0FycmF5W2ldLmNpdGllc0xpc3Rbal0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBpbWFnZUxpc3ROYW1lID0gbmFtZUZvckltYWdlTGlzdCArIFwiSW1hZ2VzTGlzdFwiO1xuXG4gICAgICAgICAgICBpZiAoZ2V0SW1hZ2VTUkNbaW1hZ2VMaXN0TmFtZV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNyZWF0ZUNpdHlJbWFnZXMoZ2V0SW1hZ2VTUkNbaW1hZ2VMaXN0TmFtZV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY3JlYXRlQ2l0eUltYWdlcyhnZXRJbWFnZVNSQy5kZWZhdWx0SW1hZ2VzTGlzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNpdHlOYW1lLmlubmVySFRNTCA9IGNvdW50cmllc0FycmF5W2ldLmNpdGllc0xpc3Rbal07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTaWRlYmFyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBjb25zdCBleHRlbmRDb3VudHJ5Q2F0ZWdvcnlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgXCJidXR0b24uZXh0ZW5kX2NvdW50cnlfY2F0ZWdvcnlcIlxuICAgICAgKTtcblxuICAgICAgZXh0ZW5kQ291bnRyeUNhdGVnb3J5QnV0dG9ucy5mb3JFYWNoKChleHRlbmRDb3VudHJ5Q2F0ZWdvcnlCdXR0b24pID0+IHtcbiAgICAgICAgY29uc3QgY291bnRyeUNhdGVnb3J5ID1cbiAgICAgICAgICBleHRlbmRDb3VudHJ5Q2F0ZWdvcnlCdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBtYWluTWVudUNvdW50cnlDYXRlZ29yeSA9IGV4dGVuZENvdW50cnlDYXRlZ29yeUJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBzdWJNZW51Q291bnRyeUNhdGVnb3J5ID0gY291bnRyeUNhdGVnb3J5LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIuc3ViX21lbnVfY291bnRyeV9jYXRlZ29yeVwiXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYXJyb3dJY29uQ291bnRyeUNhdGVnb3J5ID1cbiAgICAgICAgICBleHRlbmRDb3VudHJ5Q2F0ZWdvcnlCdXR0b24ucXVlcnlTZWxlY3RvcihcIi5hcnJvd1wiKTtcblxuICAgICAgICBjb25zdCBjaGlsZEFycm93SWNvbnNDb3VudHJ5Q2F0ZWdvcnkgPVxuICAgICAgICAgIGNvdW50cnlDYXRlZ29yeS5xdWVyeVNlbGVjdG9yQWxsKFwiLmFycm93XCIpO1xuXG4gICAgICAgIGNvbnN0IHN1Yk1lbnVzQ291bnRyaWVzID1cbiAgICAgICAgICBjb3VudHJ5Q2F0ZWdvcnkucXVlcnlTZWxlY3RvckFsbChcIi5zdWJfbWVudV9jb3VudHJ5XCIpO1xuXG4gICAgICAgIGV4dGVuZENvdW50cnlDYXRlZ29yeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIG1haW5NZW51Q291bnRyeUNhdGVnb3J5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgc3ViTWVudUNvdW50cnlDYXRlZ29yeS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIGFycm93SWNvbkNvdW50cnlDYXRlZ29yeS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIGlmICghc3ViTWVudUNvdW50cnlDYXRlZ29yeS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIHN1Yk1lbnVzQ291bnRyaWVzLmZvckVhY2goKHN1Yk1lbnVDb3VudHJpZXMpID0+IHtcbiAgICAgICAgICAgICAgc3ViTWVudUNvdW50cmllcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjaGlsZEFycm93SWNvbnNDb3VudHJ5Q2F0ZWdvcnkuZm9yRWFjaCgoY2hpbGRBcnJvdykgPT4ge1xuICAgICAgICAgICAgICBjaGlsZEFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vICoqKioqKlxuXG4gICAgICBjb25zdCBleHRlbmRDb3VudHJ5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIFwiYnV0dG9uLmV4dGVuZF9jb3VudHJ5XCJcbiAgICAgICk7XG5cbiAgICAgIGV4dGVuZENvdW50cnlCdXR0b25zLmZvckVhY2goKGV4dGVuZENvdW50cnlCdXR0b24pID0+IHtcbiAgICAgICAgY29uc3QgY291bnRyeSA9IGV4dGVuZENvdW50cnlCdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBzdWJNZW51Q291bnRyeSA9IGNvdW50cnkucXVlcnlTZWxlY3RvcihcIi5zdWJfbWVudV9jb3VudHJ5XCIpO1xuICAgICAgICBjb25zdCBhcnJvd0ljb25Db3VudHJ5ID0gZXh0ZW5kQ291bnRyeUJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwiLmFycm93XCIpO1xuXG4gICAgICAgIGV4dGVuZENvdW50cnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBzdWJNZW51Q291bnRyeS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIGFycm93SWNvbkNvdW50cnkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb3VudHJ5Q2F0ZWdvcnkoXCImbmJzcDtXZXN0ZXJuIEV1cm9wZVwiLCB3ZXN0ZXJuRXVyb3BlKTtcbiAgICBjcmVhdGVDb3VudHJ5Q2F0ZWdvcnkoXCImbmJzcDtFYXN0ZXJuIEV1cm9wZVwiLCBlYXN0ZXJuRXVyb3BlKTtcbiAgICBjcmVhdGVDb3VudHJ5Q2F0ZWdvcnkoXCImbmJzcDtCYWxrYW5zXCIsIGJhbGthbnMpO1xuICAgIGNyZWF0ZUNvdW50cnlDYXRlZ29yeShcIiZuYnNwO0FzaWFcIiwgYXNpYSk7XG5cbiAgICBhZGRTaWRlYmFyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZVNpZGViYXJET00gfTtcbn1cbiIsImZ1bmN0aW9uIENyZWF0ZUNvdW50cnkoY291bnRyeV9uYW1lLCBjaXRpZXNfbGlzdCkge1xuICBsZXQgY291bnRyeU5hbWUgPSBjb3VudHJ5X25hbWU7XG4gIGxldCBjaXRpZXNMaXN0ID0gY2l0aWVzX2xpc3Q7XG5cbiAgcmV0dXJuIHsgY291bnRyeU5hbWUsIGNpdGllc0xpc3QgfTtcbn1cblxuY29uc3QgZ2VybWFueUNpdGllcyA9IFtcbiAgXCJCZXJsaW5cIixcbiAgXCJNdW5pY2hcIixcbiAgXCJDb2xvZ25lXCIsXG4gIFwiRnJhbmtmdXJ0XCIsXG4gIFwiU3R1dHRnYXJ0XCIsXG4gIFwiRMO8c3NlbGRvcmZcIixcbiAgXCJEcmVzZGVuXCIsXG4gIFwiSGVpZGVsYmVyZ1wiLFxuICBcIk51cmVtYmVyZ1wiLFxuICBcIkfDtnR0aW5nZW5cIixcbl07XG5cbmNvbnN0IGdyZWVjZUNpdGllcyA9IFtcbiAgXCJBdGhlbnNcIixcbiAgXCJUaGVzc2Fsb25pa2lcIixcbiAgXCJDb3JpbnRoXCIsXG4gIFwiS2FzdG9yaWFcIixcbiAgXCJWb2xvc1wiLFxuICBcIlNraWF0aG9zXCIsXG4gIFwiS2FsbGl0aGVhXCIsXG4gIFwiU2Ftb3NcIixcbl07XG5cbi8vIFdlc3Rlcm4gRXVyb3BlXG4vLyAqKioqKioqKioqKioqKlxuXG5jb25zdCBnZXJtYW55ID0gQ3JlYXRlQ291bnRyeShcIkdlcm1hbnlcIiwgZ2VybWFueUNpdGllcyk7XG5jb25zdCBmcmFuY2UgPSBDcmVhdGVDb3VudHJ5KFwiRnJhbmNlXCIsIFtcIlBhcmlzXCIsIFwiU3RyYXNib3VyZ1wiXSk7XG5jb25zdCBiZWxnaXVtID0gQ3JlYXRlQ291bnRyeShcIkJlbGdpdW1cIiwgW1wiQnJ1c3NlbHNcIiwgXCJCcnVnZXNcIl0pO1xuY29uc3QgbmV0aGVybGFuZHMgPSBDcmVhdGVDb3VudHJ5KFwiTmV0aGVybGFuZHNcIiwgW1xuICBcIkFtc3RlcmRhbVwiLFxuICBcIlJvdHRlcmRhbVwiLFxuICBcIlV0cmVjaHRcIixcbl0pO1xuY29uc3QgbHV4ZW1ib3VyZyA9IENyZWF0ZUNvdW50cnkoXCJMdXhlbWJvdXJnXCIsIFtcIkx1eGVtYm91cmdcIl0pO1xuY29uc3QgYXVzdHJpYSA9IENyZWF0ZUNvdW50cnkoXCJBdXN0cmlhXCIsIFtcIlZpZW5uYVwiXSk7XG5jb25zdCBpdGFseSA9IENyZWF0ZUNvdW50cnkoXCJJdGFseVwiLCBbXCJWZW5pY2VcIiwgXCJWZXJvbmFcIiwgXCJCZXJnYW1vXCIsIFwiTmFwbGVzXCJdKTtcbmNvbnN0IHNwYWluID0gQ3JlYXRlQ291bnRyeShcIlNwYWluXCIsIFtcIk1hZHJpZFwiXSk7XG5jb25zdCBwb3J0dWdhbCA9IENyZWF0ZUNvdW50cnkoXCJQb3J0dWdhbFwiLCBbXCJMaXNib25cIiwgXCJQb3J0b1wiXSk7XG5cbmV4cG9ydCBjb25zdCB3ZXN0ZXJuRXVyb3BlID0gW1xuICBnZXJtYW55LFxuICBmcmFuY2UsXG4gIGJlbGdpdW0sXG4gIG5ldGhlcmxhbmRzLFxuICBsdXhlbWJvdXJnLFxuICBhdXN0cmlhLFxuICBpdGFseSxcbiAgc3BhaW4sXG4gIHBvcnR1Z2FsLFxuXTtcbi8vICoqKioqKioqKioqKioqXG5cbi8vIEVhc3Rlcm4gRXVyb3BlXG4vLyAqKioqKioqKioqKioqKlxuXG5jb25zdCBwb2xhbmQgPSBDcmVhdGVDb3VudHJ5KFwiUG9sYW5kXCIsIFtcbiAgXCJXYXJzYXdcIixcbiAgXCJLcmFrb3dcIixcbiAgXCJMdWJsaW5cIixcbiAgXCJaYWtvcGFuZVwiLFxuXSk7XG5jb25zdCBjemVjaGlhID0gQ3JlYXRlQ291bnRyeShcIkN6ZWNoaWFcIiwgW1wiUHJhZ3VlXCJdKTtcbmNvbnN0IHNsb3Zha2lhID0gQ3JlYXRlQ291bnRyeShcIlNsb3Zha2lhXCIsIFtcIkJyYXRpc2xhdmFcIl0pO1xuY29uc3QgbGl0aHVhbmlhID0gQ3JlYXRlQ291bnRyeShcIkxpdGh1YW5pYVwiLCBbXCJWaWxuaXVzXCJdKTtcbmNvbnN0IGxhdHZpYSA9IENyZWF0ZUNvdW50cnkoXCJMYXR2aWFcIiwgW1wiUmlnYVwiXSk7XG5jb25zdCBlc3RvbmlhID0gQ3JlYXRlQ291bnRyeShcIkVzdG9uaWFcIiwgW1wiVGFsbGlublwiXSk7XG5jb25zdCBiZWxhcnVzID0gQ3JlYXRlQ291bnRyeShcIkJlbGFydXNcIiwgW1wiR3JvZG5vXCJdKTtcbmNvbnN0IHVrcmFpbmUgPSBDcmVhdGVDb3VudHJ5KFwiVWtyYWluZVwiLCBbXCJLaWV2XCIsIFwiQ2hlcm5vYmlsXCJdKTtcbmNvbnN0IG1vbGRvdmEgPSBDcmVhdGVDb3VudHJ5KFwiTW9sZG92YVwiLCBbXCJDaGlzaW5hdVwiXSk7XG5cbmV4cG9ydCBjb25zdCBlYXN0ZXJuRXVyb3BlID0gW1xuICBwb2xhbmQsXG4gIGN6ZWNoaWEsXG4gIHNsb3Zha2lhLFxuICBsaXRodWFuaWEsXG4gIGxhdHZpYSxcbiAgZXN0b25pYSxcbiAgYmVsYXJ1cyxcbiAgdWtyYWluZSxcbiAgbW9sZG92YSxcbl07XG4vLyAqKioqKioqKioqKioqKlxuXG4vLyBCYWxrYW5zXG4vLyAqKioqKioqXG5cbmNvbnN0IGh1bmdhcnkgPSBDcmVhdGVDb3VudHJ5KFwiSHVuZ2FyeVwiLCBbXCJCdWRhcGVzdFwiXSk7XG5jb25zdCBzbG92ZW5pYSA9IENyZWF0ZUNvdW50cnkoXCJTbG92ZW5pYVwiLCBbXCJManVibGphbmFcIl0pO1xuY29uc3QgY3JvYXRpYSA9IENyZWF0ZUNvdW50cnkoXCJDcm9hdGlhXCIsIFtcIlphZ3JlYlwiXSk7XG5jb25zdCBzZXJiaWEgPSBDcmVhdGVDb3VudHJ5KFwiU2VyYmlhXCIsIFtcIkJlbGdyYWRlXCIsIFwiTmlzXCJdKTtcbmNvbnN0IGtvc292byA9IENyZWF0ZUNvdW50cnkoXCJLb3Nvdm9cIiwgW1wiUHJpc3RpbmFcIl0pO1xuY29uc3QgbWFjZWRvbmlhID0gQ3JlYXRlQ291bnRyeShcIk1hY2Vkb25pYVwiLCBbXCJTa29wamVcIiwgXCJPaHJpZFwiXSk7XG5jb25zdCBncmVlY2UgPSBDcmVhdGVDb3VudHJ5KFwiR3JlZWNlXCIsIGdyZWVjZUNpdGllcyk7XG5cbmV4cG9ydCBjb25zdCBiYWxrYW5zID0gW1xuICBncmVlY2UsXG4gIG1hY2Vkb25pYSxcbiAga29zb3ZvLFxuICBzZXJiaWEsXG4gIGNyb2F0aWEsXG4gIHNsb3ZlbmlhLFxuICBodW5nYXJ5LFxuXTtcbi8vICoqKioqKipcblxuLy8gQXNpYVxuLy8gKioqKlxuY29uc3QgY2hpbmEgPSBDcmVhdGVDb3VudHJ5KFwiQ2hpbmFcIiwgW1wiQmVpamluZ1wiLCBcIlNoYW5naGFpXCJdKTtcbmV4cG9ydCBjb25zdCBhc2lhID0gW2NoaW5hXTtcbi8vICoqKipcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==