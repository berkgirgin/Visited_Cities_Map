(self["webpackChunkvisited_cities_map"] = self["webpackChunkvisited_cities_map"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes translateX {\n  0% {\n    opacity: 0;\n    transform: translateX(60px);\n  }\n\n  80% {\n    transform: translateX(-5px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes growDown {\n  0% {\n    opacity: 0;\n    transform: scaleX(0);\n  }\n  70% {\n    transform: scaleX(1.1);\n  }\n  100% {\n    opacity: 1;\n    transform: scaleX(1);\n  }\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(8px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-16px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(16px, 0, 0);\n  }\n}\n\n@keyframes slide1 {\n  0%,\n  100% {\n    transform: translate(0, 0);\n  }\n\n  50% {\n    transform: translate(0, 10px);\n  }\n}\n\n@font-face {\n  font-family: \"Skyfont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Travel\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"TravelJournal\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  font-size: 1.4rem;\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n\n  --font_color_white: #e8e6e3;\n  --main_container_gap: 1rem;\n\n  --hover-color-default: #d6d3d1;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n\n  --sidebar_icon_gap: 0.2rem;\n  --sidebar_item_animation_duration: 2s;\n  --main_containers_padding: 1rem;\n  --flixbus-orange: #ff9a1e;\n  --flixbus-green: #5dbe26;\n  --background-color-sidebar-grey: #232323;\n  --background-color-grey: #1a1a1a;\n  --neutral-black: #121212;\n}\n\nbody {\n  background-color: grey;\n\n  margin: 0;\n  padding: 0;\n  height: 100%;\n\n  background-color: var(--background-color-grey);\n  color: var(--font_color_white);\n}\n\n/* ************** */\n/* Main Container */\n/* ************** */\n\n.main_container {\n  min-height: 100vh;\n\n  display: grid;\n  grid-template-columns: 11rem 5fr;\n  grid-template-rows: 3.5rem auto 1.5rem;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\"\n    \"footer footer\";\n}\n\n.header_main_container {\n  grid-area: header;\n}\n.sidebar_main_container {\n  grid-area: sidebar;\n}\n.content_main_container {\n  grid-area: main;\n}\nfooter {\n  grid-area: footer;\n}\n/* ************** */\n/* ************** */\n/* ************** */\n\n/* ****** */\n/* Header */\n/* ****** */\n\n.header_main_container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--main_containers_padding);\n}\n\n.header_left {\n  flex: 1;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.header_left div {\n  font-family: Skyfont;\n  font-weight: bold;\n  font-size: 2.5rem;\n  margin-left: 1rem;\n}\n\n.header_right button {\n  width: 80px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  box-shadow: 2rem orange;\n  border-color: var(--flixbus-orange);\n  /* box-shadow: rgba(255, 154, 30, 0.25) 0px 54px 55px,\n    rgba(255, 154, 30, 0.12) 0px -12px 30px,\n    rgba(255, 154, 30, 0.12) 0px 4px 6px, rgba(255, 154, 30, 0.17) 0px 12px 13px,\n    rgba(255, 154, 30, 0.09) 0px -3px 5px; */\n}\n\n.header_right button img {\n  height: 1.5rem;\n}\n/* ****** */\n/* ****** */\n\n/* ******* */\n/* ******* */\n/* Sidebar > starts here */\n/* ******* */\n/* ******* */\n\n/* ************ */\n/* Sidebar Main */\n\n.sidebar_main_container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: var(--main_containers_padding);\n  background-color: var(--background-color-sidebar-grey);\n  font-family: TravelJournal;\n}\n\nul,\nli {\n  list-style-type: none;\n  margin: 0;\n  padding-left: 0.5rem;\n}\n\n.sidebar_main_container .top_block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.sidebar_main_container .top_block img {\n  height: calc(5rem + 5vh);\n}\n.sidebar_main_container .top_block div {\n  margin-top: -1rem;\n  font-size: 0.9rem;\n}\n\n.sidebar_main_container .top_block div span {\n  animation: slide1 1s ease-in-out infinite;\n  display: inline-block;\n  color: var(--flixbus-green);\n}\n\n/* ************ */\n\n/* ****************** */\n/* Country Categories */\n\n.country_category {\n  font-size: 1.3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_menu_country_category {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  margin-bottom: 0.2rem;\n}\n\n.main_menu_country_category.active {\n  border-bottom: 3px var(--flixbus-orange) solid;\n  border-radius: 8px;\n}\n\n.sub_menu_country_category {\n  display: none;\n  flex-direction: column;\n  gap: var(--sidebar_icon_gap);\n}\n.sub_menu_country_category.active {\n  display: flex;\n}\n\n.sub_menu_country_category > li {\n  opacity: 0;\n}\n\n.sub_menu_country_category.active > li {\n  animation: translateX 1s ease-in-out forwards;\n}\n\n/* ****************** */\n\n/* ********* */\n/* Countries */\n.country {\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_menu_country {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  margin-bottom: 0.1rem;\n}\n\n.sub_menu_country {\n  display: none;\n  flex-direction: column;\n  gap: var(--sidebar_icon_gap);\n}\n.sub_menu_country.active {\n  display: flex;\n}\n\n.sub_menu_country > li {\n  opacity: 0;\n}\n\n.sub_menu_country.active > li {\n  animation: translateX 1s ease-in-out forwards;\n  animation-delay: 2s;\n}\n\n/* ********* */\n\n/* ****** */\n/* Cities */\n\n.city {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  font-size: 1rem;\n}\n\n/* ****** */\n\n/* ****************** */\n/* buttons and arrows */\n\n.arrow {\n  pointer-events: none;\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  transform: rotate(45deg);\n}\n.arrow.active {\n  transform: rotate(-135deg);\n}\n\n.arrow.arrow_skip_left {\n  width: 0.6rem;\n  height: 0.6rem;\n  pointer-events: none;\n  border-width: 0 9px 9px 0;\n  margin-left: 0.3rem;\n  transform: rotate(135deg);\n}\n\n.arrow.arrow_skip_right {\n  width: 0.6rem;\n  height: 0.6rem;\n  pointer-events: none;\n  border-width: 0 9px 9px 0;\n  margin-right: 0.3rem;\n  transform: rotate(-45deg);\n}\n\nbutton {\n  cursor: pointer;\n  border-radius: var(--border_radius);\n  border: none;\n  box-shadow: inset 0 0 0.2rem black;\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n}\nbutton:hover {\n  transform: scale(1.1);\n}\n\nbutton.extend_country_category,\nbutton.extend_country {\n  border: 2px black solid;\n  border-radius: 200px;\n  background-color: var(--flixbus-orange);\n}\n\n.city_button {\n  opacity: 0.4;\n  width: 4rem;\n}\n\n.available_city {\n  opacity: 1;\n  background-color: var(--flixbus-green);\n  font-weight: bold;\n}\n\n/* ****************** */\n\n/* ******* */\n/* ******* */\n/* Sidebar > ends here */\n/* ******* */\n/* ******* */\n\n/* ******* */\n/* ******* */\n/* Content > starts here */\n/* ******* */\n/* ******* */\n\n.content_main_container {\n  padding: 0 15vh;\n  padding-top: 0.2rem;\n  margin-bottom: 2rem;\n}\n\n.carousel {\n  display: flex;\n  flex-direction: column;\n  background-color: #232323;\n  padding: 0.2rem;\n\n  border-radius: 18px;\n  border: 0.2rem solid var(--neutral-black);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n.carousel.hovered_carousel {\n  border-color: var(--flixbus-orange);\n  box-shadow: rgba(255, 154, 30, 0.25) 0px 54px 55px,\n    rgba(255, 154, 30, 0.12) 0px -12px 30px,\n    rgba(255, 154, 30, 0.12) 0px 4px 6px, rgba(255, 154, 30, 0.17) 0px 12px 13px,\n    rgba(255, 154, 30, 0.09) 0px -3px 5px;\n}\n\n.carousel button {\n  height: 3rem;\n  width: 3rem;\n  align-self: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.3rem;\n}\n\n.carousel .city_name {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.6rem;\n  padding-bottom: 0.3rem;\n  font-size: 1.9rem;\n  font-weight: 700;\n  font-family: Skyfont;\n}\n\n.carousel .image_counter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.4rem;\n}\n\n.image_main_container {\n  /* flex: 1; */\n  display: flex;\n}\n\n.image_main_container .image_container {\n  flex: 1;\n  background-color: black;\n  border-radius: 18px;\n  border: 0.7rem solid var(--neutral-black);\n\n  aspect-ratio: 16/9;\n  max-height: 70vh;\n\n  display: flex;\n  overflow: hidden;\n}\n\n.image_main_container .image_container img {\n  height: 100%;\n  width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  /* add box shadow */\n\n  object-fit: cover;\n\n  display: none;\n  opacity: 0;\n}\n\n.image_main_container .image_container img.active_image {\n  display: block;\n  animation: growDown 1500ms ease-in-out forwards;\n}\n.image_main_container .image_container img.static_image {\n  display: block;\n  opacity: 1;\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n}\n\n.image_counter > div {\n  height: 0.5rem;\n  width: 0.5rem;\n  border: 3px solid black;\n  border-radius: 50px;\n  margin: 0.1rem 0.3rem;\n  background-color: var(--font_color_white);\n}\n\n.image_counter > div.active_image {\n  background-color: black;\n}\n/* ******* */\n/* ******* */\n/* Content > ends here */\n/* ******* */\n/* ******* */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  background-color: var(--neutral-black);\n  color: var(--font_color_white);\n  font-size: 0.7rem;\n  /* font-family: sans-serif; */\n\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* z-index: 2; */\n  /* text-shadow: none; */\n  border-top: 1px black solid;\n}\n\nfooter img {\n  height: 1.1rem;\n  scale: 1.2;\n  padding: 0;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n\n/* ****** */\n/* ****** */\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["@keyframes translateX {\n  0% {\n    opacity: 0;\n    transform: translateX(60px);\n  }\n\n  80% {\n    transform: translateX(-5px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes growDown {\n  0% {\n    opacity: 0;\n    transform: scaleX(0);\n  }\n  70% {\n    transform: scaleX(1.1);\n  }\n  100% {\n    opacity: 1;\n    transform: scaleX(1);\n  }\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(8px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-16px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(16px, 0, 0);\n  }\n}\n\n@keyframes slide1 {\n  0%,\n  100% {\n    transform: translate(0, 0);\n  }\n\n  50% {\n    transform: translate(0, 10px);\n  }\n}\n\n@font-face {\n  font-family: \"Skyfont\";\n  src: url(\"../assets/fonts/skyfont/Skyfont-NonCommercial.otf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Travel\";\n  src: url(\"../assets/fonts/Travel/Travel.otf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"TravelJournal\";\n  src: url(\"../assets/fonts/travel_journal/travel_journal.ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  font-size: 1.4rem;\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n\n  --font_color_white: #e8e6e3;\n  --main_container_gap: 1rem;\n\n  --hover-color-default: #d6d3d1;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n\n  --sidebar_icon_gap: 0.2rem;\n  --sidebar_item_animation_duration: 2s;\n  --main_containers_padding: 1rem;\n  --flixbus-orange: #ff9a1e;\n  --flixbus-green: #5dbe26;\n  --background-color-sidebar-grey: #232323;\n  --background-color-grey: #1a1a1a;\n  --neutral-black: #121212;\n}\n\nbody {\n  background-color: grey;\n\n  margin: 0;\n  padding: 0;\n  height: 100%;\n\n  background-color: var(--background-color-grey);\n  color: var(--font_color_white);\n}\n\n/* ************** */\n/* Main Container */\n/* ************** */\n\n.main_container {\n  min-height: 100vh;\n\n  display: grid;\n  grid-template-columns: 11rem 5fr;\n  grid-template-rows: 3.5rem auto 1.5rem;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\"\n    \"footer footer\";\n}\n\n.header_main_container {\n  grid-area: header;\n}\n.sidebar_main_container {\n  grid-area: sidebar;\n}\n.content_main_container {\n  grid-area: main;\n}\nfooter {\n  grid-area: footer;\n}\n/* ************** */\n/* ************** */\n/* ************** */\n\n/* ****** */\n/* Header */\n/* ****** */\n\n.header_main_container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--main_containers_padding);\n}\n\n.header_left {\n  flex: 1;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.header_left div {\n  font-family: Skyfont;\n  font-weight: bold;\n  font-size: 2.5rem;\n  margin-left: 1rem;\n}\n\n.header_right button {\n  width: 80px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  box-shadow: 2rem orange;\n  border-color: var(--flixbus-orange);\n  /* box-shadow: rgba(255, 154, 30, 0.25) 0px 54px 55px,\n    rgba(255, 154, 30, 0.12) 0px -12px 30px,\n    rgba(255, 154, 30, 0.12) 0px 4px 6px, rgba(255, 154, 30, 0.17) 0px 12px 13px,\n    rgba(255, 154, 30, 0.09) 0px -3px 5px; */\n}\n\n.header_right button img {\n  height: 1.5rem;\n}\n/* ****** */\n/* ****** */\n\n/* ******* */\n/* ******* */\n/* Sidebar > starts here */\n/* ******* */\n/* ******* */\n\n/* ************ */\n/* Sidebar Main */\n\n.sidebar_main_container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: var(--main_containers_padding);\n  background-color: var(--background-color-sidebar-grey);\n  font-family: TravelJournal;\n}\n\nul,\nli {\n  list-style-type: none;\n  margin: 0;\n  padding-left: 0.5rem;\n}\n\n.sidebar_main_container .top_block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.sidebar_main_container .top_block img {\n  height: calc(5rem + 5vh);\n}\n.sidebar_main_container .top_block div {\n  margin-top: -1rem;\n  font-size: 0.9rem;\n}\n\n.sidebar_main_container .top_block div span {\n  animation: slide1 1s ease-in-out infinite;\n  display: inline-block;\n  color: var(--flixbus-green);\n}\n\n/* ************ */\n\n/* ****************** */\n/* Country Categories */\n\n.country_category {\n  font-size: 1.3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_menu_country_category {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  margin-bottom: 0.2rem;\n}\n\n.main_menu_country_category.active {\n  border-bottom: 3px var(--flixbus-orange) solid;\n  border-radius: 8px;\n}\n\n.sub_menu_country_category {\n  display: none;\n  flex-direction: column;\n  gap: var(--sidebar_icon_gap);\n}\n.sub_menu_country_category.active {\n  display: flex;\n}\n\n.sub_menu_country_category > li {\n  opacity: 0;\n}\n\n.sub_menu_country_category.active > li {\n  animation: translateX 1s ease-in-out forwards;\n}\n\n/* ****************** */\n\n/* ********* */\n/* Countries */\n.country {\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_menu_country {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  margin-bottom: 0.1rem;\n}\n\n.sub_menu_country {\n  display: none;\n  flex-direction: column;\n  gap: var(--sidebar_icon_gap);\n}\n.sub_menu_country.active {\n  display: flex;\n}\n\n.sub_menu_country > li {\n  opacity: 0;\n}\n\n.sub_menu_country.active > li {\n  animation: translateX 1s ease-in-out forwards;\n  animation-delay: 2s;\n}\n\n/* ********* */\n\n/* ****** */\n/* Cities */\n\n.city {\n  display: flex;\n  gap: var(--sidebar_icon_gap);\n  font-size: 1rem;\n}\n\n/* ****** */\n\n/* ****************** */\n/* buttons and arrows */\n\n.arrow {\n  pointer-events: none;\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  transform: rotate(45deg);\n}\n.arrow.active {\n  transform: rotate(-135deg);\n}\n\n.arrow.arrow_skip_left {\n  width: 0.6rem;\n  height: 0.6rem;\n  pointer-events: none;\n  border-width: 0 9px 9px 0;\n  margin-left: 0.3rem;\n  transform: rotate(135deg);\n}\n\n.arrow.arrow_skip_right {\n  width: 0.6rem;\n  height: 0.6rem;\n  pointer-events: none;\n  border-width: 0 9px 9px 0;\n  margin-right: 0.3rem;\n  transform: rotate(-45deg);\n}\n\nbutton {\n  cursor: pointer;\n  border-radius: var(--border_radius);\n  border: none;\n  box-shadow: inset 0 0 0.2rem black;\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n}\nbutton:hover {\n  transform: scale(1.1);\n}\n\nbutton.extend_country_category,\nbutton.extend_country {\n  border: 2px black solid;\n  border-radius: 200px;\n  background-color: var(--flixbus-orange);\n}\n\n.city_button {\n  opacity: 0.4;\n  width: 4rem;\n}\n\n.available_city {\n  opacity: 1;\n  background-color: var(--flixbus-green);\n  font-weight: bold;\n}\n\n/* ****************** */\n\n/* ******* */\n/* ******* */\n/* Sidebar > ends here */\n/* ******* */\n/* ******* */\n\n/* ******* */\n/* ******* */\n/* Content > starts here */\n/* ******* */\n/* ******* */\n\n.content_main_container {\n  padding: 0 15vh;\n  padding-top: 0.2rem;\n  margin-bottom: 2rem;\n}\n\n.carousel {\n  display: flex;\n  flex-direction: column;\n  background-color: #232323;\n  padding: 0.2rem;\n\n  border-radius: 18px;\n  border: 0.2rem solid var(--neutral-black);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n.carousel.hovered_carousel {\n  border-color: var(--flixbus-orange);\n  box-shadow: rgba(255, 154, 30, 0.25) 0px 54px 55px,\n    rgba(255, 154, 30, 0.12) 0px -12px 30px,\n    rgba(255, 154, 30, 0.12) 0px 4px 6px, rgba(255, 154, 30, 0.17) 0px 12px 13px,\n    rgba(255, 154, 30, 0.09) 0px -3px 5px;\n}\n\n.carousel button {\n  height: 3rem;\n  width: 3rem;\n  align-self: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.3rem;\n}\n\n.carousel .city_name {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.6rem;\n  padding-bottom: 0.3rem;\n  font-size: 1.9rem;\n  font-weight: 700;\n  font-family: Skyfont;\n}\n\n.carousel .image_counter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.4rem;\n}\n\n.image_main_container {\n  /* flex: 1; */\n  display: flex;\n}\n\n.image_main_container .image_container {\n  flex: 1;\n  background-color: black;\n  border-radius: 18px;\n  border: 0.7rem solid var(--neutral-black);\n\n  aspect-ratio: 16/9;\n  max-height: 70vh;\n\n  display: flex;\n  overflow: hidden;\n}\n\n.image_main_container .image_container img {\n  height: 100%;\n  width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  /* add box shadow */\n\n  object-fit: cover;\n\n  display: none;\n  opacity: 0;\n}\n\n.image_main_container .image_container img.active_image {\n  display: block;\n  animation: growDown 1500ms ease-in-out forwards;\n}\n.image_main_container .image_container img.static_image {\n  display: block;\n  opacity: 1;\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n}\n\n.image_counter > div {\n  height: 0.5rem;\n  width: 0.5rem;\n  border: 3px solid black;\n  border-radius: 50px;\n  margin: 0.1rem 0.3rem;\n  background-color: var(--font_color_white);\n}\n\n.image_counter > div.active_image {\n  background-color: black;\n}\n/* ******* */\n/* ******* */\n/* Content > ends here */\n/* ******* */\n/* ******* */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  background-color: var(--neutral-black);\n  color: var(--font_color_white);\n  font-size: 0.7rem;\n  /* font-family: sans-serif; */\n\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* z-index: 2; */\n  /* text-shadow: none; */\n  border-top: 1px black solid;\n}\n\nfooter img {\n  height: 1.1rem;\n  scale: 1.2;\n  padding: 0;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n\n/* ****** */\n/* ****** */\n"],"sourceRoot":""}]);
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
/* harmony export */   "createCityImages": () => (/* binding */ createCityImages),
/* harmony export */   "resetImageIndex": () => (/* binding */ resetImageIndex),
/* harmony export */   "startAutoSlide": () => (/* binding */ startAutoSlide),
/* harmony export */   "stopAutoSlide": () => (/* binding */ stopAutoSlide)
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
function resetImageIndex() {
  imageIndex = 0;
}

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
  carousel.classList.add("hovered_carousel");
});
carousel.addEventListener("mouseleave", () => {
  startAutoSlide();
  carousel.classList.remove("hovered_carousel");
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
  // imageIndex = 0;
  // startAutoSlide();

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
            (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.stopAutoSlide)();
            (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.resetImageIndex)();
            (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.startAutoSlide)();
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
const albania = CreateCountry("Albania", ["Tirana", "Sarande"]);
const bulgaria = CreateCountry("Bulgaria", ["Sofia"]);
const montenegro = CreateCountry("Montenegro", [
  "Podgorica",
  "Budva",
  "Kotor",
  "Perast",
]);

const balkans = [
  greece,
  albania,
  montenegro,
  bulgaria,
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWMsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxXQUFXLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsVUFBVSxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxXQUFXLFlBQVksY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsT0FBTyxPQUFPLE1B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O0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGNkI7QUFDaUM7O0FBRU07O0FBRXBFLG1CQUFtQiwwRUFBVTtBQUM3Qjs7QUFFQSx3QkFBd0IsNEVBQVE7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrREFBK0QsV0FBVztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZLeUQ7O0FBRTZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFL0U7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsNEJBQTRCLHlEQUFROztBQUVwQztBQUNBLElBQUksaUZBQWE7QUFDakIsSUFBSSxpRkFBYTtBQUNqQixJQUFJLGlGQUFhO0FBQ2pCLElBQUksaUZBQWE7QUFDakIsSUFBSSxpRkFBYTtBQUNqQixJQUFJLGlGQUFhO0FBQ2pCOztBQUVBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBLG9CQUFvQixPQUFPO0FBQzNCLDJCQUEyQixLQUFLLFNBQVMsRUFBRTtBQUMzQyxvQkFBb0IsNEZBQVEsR0FBaUMsRUFBRSxLQUFLLEdBQUcsVUFBVSxLQUFLLENBQUM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUM2Qjs7QUFFcUM7QUFNN0M7O0FBRXJCLHdCQUF3Qix5REFBUTs7QUFFekI7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELE9BQU8sR0FBRztBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qix5Q0FBeUM7QUFDakU7QUFDQTtBQUNBLDREQUE0RCxRQUFRLEdBQUc7QUFDdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksMEVBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0NBQWdDO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDJEQUFnQjtBQUM5QixjQUFjO0FBQ2QsY0FBYywyREFBZ0I7QUFDOUI7O0FBRUE7QUFDQSxZQUFZLHdEQUFhO0FBQ3pCLFlBQVksMERBQWU7QUFDM0IsWUFBWSx5REFBYztBQUMxQixXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQSxpQ0FBaUMsaUJBQWlCLDZEQUFhO0FBQy9ELGlDQUFpQyxpQkFBaUIsNkRBQWE7QUFDL0QsaUNBQWlDLFVBQVUsdURBQU87QUFDbEQsaUNBQWlDLE9BQU8sb0RBQUk7O0FBRTVDO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly92aXNpdGVkX2NpdGllc19tYXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly92aXNpdGVkX2NpdGllc19tYXAvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92aXNpdGVkX2NpdGllc19tYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly92aXNpdGVkX2NpdGllc19tYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvIHN5bmMgXlxcLlxcLy4qXFwvLipcXC5qcGckIiwid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL3NyYy9qYXZhc2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvY2Fyb3VzZWxfY29uZmlnLmpzIiwid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly92aXNpdGVkX2NpdGllc19tYXAvLi9zcmMvamF2YXNjcmlwdC9tb2R1bGVzL3NpZGViYXJfY29uZmlnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvc2t5Zm9udC9Ta3lmb250LU5vbkNvbW1lcmNpYWwub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1RyYXZlbC9UcmF2ZWwub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL3RyYXZlbF9qb3VybmFsL3RyYXZlbF9qb3VybmFsLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyB0cmFuc2xhdGVYIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYwcHgpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dEb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB9XFxuICA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjEpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDEwJSxcXG4gIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XFxuICB9XFxuXFxuICAyMCUsXFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCk7XFxuICB9XFxuXFxuICAzMCUsXFxuICA1MCUsXFxuICA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNnB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTZweCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUxIHtcXG4gIDAlLFxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XFxuICB9XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTa3lmb250XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmF2ZWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlRyYXZlbEpvdXJuYWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzZXJpZjtcXG5cXG4gIC0tZm9udF9jb2xvcl93aGl0ZTogI2U4ZTZlMztcXG4gIC0tbWFpbl9jb250YWluZXJfZ2FwOiAxcmVtO1xcblxcbiAgLS1ob3Zlci1jb2xvci1kZWZhdWx0OiAjZDZkM2QxO1xcbiAgLS1ib3JkZXJfY29sb3JfZ3JleTogIzg1ODU4NTtcXG4gIC0tYm9yZGVyX3JhZGl1czogMTBweDtcXG5cXG4gIC0tc2lkZWJhcl9pY29uX2dhcDogMC4ycmVtO1xcbiAgLS1zaWRlYmFyX2l0ZW1fYW5pbWF0aW9uX2R1cmF0aW9uOiAycztcXG4gIC0tbWFpbl9jb250YWluZXJzX3BhZGRpbmc6IDFyZW07XFxuICAtLWZsaXhidXMtb3JhbmdlOiAjZmY5YTFlO1xcbiAgLS1mbGl4YnVzLWdyZWVuOiAjNWRiZTI2O1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGViYXItZ3JleTogIzIzMjMyMztcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1ncmV5OiAjMWExYTFhO1xcbiAgLS1uZXV0cmFsLWJsYWNrOiAjMTIxMjEyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1ncmV5KTtcXG4gIGNvbG9yOiB2YXIoLS1mb250X2NvbG9yX3doaXRlKTtcXG59XFxuXFxuLyogKioqKioqKioqKioqKiogKi9cXG4vKiBNYWluIENvbnRhaW5lciAqL1xcbi8qICoqKioqKioqKioqKioqICovXFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTFyZW0gNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzLjVyZW0gYXV0byAxLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwic2lkZWJhciBoZWFkZXJcXFwiXFxuICAgIFxcXCJzaWRlYmFyIG1haW5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuLmhlYWRlcl9tYWluX2NvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuLnNpZGViYXJfbWFpbl9jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbn1cXG4uY29udGVudF9tYWluX2NvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IG1haW47XFxufVxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG59XFxuLyogKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogSGVhZGVyICovXFxuLyogKioqKioqICovXFxuXFxuLmhlYWRlcl9tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLW1haW5fY29udGFpbmVyc19wYWRkaW5nKTtcXG59XFxuXFxuLmhlYWRlcl9sZWZ0IHtcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQgZGl2IHtcXG4gIGZvbnQtZmFtaWx5OiBTa3lmb250O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4uaGVhZGVyX3JpZ2h0IGJ1dHRvbiB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBib3gtc2hhZG93OiAycmVtIG9yYW5nZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmxpeGJ1cy1vcmFuZ2UpO1xcbiAgLyogYm94LXNoYWRvdzogcmdiYSgyNTUsIDE1NCwgMzAsIDAuMjUpIDBweCA1NHB4IDU1cHgsXFxuICAgIHJnYmEoMjU1LCAxNTQsIDMwLCAwLjEyKSAwcHggLTEycHggMzBweCxcXG4gICAgcmdiYSgyNTUsIDE1NCwgMzAsIDAuMTIpIDBweCA0cHggNnB4LCByZ2JhKDI1NSwgMTU0LCAzMCwgMC4xNykgMHB4IDEycHggMTNweCxcXG4gICAgcmdiYSgyNTUsIDE1NCwgMzAsIDAuMDkpIDBweCAtM3B4IDVweDsgKi9cXG59XFxuXFxuLmhlYWRlcl9yaWdodCBidXR0b24gaW1nIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG4vKiAqKioqKiogKi9cXG4vKiAqKioqKiogKi9cXG5cXG4vKiAqKioqKioqICovXFxuLyogKioqKioqKiAqL1xcbi8qIFNpZGViYXIgPiBzdGFydHMgaGVyZSAqL1xcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqICovXFxuLyogU2lkZWJhciBNYWluICovXFxuXFxuLnNpZGViYXJfbWFpbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogdmFyKC0tbWFpbl9jb250YWluZXJzX3BhZGRpbmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1zaWRlYmFyLWdyZXkpO1xcbiAgZm9udC1mYW1pbHk6IFRyYXZlbEpvdXJuYWw7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciAudG9wX2Jsb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXJfbWFpbl9jb250YWluZXIgLnRvcF9ibG9jayBpbWcge1xcbiAgaGVpZ2h0OiBjYWxjKDVyZW0gKyA1dmgpO1xcbn1cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciAudG9wX2Jsb2NrIGRpdiB7XFxuICBtYXJnaW4tdG9wOiAtMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciAudG9wX2Jsb2NrIGRpdiBzcGFuIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUxIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IHZhcigtLWZsaXhidXMtZ3JlZW4pO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBDb3VudHJ5IENhdGVnb3JpZXMgKi9cXG5cXG4uY291bnRyeV9jYXRlZ29yeSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW5fbWVudV9jb3VudHJ5X2NhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpZGViYXJfaWNvbl9nYXApO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4ubWFpbl9tZW51X2NvdW50cnlfY2F0ZWdvcnkuYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b206IDNweCB2YXIoLS1mbGl4YnVzLW9yYW5nZSkgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5zdWJfbWVudV9jb3VudHJ5X2NhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zaWRlYmFyX2ljb25fZ2FwKTtcXG59XFxuLnN1Yl9tZW51X2NvdW50cnlfY2F0ZWdvcnkuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdWJfbWVudV9jb3VudHJ5X2NhdGVnb3J5ID4gbGkge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnN1Yl9tZW51X2NvdW50cnlfY2F0ZWdvcnkuYWN0aXZlID4gbGkge1xcbiAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKiogKi9cXG4vKiBDb3VudHJpZXMgKi9cXG4uY291bnRyeSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW5fbWVudV9jb3VudHJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpZGViYXJfaWNvbl9nYXApO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcbn1cXG5cXG4uc3ViX21lbnVfY291bnRyeSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tc2lkZWJhcl9pY29uX2dhcCk7XFxufVxcbi5zdWJfbWVudV9jb3VudHJ5LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3ViX21lbnVfY291bnRyeSA+IGxpIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zdWJfbWVudV9jb3VudHJ5LmFjdGl2ZSA+IGxpIHtcXG4gIGFuaW1hdGlvbjogdHJhbnNsYXRlWCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XFxufVxcblxcbi8qICoqKioqKioqKiAqL1xcblxcbi8qICoqKioqKiAqL1xcbi8qIENpdGllcyAqL1xcblxcbi5jaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpZGViYXJfaWNvbl9nYXApO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiAqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBidXR0b25zIGFuZCBhcnJvd3MgKi9cXG5cXG4uYXJyb3cge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLmFycm93LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG59XFxuXFxuLmFycm93LmFycm93X3NraXBfbGVmdCB7XFxuICB3aWR0aDogMC42cmVtO1xcbiAgaGVpZ2h0OiAwLjZyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci13aWR0aDogMCA5cHggOXB4IDA7XFxuICBtYXJnaW4tbGVmdDogMC4zcmVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG59XFxuXFxuLmFycm93LmFycm93X3NraXBfcmlnaHQge1xcbiAgd2lkdGg6IDAuNnJlbTtcXG4gIGhlaWdodDogMC42cmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDAgOXB4IDlweCAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyX3JhZGl1cyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC4ycmVtIGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmJ1dHRvbi5leHRlbmRfY291bnRyeV9jYXRlZ29yeSxcXG5idXR0b24uZXh0ZW5kX2NvdW50cnkge1xcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsaXhidXMtb3JhbmdlKTtcXG59XFxuXFxuLmNpdHlfYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4uYXZhaWxhYmxlX2NpdHkge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsaXhidXMtZ3JlZW4pO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuLyogU2lkZWJhciA+IGVuZHMgaGVyZSAqL1xcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuXFxuLyogKioqKioqKiAqL1xcbi8qICoqKioqKiogKi9cXG4vKiBDb250ZW50ID4gc3RhcnRzIGhlcmUgKi9cXG4vKiAqKioqKioqICovXFxuLyogKioqKioqKiAqL1xcblxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMTV2aDtcXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLW5ldXRyYWwtYmxhY2spO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbn1cXG4uY2Fyb3VzZWwuaG92ZXJlZF9jYXJvdXNlbCB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWZsaXhidXMtb3JhbmdlKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAxNTQsIDMwLCAwLjI1KSAwcHggNTRweCA1NXB4LFxcbiAgICByZ2JhKDI1NSwgMTU0LCAzMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsXFxuICAgIHJnYmEoMjU1LCAxNTQsIDMwLCAwLjEyKSAwcHggNHB4IDZweCwgcmdiYSgyNTUsIDE1NCwgMzAsIDAuMTcpIDBweCAxMnB4IDEzcHgsXFxuICAgIHJnYmEoMjU1LCAxNTQsIDMwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxufVxcblxcbi5jYXJvdXNlbCBidXR0b24ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuM3JlbTtcXG59XFxuXFxuLmNhcm91c2VsIC5jaXR5X25hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxuICBmb250LXNpemU6IDEuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LWZhbWlseTogU2t5Zm9udDtcXG59XFxuXFxuLmNhcm91c2VsIC5pbWFnZV9jb3VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxufVxcblxcbi5pbWFnZV9tYWluX2NvbnRhaW5lciB7XFxuICAvKiBmbGV4OiAxOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmltYWdlX21haW5fY29udGFpbmVyIC5pbWFnZV9jb250YWluZXIge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJvcmRlcjogMC43cmVtIHNvbGlkIHZhcigtLW5ldXRyYWwtYmxhY2spO1xcblxcbiAgYXNwZWN0LXJhdGlvOiAxNi85O1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW1hZ2VfbWFpbl9jb250YWluZXIgLmltYWdlX2NvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgLyogYWRkIGJveCBzaGFkb3cgKi9cXG5cXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcblxcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5pbWFnZV9tYWluX2NvbnRhaW5lciAuaW1hZ2VfY29udGFpbmVyIGltZy5hY3RpdmVfaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbmltYXRpb246IGdyb3dEb3duIDE1MDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuLmltYWdlX21haW5fY29udGFpbmVyIC5pbWFnZV9jb250YWluZXIgaW1nLnN0YXRpY19pbWFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9wYWNpdHk6IDE7XFxuICBhbmltYXRpb246IHNoYWtlIDAuODJzIGN1YmljLWJlemllcigwLjM2LCAwLjA3LCAwLjE5LCAwLjk3KSBib3RoO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLmltYWdlX2NvdW50ZXIgPiBkaXYge1xcbiAgaGVpZ2h0OiAwLjVyZW07XFxuICB3aWR0aDogMC41cmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgbWFyZ2luOiAwLjFyZW0gMC4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udF9jb2xvcl93aGl0ZSk7XFxufVxcblxcbi5pbWFnZV9jb3VudGVyID4gZGl2LmFjdGl2ZV9pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLyogKioqKioqKiAqL1xcbi8qICoqKioqKiogKi9cXG4vKiBDb250ZW50ID4gZW5kcyBoZXJlICovXFxuLyogKioqKioqKiAqL1xcbi8qICoqKioqKiogKi9cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBmb290ZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbC1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0tZm9udF9jb2xvcl93aGl0ZSk7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIC8qIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAqL1xcblxcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIHotaW5kZXg6IDI7ICovXFxuICAvKiB0ZXh0LXNoYWRvdzogbm9uZTsgKi9cXG4gIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IDEuMXJlbTtcXG4gIHNjYWxlOiAxLjI7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogKioqKioqICovXFxuLyogKioqKioqICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsMEJBQTBC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QkFBZ0I7O0VBRWhCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1COztFQUVuQixpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdFQUFnRTtFQUNoRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCLFlBQVk7QUFDWixZQUFZOztBQUVaLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVzs7QUFFWDtFQUNFLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLDZCQUE2Qjs7RUFFN0Isd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsV0FBVztBQUNYLFdBQVdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyB0cmFuc2xhdGVYIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYwcHgpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dEb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB9XFxuICA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjEpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDEwJSxcXG4gIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XFxuICB9XFxuXFxuICAyMCUsXFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCk7XFxuICB9XFxuXFxuICAzMCUsXFxuICA1MCUsXFxuICA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNnB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTZweCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUxIHtcXG4gIDAlLFxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XFxuICB9XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTa3lmb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvc2t5Zm9udC9Ta3lmb250LU5vbkNvbW1lcmNpYWwub3RmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJhdmVsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvVHJhdmVsL1RyYXZlbC5vdGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmF2ZWxKb3VybmFsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvdHJhdmVsX2pvdXJuYWwvdHJhdmVsX2pvdXJuYWwudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcblxcbiAgLS1mb250X2NvbG9yX3doaXRlOiAjZThlNmUzO1xcbiAgLS1tYWluX2NvbnRhaW5lcl9nYXA6IDFyZW07XFxuXFxuICAtLWhvdmVyLWNvbG9yLWRlZmF1bHQ6ICNkNmQzZDE7XFxuICAtLWJvcmRlcl9jb2xvcl9ncmV5OiAjODU4NTg1O1xcbiAgLS1ib3JkZXJfcmFkaXVzOiAxMHB4O1xcblxcbiAgLS1zaWRlYmFyX2ljb25fZ2FwOiAwLjJyZW07XFxuICAtLXNpZGViYXJfaXRlbV9hbmltYXRpb25fZHVyYXRpb246IDJzO1xcbiAgLS1tYWluX2NvbnRhaW5lcnNfcGFkZGluZzogMXJlbTtcXG4gIC0tZmxpeGJ1cy1vcmFuZ2U6ICNmZjlhMWU7XFxuICAtLWZsaXhidXMtZ3JlZW46ICM1ZGJlMjY7XFxuICAtLWJhY2tncm91bmQtY29sb3Itc2lkZWJhci1ncmV5OiAjMjMyMzIzO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICMxYTFhMWE7XFxuICAtLW5ldXRyYWwtYmxhY2s6ICMxMjEyMTI7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG5cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWdyZXkpO1xcbiAgY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qIE1haW4gQ29udGFpbmVyICovXFxuLyogKioqKioqKioqKioqKiogKi9cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMXJlbSA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMuNXJlbSBhdXRvIDEuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJzaWRlYmFyIGhlYWRlclxcXCJcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBIZWFkZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tbWFpbl9jb250YWluZXJzX3BhZGRpbmcpO1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQge1xcbiAgZmxleDogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJfbGVmdCBkaXYge1xcbiAgZm9udC1mYW1pbHk6IFNreWZvbnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5oZWFkZXJfcmlnaHQgYnV0dG9uIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJveC1zaGFkb3c6IDJyZW0gb3JhbmdlO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mbGl4YnVzLW9yYW5nZSk7XFxuICAvKiBib3gtc2hhZG93OiByZ2JhKDI1NSwgMTU0LCAzMCwgMC4yNSkgMHB4IDU0cHggNTVweCxcXG4gICAgcmdiYSgyNTUsIDE1NCwgMzAsIDAuMTIpIDBweCAtMTJweCAzMHB4LFxcbiAgICByZ2JhKDI1NSwgMTU0LCAzMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMjU1LCAxNTQsIDMwLCAwLjE3KSAwcHggMTJweCAxM3B4LFxcbiAgICByZ2JhKDI1NSwgMTU0LCAzMCwgMC4wOSkgMHB4IC0zcHggNXB4OyAqL1xcbn1cXG5cXG4uaGVhZGVyX3JpZ2h0IGJ1dHRvbiBpbWcge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblxcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuLyogU2lkZWJhciA+IHN0YXJ0cyBoZXJlICovXFxuLyogKioqKioqKiAqL1xcbi8qICoqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKiogKi9cXG4vKiBTaWRlYmFyIE1haW4gKi9cXG5cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiB2YXIoLS1tYWluX2NvbnRhaW5lcnNfcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXNpZGViYXItZ3JleSk7XFxuICBmb250LWZhbWlseTogVHJhdmVsSm91cm5hbDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5zaWRlYmFyX21haW5fY29udGFpbmVyIC50b3BfYmxvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhcl9tYWluX2NvbnRhaW5lciAudG9wX2Jsb2NrIGltZyB7XFxuICBoZWlnaHQ6IGNhbGMoNXJlbSArIDV2aCk7XFxufVxcbi5zaWRlYmFyX21haW5fY29udGFpbmVyIC50b3BfYmxvY2sgZGl2IHtcXG4gIG1hcmdpbi10b3A6IC0xcmVtO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5zaWRlYmFyX21haW5fY29udGFpbmVyIC50b3BfYmxvY2sgZGl2IHNwYW4ge1xcbiAgYW5pbWF0aW9uOiBzbGlkZTEgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogdmFyKC0tZmxpeGJ1cy1ncmVlbik7XFxufVxcblxcbi8qICoqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKiAqL1xcbi8qIENvdW50cnkgQ2F0ZWdvcmllcyAqL1xcblxcbi5jb3VudHJ5X2NhdGVnb3J5IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbl9tZW51X2NvdW50cnlfY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tc2lkZWJhcl9pY29uX2dhcCk7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi5tYWluX21lbnVfY291bnRyeV9jYXRlZ29yeS5hY3RpdmUge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHZhcigtLWZsaXhidXMtb3JhbmdlKSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnN1Yl9tZW51X2NvdW50cnlfY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXNpZGViYXJfaWNvbl9nYXApO1xcbn1cXG4uc3ViX21lbnVfY291bnRyeV9jYXRlZ29yeS5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnN1Yl9tZW51X2NvdW50cnlfY2F0ZWdvcnkgPiBsaSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc3ViX21lbnVfY291bnRyeV9jYXRlZ29yeS5hY3RpdmUgPiBsaSB7XFxuICBhbmltYXRpb246IHRyYW5zbGF0ZVggMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKioqKiAqL1xcbi8qIENvdW50cmllcyAqL1xcbi5jb3VudHJ5IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbl9tZW51X2NvdW50cnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tc2lkZWJhcl9pY29uX2dhcCk7XFxuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxufVxcblxcbi5zdWJfbWVudV9jb3VudHJ5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zaWRlYmFyX2ljb25fZ2FwKTtcXG59XFxuLnN1Yl9tZW51X2NvdW50cnkuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdWJfbWVudV9jb3VudHJ5ID4gbGkge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnN1Yl9tZW51X2NvdW50cnkuYWN0aXZlID4gbGkge1xcbiAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXG59XFxuXFxuLyogKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogQ2l0aWVzICovXFxuXFxuLmNpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tc2lkZWJhcl9pY29uX2dhcCk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qICoqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKiAqL1xcbi8qIGJ1dHRvbnMgYW5kIGFycm93cyAqL1xcblxcbi5hcnJvdyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4uYXJyb3cuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcbn1cXG5cXG4uYXJyb3cuYXJyb3dfc2tpcF9sZWZ0IHtcXG4gIHdpZHRoOiAwLjZyZW07XFxuICBoZWlnaHQ6IDAuNnJlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDlweCA5cHggMDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcbn1cXG5cXG4uYXJyb3cuYXJyb3dfc2tpcF9yaWdodCB7XFxuICB3aWR0aDogMC42cmVtO1xcbiAgaGVpZ2h0OiAwLjZyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci13aWR0aDogMCA5cHggOXB4IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwLjJyZW0gYmxhY2s7XFxuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzZXJpZjtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuYnV0dG9uLmV4dGVuZF9jb3VudHJ5X2NhdGVnb3J5LFxcbmJ1dHRvbi5leHRlbmRfY291bnRyeSB7XFxuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmxpeGJ1cy1vcmFuZ2UpO1xcbn1cXG5cXG4uY2l0eV9idXR0b24ge1xcbiAgb3BhY2l0eTogMC40O1xcbiAgd2lkdGg6IDRyZW07XFxufVxcblxcbi5hdmFpbGFibGVfY2l0eSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmxpeGJ1cy1ncmVlbik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqKiAqL1xcbi8qICoqKioqKiogKi9cXG4vKiBTaWRlYmFyID4gZW5kcyBoZXJlICovXFxuLyogKioqKioqKiAqL1xcbi8qICoqKioqKiogKi9cXG5cXG4vKiAqKioqKioqICovXFxuLyogKioqKioqKiAqL1xcbi8qIENvbnRlbnQgPiBzdGFydHMgaGVyZSAqL1xcbi8qICoqKioqKiogKi9cXG4vKiAqKioqKioqICovXFxuXFxuLmNvbnRlbnRfbWFpbl9jb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxNXZoO1xcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5jYXJvdXNlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuXFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tbmV1dHJhbC1ibGFjayk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxufVxcbi5jYXJvdXNlbC5ob3ZlcmVkX2Nhcm91c2VsIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmxpeGJ1cy1vcmFuZ2UpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDE1NCwgMzAsIDAuMjUpIDBweCA1NHB4IDU1cHgsXFxuICAgIHJnYmEoMjU1LCAxNTQsIDMwLCAwLjEyKSAwcHggLTEycHggMzBweCxcXG4gICAgcmdiYSgyNTUsIDE1NCwgMzAsIDAuMTIpIDBweCA0cHggNnB4LCByZ2JhKDI1NSwgMTU0LCAzMCwgMC4xNykgMHB4IDEycHggMTNweCxcXG4gICAgcmdiYSgyNTUsIDE1NCwgMzAsIDAuMDkpIDBweCAtM3B4IDVweDtcXG59XFxuXFxuLmNhcm91c2VsIGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC4zcmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLmNpdHlfbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtZmFtaWx5OiBTa3lmb250O1xcbn1cXG5cXG4uY2Fyb3VzZWwgLmltYWdlX2NvdW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG59XFxuXFxuLmltYWdlX21haW5fY29udGFpbmVyIHtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaW1hZ2VfbWFpbl9jb250YWluZXIgLmltYWdlX2NvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYm9yZGVyOiAwLjdyZW0gc29saWQgdmFyKC0tbmV1dHJhbC1ibGFjayk7XFxuXFxuICBhc3BlY3QtcmF0aW86IDE2Lzk7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZV9tYWluX2NvbnRhaW5lciAuaW1hZ2VfY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICAvKiBhZGQgYm94IHNoYWRvdyAqL1xcblxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuXFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmltYWdlX21haW5fY29udGFpbmVyIC5pbWFnZV9jb250YWluZXIgaW1nLmFjdGl2ZV9pbWFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFuaW1hdGlvbjogZ3Jvd0Rvd24gMTUwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG4uaW1hZ2VfbWFpbl9jb250YWluZXIgLmltYWdlX2NvbnRhaW5lciBpbWcuc3RhdGljX2ltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG4gIGFuaW1hdGlvbjogc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4uaW1hZ2VfY291bnRlciA+IGRpdiB7XFxuICBoZWlnaHQ6IDAuNXJlbTtcXG4gIHdpZHRoOiAwLjVyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBtYXJnaW46IDAuMXJlbSAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250X2NvbG9yX3doaXRlKTtcXG59XFxuXFxuLmltYWdlX2NvdW50ZXIgPiBkaXYuYWN0aXZlX2ltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4vKiAqKioqKioqICovXFxuLyogKioqKioqKiAqL1xcbi8qIENvbnRlbnQgPiBlbmRzIGhlcmUgKi9cXG4vKiAqKioqKioqICovXFxuLyogKioqKioqKiAqL1xcblxcbi8qICoqKioqKiAqL1xcbi8qIGZvb3RlciAqL1xcbi8qICoqKioqKiAqL1xcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250X2NvbG9yX3doaXRlKTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgLyogZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7ICovXFxuXFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogei1pbmRleDogMjsgKi9cXG4gIC8qIHRleHQtc2hhZG93OiBub25lOyAqL1xcbiAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogMS4xcmVtO1xcbiAgc2NhbGU6IDEuMjtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmZvb3RlciBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiAqKioqKiogKi9cXG4vKiAqKioqKiogKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hdGhlbnMvYXRoZW5zX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9hdGhlbnMvYXRoZW5zX2ltYWdlXzAuanBnXCIsXG5cdFwiLi9hdGhlbnMvYXRoZW5zX2ltYWdlXzEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9hdGhlbnMvYXRoZW5zX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9hdGhlbnMvYXRoZW5zX2ltYWdlXzIuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9hdGhlbnMvYXRoZW5zX2ltYWdlXzIuanBnXCIsXG5cdFwiLi9hdGhlbnMvYXRoZW5zX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9hdGhlbnMvYXRoZW5zX2ltYWdlXzMuanBnXCIsXG5cdFwiLi9iZXJsaW4vYmVybGluX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzAuanBnXCIsXG5cdFwiLi9iZXJsaW4vYmVybGluX2ltYWdlXzEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9iZXJsaW4vYmVybGluX2ltYWdlXzIuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzIuanBnXCIsXG5cdFwiLi9iZXJsaW4vYmVybGluX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzMuanBnXCIsXG5cdFwiLi9iZXJsaW4vYmVybGluX2ltYWdlXzQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzQuanBnXCIsXG5cdFwiLi9iZXJsaW4vYmVybGluX2ltYWdlXzUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9iZXJsaW4vYmVybGluX2ltYWdlXzUuanBnXCIsXG5cdFwiLi9icnVzc2Vscy9icnVzc2Vsc19pbWFnZV8wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvYnJ1c3NlbHMvYnJ1c3NlbHNfaW1hZ2VfMC5qcGdcIixcblx0XCIuL2JydXNzZWxzL2JydXNzZWxzX2ltYWdlXzEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9icnVzc2Vscy9icnVzc2Vsc19pbWFnZV8xLmpwZ1wiLFxuXHRcIi4vYnJ1c3NlbHMvYnJ1c3NlbHNfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2JydXNzZWxzL2JydXNzZWxzX2ltYWdlXzIuanBnXCIsXG5cdFwiLi9icnVzc2Vscy9icnVzc2Vsc19pbWFnZV8zLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvYnJ1c3NlbHMvYnJ1c3NlbHNfaW1hZ2VfMy5qcGdcIixcblx0XCIuL2NvbG9nbmUvY29sb2duZV9pbWFnZV8wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvY29sb2duZS9jb2xvZ25lX2ltYWdlXzAuanBnXCIsXG5cdFwiLi9jb2xvZ25lL2NvbG9nbmVfaW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2NvbG9nbmUvY29sb2duZV9pbWFnZV8xLmpwZ1wiLFxuXHRcIi4vY29sb2duZS9jb2xvZ25lX2ltYWdlXzIuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9jb2xvZ25lL2NvbG9nbmVfaW1hZ2VfMi5qcGdcIixcblx0XCIuL2NvbG9nbmUvY29sb2duZV9pbWFnZV8zLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvY29sb2duZS9jb2xvZ25lX2ltYWdlXzMuanBnXCIsXG5cdFwiLi9mcmFua2Z1cnQvZnJhbmtmdXJ0X2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9mcmFua2Z1cnQvZnJhbmtmdXJ0X2ltYWdlXzAuanBnXCIsXG5cdFwiLi9mcmFua2Z1cnQvZnJhbmtmdXJ0X2ltYWdlXzEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9mcmFua2Z1cnQvZnJhbmtmdXJ0X2ltYWdlXzEuanBnXCIsXG5cdFwiLi9mcmFua2Z1cnQvZnJhbmtmdXJ0X2ltYWdlXzIuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9mcmFua2Z1cnQvZnJhbmtmdXJ0X2ltYWdlXzIuanBnXCIsXG5cdFwiLi9mcmFua2Z1cnQvZnJhbmtmdXJ0X2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9mcmFua2Z1cnQvZnJhbmtmdXJ0X2ltYWdlXzMuanBnXCIsXG5cdFwiLi9tdW5pY2gvbXVuaWNoX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9tdW5pY2gvbXVuaWNoX2ltYWdlXzAuanBnXCIsXG5cdFwiLi9tdW5pY2gvbXVuaWNoX2ltYWdlXzEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9tdW5pY2gvbXVuaWNoX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9tdW5pY2gvbXVuaWNoX2ltYWdlXzIuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9tdW5pY2gvbXVuaWNoX2ltYWdlXzIuanBnXCIsXG5cdFwiLi9tdW5pY2gvbXVuaWNoX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9tdW5pY2gvbXVuaWNoX2ltYWdlXzMuanBnXCIsXG5cdFwiLi9uYXBsZXMvbmFwbGVzX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9uYXBsZXMvbmFwbGVzX2ltYWdlXzAuanBnXCIsXG5cdFwiLi9uYXBsZXMvbmFwbGVzX2ltYWdlXzEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9uYXBsZXMvbmFwbGVzX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9uYXBsZXMvbmFwbGVzX2ltYWdlXzIuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9uYXBsZXMvbmFwbGVzX2ltYWdlXzIuanBnXCIsXG5cdFwiLi9uYXBsZXMvbmFwbGVzX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9uYXBsZXMvbmFwbGVzX2ltYWdlXzMuanBnXCIsXG5cdFwiLi9wYXJpcy9wYXJpc19pbWFnZV8wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvcGFyaXMvcGFyaXNfaW1hZ2VfMC5qcGdcIixcblx0XCIuL3BhcmlzL3BhcmlzX2ltYWdlXzEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9wYXJpcy9wYXJpc19pbWFnZV8xLmpwZ1wiLFxuXHRcIi4vcGFyaXMvcGFyaXNfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3BhcmlzL3BhcmlzX2ltYWdlXzIuanBnXCIsXG5cdFwiLi9wYXJpcy9wYXJpc19pbWFnZV8zLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvcGFyaXMvcGFyaXNfaW1hZ2VfMy5qcGdcIixcblx0XCIuL3BhcmlzL3BhcmlzX2ltYWdlXzQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9wYXJpcy9wYXJpc19pbWFnZV80LmpwZ1wiLFxuXHRcIi4vcHJhZ3VlL3ByYWd1ZV9pbWFnZV8wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvcHJhZ3VlL3ByYWd1ZV9pbWFnZV8wLmpwZ1wiLFxuXHRcIi4vcHJhZ3VlL3ByYWd1ZV9pbWFnZV8xLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvcHJhZ3VlL3ByYWd1ZV9pbWFnZV8xLmpwZ1wiLFxuXHRcIi4vcHJhZ3VlL3ByYWd1ZV9pbWFnZV8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvcHJhZ3VlL3ByYWd1ZV9pbWFnZV8yLmpwZ1wiLFxuXHRcIi4vcHJhZ3VlL3ByYWd1ZV9pbWFnZV8zLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvcHJhZ3VlL3ByYWd1ZV9pbWFnZV8zLmpwZ1wiLFxuXHRcIi4vcmlnYS9yaWdhX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9yaWdhL3JpZ2FfaW1hZ2VfMC5qcGdcIixcblx0XCIuL3JpZ2EvcmlnYV9pbWFnZV8xLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvcmlnYS9yaWdhX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9yaWdhL3JpZ2FfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3JpZ2EvcmlnYV9pbWFnZV8yLmpwZ1wiLFxuXHRcIi4vcmlnYS9yaWdhX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9yaWdhL3JpZ2FfaW1hZ2VfMy5qcGdcIixcblx0XCIuL3NoYW5naGFpL3NoYW5naGFpX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9zaGFuZ2hhaS9zaGFuZ2hhaV9pbWFnZV8wLmpwZ1wiLFxuXHRcIi4vc2hhbmdoYWkvc2hhbmdoYWlfaW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3NoYW5naGFpL3NoYW5naGFpX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9zaGFuZ2hhaS9zaGFuZ2hhaV9pbWFnZV8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvc2hhbmdoYWkvc2hhbmdoYWlfaW1hZ2VfMi5qcGdcIixcblx0XCIuL3NoYW5naGFpL3NoYW5naGFpX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9zaGFuZ2hhaS9zaGFuZ2hhaV9pbWFnZV8zLmpwZ1wiLFxuXHRcIi4vc2tvcGplL3Nrb3BqZV9pbWFnZV8wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvc2tvcGplL3Nrb3BqZV9pbWFnZV8wLmpwZ1wiLFxuXHRcIi4vc2tvcGplL3Nrb3BqZV9pbWFnZV8xLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvc2tvcGplL3Nrb3BqZV9pbWFnZV8xLmpwZ1wiLFxuXHRcIi4vc2tvcGplL3Nrb3BqZV9pbWFnZV8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvc2tvcGplL3Nrb3BqZV9pbWFnZV8yLmpwZ1wiLFxuXHRcIi4vc2tvcGplL3Nrb3BqZV9pbWFnZV8zLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvc2tvcGplL3Nrb3BqZV9pbWFnZV8zLmpwZ1wiLFxuXHRcIi4vc3RyYXNib3VyZy9zdHJhc2JvdXJnX2ltYWdlXzAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9zdHJhc2JvdXJnL3N0cmFzYm91cmdfaW1hZ2VfMC5qcGdcIixcblx0XCIuL3N0cmFzYm91cmcvc3RyYXNib3VyZ19pbWFnZV8xLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvc3RyYXNib3VyZy9zdHJhc2JvdXJnX2ltYWdlXzEuanBnXCIsXG5cdFwiLi9zdHJhc2JvdXJnL3N0cmFzYm91cmdfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3N0cmFzYm91cmcvc3RyYXNib3VyZ19pbWFnZV8yLmpwZ1wiLFxuXHRcIi4vc3RyYXNib3VyZy9zdHJhc2JvdXJnX2ltYWdlXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcy9zdHJhc2JvdXJnL3N0cmFzYm91cmdfaW1hZ2VfMy5qcGdcIixcblx0XCIuL3RoZXNzYWxvbmlraS90aGVzc2Fsb25pa2lfaW1hZ2VfMC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3RoZXNzYWxvbmlraS90aGVzc2Fsb25pa2lfaW1hZ2VfMC5qcGdcIixcblx0XCIuL3RoZXNzYWxvbmlraS90aGVzc2Fsb25pa2lfaW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3RoZXNzYWxvbmlraS90aGVzc2Fsb25pa2lfaW1hZ2VfMS5qcGdcIixcblx0XCIuL3RoZXNzYWxvbmlraS90aGVzc2Fsb25pa2lfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3RoZXNzYWxvbmlraS90aGVzc2Fsb25pa2lfaW1hZ2VfMi5qcGdcIixcblx0XCIuL3RoZXNzYWxvbmlraS90aGVzc2Fsb25pa2lfaW1hZ2VfMy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3RoZXNzYWxvbmlraS90aGVzc2Fsb25pa2lfaW1hZ2VfMy5qcGdcIixcblx0XCIuL3ZlbmljZS92ZW5pY2VfaW1hZ2VfMC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3ZlbmljZS92ZW5pY2VfaW1hZ2VfMC5qcGdcIixcblx0XCIuL3ZlbmljZS92ZW5pY2VfaW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3ZlbmljZS92ZW5pY2VfaW1hZ2VfMS5qcGdcIixcblx0XCIuL3ZlbmljZS92ZW5pY2VfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3ZlbmljZS92ZW5pY2VfaW1hZ2VfMi5qcGdcIixcblx0XCIuL3ZlbmljZS92ZW5pY2VfaW1hZ2VfMy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3ZlbmljZS92ZW5pY2VfaW1hZ2VfMy5qcGdcIixcblx0XCIuL3ZpZW5uYS92aWVubmFfaW1hZ2VfMC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3ZpZW5uYS92aWVubmFfaW1hZ2VfMC5qcGdcIixcblx0XCIuL3ZpZW5uYS92aWVubmFfaW1hZ2VfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3ZpZW5uYS92aWVubmFfaW1hZ2VfMS5qcGdcIixcblx0XCIuL3ZpZW5uYS92aWVubmFfaW1hZ2VfMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3ZpZW5uYS92aWVubmFfaW1hZ2VfMi5qcGdcIixcblx0XCIuL3ZpZW5uYS92aWVubmFfaW1hZ2VfMy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL3ZpZW5uYS92aWVubmFfaW1hZ2VfMy5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXR5X2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC8uKlxcXFwuanBnJFwiOyIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCB7IFNpZGViYXJET00gfSBmcm9tIFwiLi4vamF2YXNjcmlwdC9tb2R1bGVzL3NpZGViYXIuanNcIjtcblxuaW1wb3J0IHsgSW1hZ2VTUkMgfSBmcm9tIFwiLi4vamF2YXNjcmlwdC9tb2R1bGVzL2Nhcm91c2VsX2NvbmZpZy5qc1wiO1xuXG5jb25zdCBzaWRlYmFyRE9NID0gU2lkZWJhckRPTSgpO1xuc2lkZWJhckRPTS5jcmVhdGVTaWRlYmFyRE9NKCk7XG5cbmNvbnN0IGdldEltYWdlU1JDID0gbmV3IEltYWdlU1JDKCk7XG5cbmNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbFwiKTtcbmNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5X25hbWVcIik7XG5jb25zdCBpbWFnZU1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlX21haW5fY29udGFpbmVyXCIpO1xuY29uc3Qgc2tpcExlZnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnNraXBfbGVmdFwiKTtcbmNvbnN0IHNraXBSaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uc2tpcF9yaWdodFwiKTtcbnNraXBSaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzbGlkZUltYWdlKFwicmlnaHRcIik7XG59KTtcbnNraXBMZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNsaWRlSW1hZ2UoXCJsZWZ0XCIpO1xufSk7XG5cbmNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZV9jb250YWluZXJcIik7XG5jb25zdCBpbWFnZUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlX2NvdW50ZXJcIik7XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gKioqKioqKioqKioqKioqKioqKioqKipcblxubGV0IGltYWdlSW5kZXggPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0SW1hZ2VJbmRleCgpIHtcbiAgaW1hZ2VJbmRleCA9IDA7XG59XG5cbmZ1bmN0aW9uIHNsaWRlSW1hZ2UocmlnaHRfb3JfbGVmdCkge1xuICBpZiAocmlnaHRfb3JfbGVmdCA9PT0gXCJsZWZ0XCIpIHtcbiAgICBpbWFnZUluZGV4LS07XG4gIH0gZWxzZSBpZiAocmlnaHRfb3JfbGVmdCA9PT0gXCJyaWdodFwiKSB7XG4gICAgaW1hZ2VJbmRleCsrO1xuICB9XG5cbiAgbGV0IGFsbEltYWdlQ2lyY2xlcyA9IGltYWdlQ291bnRlci5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICBsZXQgYWxsSW1hZ2VzID0gaW1hZ2VDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcbiAgaWYgKGltYWdlSW5kZXggPj0gYWxsSW1hZ2VzLmxlbmd0aCkge1xuICAgIGltYWdlSW5kZXggPSAwO1xuICB9IGVsc2UgaWYgKGltYWdlSW5kZXggPT09IC0xKSB7XG4gICAgaW1hZ2VJbmRleCA9IGFsbEltYWdlcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgYWxsSW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgaWYgKGltYWdlLmRhdGFzZXQuaW1hZ2VJbmRleCA9PT0gaW1hZ2VJbmRleC50b1N0cmluZygpKSB7XG4gICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX2ltYWdlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlX2ltYWdlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgYWxsSW1hZ2VDaXJjbGVzLmZvckVhY2goKGltYWdlQ2lyY2xlKSA9PiB7XG4gICAgaWYgKGltYWdlQ2lyY2xlLmRhdGFzZXQuaW1hZ2VJbmRleCA9PT0gaW1hZ2VJbmRleC50b1N0cmluZygpKSB7XG4gICAgICBpbWFnZUNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX2ltYWdlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZUNpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlX2ltYWdlXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8gKioqKioqKioqKioqKioqKipcbi8vIGFkZGluZyBhdXRvIHNsaWRlXG5sZXQgYXV0b1NsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhdXRvU2xpZGUsIDgwMDApO1xuXG5mdW5jdGlvbiBhdXRvU2xpZGUoKSB7XG4gIHNsaWRlSW1hZ2UoXCJyaWdodFwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdG9wQXV0b1NsaWRlKCkge1xuICBjbGVhckludGVydmFsKGF1dG9TbGlkZUludGVydmFsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEF1dG9TbGlkZSgpIHtcbiAgYXV0b1NsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhdXRvU2xpZGUsIDgwMDApO1xufVxuXG5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgc3RvcEF1dG9TbGlkZSgpO1xuICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZF9jYXJvdXNlbFwiKTtcbn0pO1xuY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICBzdGFydEF1dG9TbGlkZSgpO1xuICBjYXJvdXNlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZF9jYXJvdXNlbFwiKTtcbn0pO1xuXG4vLyAqKioqKioqKioqKioqKioqKlxuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIGFkZGluZyBpbWFnZXMgdG8gSFRNTCBmcm9tIGNpdHkgYnV0dG9uc1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmxldCBiZXJsaW5JbWFnZXNMaXN0ID0gZ2V0SW1hZ2VTUkMuYmVybGluSW1hZ2VzTGlzdDtcbmxldCBkZWZhdWx0SW1hZ2VzTGlzdCA9IGdldEltYWdlU1JDLmRlZmF1bHRJbWFnZXNMaXN0O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2l0eUltYWdlcyhpbWFnZXNfbGlzdCkge1xuICBpbWFnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBpbWFnZUNvdW50ZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgLy8gaW1hZ2VJbmRleCA9IDA7XG4gIC8vIHN0YXJ0QXV0b1NsaWRlKCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXNfbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1hZ2VzX2xpc3RbaV0pO1xuICAgIG5ld0ltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImJlcmxpblwiKTtcbiAgICBuZXdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWltYWdlLWluZGV4XCIsIGkpO1xuICAgIG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9pbWFnZVwiKTtcbiAgICB9XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuXG4gICAgY29uc3QgbmV3SW1hZ2VDb3VudGVyQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdJbWFnZUNvdW50ZXJDaXJjbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1pbWFnZS1pbmRleFwiLCBpKTtcblxuICAgIGlmIChpbWFnZXNfbGlzdC5sZW5ndGggPD0gMSkge1xuICAgICAgbmV3SW1hZ2VDb3VudGVyQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3BhY2l0eTogMDtcIik7XG4gICAgICBsZXQgc2VsZWN0ZWRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmltYWdlX21haW5fY29udGFpbmVyIC5pbWFnZV9jb250YWluZXIgaW1nXCJcbiAgICAgICk7XG4gICAgICBzZWxlY3RlZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJzdGF0aWNfaW1hZ2VcIik7XG5cbiAgICAgIC8vIHNlbGVjdGVkSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJhbmltYXRpb246IG5vbmU7IG9wYWNpdHk6IDE7XCIpO1xuICAgIH1cbiAgICBpZiAoaSA9PT0gMCAmJiBpbWFnZXNfbGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICBuZXdJbWFnZUNvdW50ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9pbWFnZVwiKTtcbiAgICB9XG4gICAgaW1hZ2VDb3VudGVyLmFwcGVuZENoaWxkKG5ld0ltYWdlQ291bnRlckNpcmNsZSk7XG4gIH1cbn1cblxuY3JlYXRlQ2l0eUltYWdlcyhkZWZhdWx0SW1hZ2VzTGlzdCk7XG5jaXR5TmFtZS5pbm5lckhUTUwgPSBcIiYjODY1NjsgQ2hlY2sgdGhlIGNpdGllcyEhICYjODY1NjtcIjtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmZ1bmN0aW9uIGFkZEF1ZGlvQ29uZmlnKCkge1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTtcbiAgY29uc3QgYXVkaW9JY29uT24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmF1ZGlvX2J1dHRvbiAuaWNvbl9vblwiKTtcbiAgY29uc3QgYXVkaW9JY29uT2ZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hdWRpb19idXR0b24gLmljb25fb2ZmXCIpO1xuICBhdWRpb0ljb25Pbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IGF1ZGlvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hdWRpb19idXR0b25cIik7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgICBpZiAoYXVkaW8ucGF1c2VkKSB7XG4gICAgICBhdWRpb0ljb25Pbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgYXVkaW9JY29uT2ZmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXVkaW9JY29uT24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgYXVkaW9JY29uT2ZmLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBhdWRpby5wYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIGF1ZGlvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlUGxheSgpO1xuICB9KTtcbn1cblxuYWRkQXVkaW9Db25maWcoKTtcbiIsImltcG9ydCB0dkdsaXRjaCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy90dl9zdGF0aWMuZ2lmXCI7XG5cbmltcG9ydCBiZXJsaW5JbWFnZV8wIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMC5qcGdcIjtcbmltcG9ydCBiZXJsaW5JbWFnZV8xIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMS5qcGdcIjtcbmltcG9ydCBiZXJsaW5JbWFnZV8yIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMi5qcGdcIjtcbmltcG9ydCBiZXJsaW5JbWFnZV8zIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfMy5qcGdcIjtcbmltcG9ydCBiZXJsaW5JbWFnZV80IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfNC5qcGdcIjtcbmltcG9ydCBiZXJsaW5JbWFnZV81IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2NpdHlfaW1hZ2VzL2Jlcmxpbi9iZXJsaW5faW1hZ2VfNS5qcGdcIjtcblxuZXhwb3J0IGNvbnN0IGNpdGllc1dpdGhJbWFnZXMgPSBbXG4gIFwiYmVybGluXCIsXG4gIFwiZnJhbmtmdXJ0XCIsXG4gIFwibXVuaWNoXCIsXG4gIFwiY29sb2duZVwiLFxuICBcInBhcmlzXCIsXG4gIFwic3RyYXNib3VyZ1wiLFxuICBcImJydXNzZWxzXCIsXG4gIFwidmllbm5hXCIsXG4gIFwidmVuaWNlXCIsXG4gIFwibmFwbGVzXCIsXG4gIFwicHJhZ3VlXCIsXG4gIFwicmlnYVwiLFxuICBcInNrb3BqZVwiLFxuICBcImF0aGVuc1wiLFxuICBcInRoZXNzYWxvbmlraVwiLFxuICBcInNoYW5naGFpXCIsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gSW1hZ2VTUkMoKSB7XG4gIHRoaXMuZGVmYXVsdEltYWdlc0xpc3QgPSBbdHZHbGl0Y2hdO1xuXG4gIHRoaXMuYmVybGluSW1hZ2VzTGlzdCA9IFtcbiAgICBiZXJsaW5JbWFnZV8wLFxuICAgIGJlcmxpbkltYWdlXzEsXG4gICAgYmVybGluSW1hZ2VfMixcbiAgICBiZXJsaW5JbWFnZV8zLFxuICAgIGJlcmxpbkltYWdlXzQsXG4gICAgYmVybGluSW1hZ2VfNSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IGNpdGllc1dpdGhJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2l0eSA9IGNpdGllc1dpdGhJbWFnZXNbaV07XG4gICAgY29uc3QgY2l0eUxpc3ROYW1lID0gYCR7Y2l0eX1JbWFnZXNMaXN0YDtcbiAgICB0aGlzW2NpdHlMaXN0TmFtZV0gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgY29uc3QgaW1hZ2VOYW1lID0gYCR7Y2l0eX1faW1hZ2VfJHtpfWA7XG4gICAgICBjb25zdCBpbWFnZSA9IHJlcXVpcmUoYC4uLy4uL2Fzc2V0cy9pbWFnZXMvY2l0eV9pbWFnZXMvJHtjaXR5fS8ke2ltYWdlTmFtZX0uanBnYCk7XG5cbiAgICAgIHRoaXNbY2l0eUxpc3ROYW1lXS5wdXNoKGltYWdlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIHdlc3Rlcm5FdXJvcGUsXG4gIGVhc3Rlcm5FdXJvcGUsXG4gIGJhbGthbnMsXG4gIGFzaWEsXG59IGZyb20gXCIuL3NpZGViYXJfY29uZmlnLmpzXCI7XG5cbmltcG9ydCB7IEltYWdlU1JDLCBjaXRpZXNXaXRoSW1hZ2VzIH0gZnJvbSBcIi4vY2Fyb3VzZWxfY29uZmlnLmpzXCI7XG5pbXBvcnQge1xuICBjcmVhdGVDaXR5SW1hZ2VzLFxuICBzdGFydEF1dG9TbGlkZSxcbiAgc3RvcEF1dG9TbGlkZSxcbiAgcmVzZXRJbWFnZUluZGV4LFxufSBmcm9tIFwiLi4vaW5kZXguanNcIjtcblxuY29uc3QgZ2V0SW1hZ2VTUkMgPSBuZXcgSW1hZ2VTUkMoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJET00oKSB7XG4gIGNvbnN0IHNpZGViYXJNYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5zaWRlYmFyX21haW5fY29udGFpbmVyXCJcbiAgKTtcblxuICBmdW5jdGlvbiBjcmVhdGVTaWRlYmFyRE9NKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvdW50cnlDYXRlZ29yeShjb3VudHJ5Q2F0ZWdvcnlOYW1lLCBjb3VudHJpZXNBcnJheSkge1xuICAgICAgY29uc3QgbmV3Q291bnRyeUNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbmV3Q291bnRyeUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5X2NhdGVnb3J5XCIpO1xuICAgICAgc2lkZWJhck1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q291bnRyeUNhdGVnb3J5KTtcblxuICAgICAgLy8gKioqKioqXG4gICAgICBjb25zdCBuZXdtYWluTWVudUNvdW50cnlDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdtYWluTWVudUNvdW50cnlDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwibWFpbl9tZW51X2NvdW50cnlfY2F0ZWdvcnlcIik7XG4gICAgICBuZXdDb3VudHJ5Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQobmV3bWFpbk1lbnVDb3VudHJ5Q2F0ZWdvcnkpO1xuXG4gICAgICBjb25zdCBuZXdDb3VudHJ5Q2F0ZWdvcnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0NvdW50cnlDYXRlZ29yeU5hbWUuY2xhc3NMaXN0LmFkZChcImNvdW50cnlfY2F0ZWdvcnlfbmFtZVwiKTtcbiAgICAgIG5ld0NvdW50cnlDYXRlZ29yeU5hbWUuaW5uZXJIVE1MID0gY291bnRyeUNhdGVnb3J5TmFtZTtcbiAgICAgIG5ld21haW5NZW51Q291bnRyeUNhdGVnb3J5LmFwcGVuZENoaWxkKG5ld0NvdW50cnlDYXRlZ29yeU5hbWUpO1xuXG4gICAgICBjb25zdCBuZXdCdXR0b25FeHRlbmRDb3VudHJ5Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbmV3QnV0dG9uRXh0ZW5kQ291bnRyeUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJleHRlbmRfY291bnRyeV9jYXRlZ29yeVwiKTtcbiAgICAgIG5ld21haW5NZW51Q291bnRyeUNhdGVnb3J5LmFwcGVuZENoaWxkKG5ld0J1dHRvbkV4dGVuZENvdW50cnlDYXRlZ29yeSk7XG5cbiAgICAgIGNvbnN0IG5ld0Fycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICBuZXdBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3dcIik7XG4gICAgICBuZXdCdXR0b25FeHRlbmRDb3VudHJ5Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQobmV3QXJyb3cpO1xuXG4gICAgICAvLyAqKioqKipcbiAgICAgIGNvbnN0IG5ld1N1Yk1lbnVDb3VudHJ5Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICBuZXdTdWJNZW51Q291bnRyeUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJzdWJfbWVudV9jb3VudHJ5X2NhdGVnb3J5XCIpO1xuICAgICAgbmV3Q291bnRyeUNhdGVnb3J5LmFwcGVuZENoaWxkKG5ld1N1Yk1lbnVDb3VudHJ5Q2F0ZWdvcnkpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50cmllc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5ld0NvdW50cnkuY2xhc3NMaXN0LmFkZChcImNvdW50cnlcIik7XG4gICAgICAgIG5ld0NvdW50cnkuY2xhc3NMaXN0LmFkZChjb3VudHJpZXNBcnJheVtpXS5jb3VudHJ5TmFtZSk7XG4gICAgICAgIG5ld0NvdW50cnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGFuaW1hdGlvbi1kZWxheTogJHtpICogODB9bXM7YCk7XG4gICAgICAgIG5ld1N1Yk1lbnVDb3VudHJ5Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQobmV3Q291bnRyeSk7XG5cbiAgICAgICAgLy8gKioqXG4gICAgICAgIGNvbnN0IG5ld01haW5NZW51Q291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld01haW5NZW51Q291bnRyeS5jbGFzc0xpc3QuYWRkKFwibWFpbl9tZW51X2NvdW50cnlcIik7XG4gICAgICAgIG5ld0NvdW50cnkuYXBwZW5kQ2hpbGQobmV3TWFpbk1lbnVDb3VudHJ5KTtcblxuICAgICAgICBjb25zdCBuZXdDb3VudHJ5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld0NvdW50cnlOYW1lLmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5X25hbWVcIik7XG4gICAgICAgIG5ld0NvdW50cnlOYW1lLmlubmVySFRNTCA9IGNvdW50cmllc0FycmF5W2ldLmNvdW50cnlOYW1lO1xuICAgICAgICBuZXdNYWluTWVudUNvdW50cnkuYXBwZW5kQ2hpbGQobmV3Q291bnRyeU5hbWUpO1xuXG4gICAgICAgIGNvbnN0IG5ld0J1dHRvbkV4dGVuZENvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBuZXdCdXR0b25FeHRlbmRDb3VudHJ5LmNsYXNzTGlzdC5hZGQoXCJleHRlbmRfY291bnRyeVwiKTtcbiAgICAgICAgbmV3TWFpbk1lbnVDb3VudHJ5LmFwcGVuZENoaWxkKG5ld0J1dHRvbkV4dGVuZENvdW50cnkpO1xuXG4gICAgICAgIGNvbnN0IG5ld0Fycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIG5ld0Fycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvd1wiKTtcbiAgICAgICAgbmV3QnV0dG9uRXh0ZW5kQ291bnRyeS5hcHBlbmRDaGlsZChuZXdBcnJvdyk7XG5cbiAgICAgICAgLy8gKioqXG4gICAgICAgIGNvbnN0IG5ld1N1Yk1lbnVDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBuZXdTdWJNZW51Q291bnRyeS5jbGFzc0xpc3QuYWRkKFwic3ViX21lbnVfY291bnRyeVwiKTtcbiAgICAgICAgbmV3Q291bnRyeS5hcHBlbmRDaGlsZChuZXdTdWJNZW51Q291bnRyeSk7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudHJpZXNBcnJheVtpXS5jaXRpZXNMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3QgbmV3Q2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBuZXdDaXR5LmNsYXNzTGlzdC5hZGQoXCJjaXR5XCIpO1xuICAgICAgICAgIG5ld0NpdHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGFuaW1hdGlvbi1kZWxheTogJHtqICogMTUwfW1zO2ApO1xuICAgICAgICAgIG5ld1N1Yk1lbnVDb3VudHJ5LmFwcGVuZENoaWxkKG5ld0NpdHkpO1xuXG4gICAgICAgICAgY29uc3QgbmV3QnV0dG9uQ2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgbmV3QnV0dG9uQ2l0eS5jbGFzc0xpc3QuYWRkKFwiY2l0eV9idXR0b25cIik7XG4gICAgICAgICAgbmV3QnV0dG9uQ2l0eS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgY291bnRyaWVzQXJyYXlbaV0uY2l0aWVzTGlzdFtqXS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNpdGllc1dpdGhJbWFnZXMuaW5jbHVkZXMoXG4gICAgICAgICAgICAgIGNvdW50cmllc0FycmF5W2ldLmNpdGllc0xpc3Rbal0udG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbmV3QnV0dG9uQ2l0eS5jbGFzc0xpc3QuYWRkKFwiYXZhaWxhYmxlX2NpdHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0J1dHRvbkNpdHkuaW5uZXJIVE1MID0gYCR7Y291bnRyaWVzQXJyYXlbaV0uY2l0aWVzTGlzdFtqXX1gO1xuICAgICAgICAgIG5ld0NpdHkuYXBwZW5kQ2hpbGQobmV3QnV0dG9uQ2l0eSk7XG5cbiAgICAgICAgICBuZXdCdXR0b25DaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgPiAuY2l0eV9uYW1lXCIpO1xuICAgICAgICAgICAgY2l0eU5hbWUuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAgICAgbGV0IG5hbWVGb3JJbWFnZUxpc3QgPVxuICAgICAgICAgICAgICBjb3VudHJpZXNBcnJheVtpXS5jaXRpZXNMaXN0W2pdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgaW1hZ2VMaXN0TmFtZSA9IG5hbWVGb3JJbWFnZUxpc3QgKyBcIkltYWdlc0xpc3RcIjtcblxuICAgICAgICAgICAgaWYgKGdldEltYWdlU1JDW2ltYWdlTGlzdE5hbWVdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjcmVhdGVDaXR5SW1hZ2VzKGdldEltYWdlU1JDW2ltYWdlTGlzdE5hbWVdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNyZWF0ZUNpdHlJbWFnZXMoZ2V0SW1hZ2VTUkMuZGVmYXVsdEltYWdlc0xpc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaXR5TmFtZS5pbm5lckhUTUwgPSBjb3VudHJpZXNBcnJheVtpXS5jaXRpZXNMaXN0W2pdO1xuICAgICAgICAgICAgc3RvcEF1dG9TbGlkZSgpO1xuICAgICAgICAgICAgcmVzZXRJbWFnZUluZGV4KCk7XG4gICAgICAgICAgICBzdGFydEF1dG9TbGlkZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU2lkZWJhckV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgY29uc3QgZXh0ZW5kQ291bnRyeUNhdGVnb3J5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIFwiYnV0dG9uLmV4dGVuZF9jb3VudHJ5X2NhdGVnb3J5XCJcbiAgICAgICk7XG5cbiAgICAgIGV4dGVuZENvdW50cnlDYXRlZ29yeUJ1dHRvbnMuZm9yRWFjaCgoZXh0ZW5kQ291bnRyeUNhdGVnb3J5QnV0dG9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50cnlDYXRlZ29yeSA9XG4gICAgICAgICAgZXh0ZW5kQ291bnRyeUNhdGVnb3J5QnV0dG9uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgbWFpbk1lbnVDb3VudHJ5Q2F0ZWdvcnkgPSBleHRlbmRDb3VudHJ5Q2F0ZWdvcnlCdXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3Qgc3ViTWVudUNvdW50cnlDYXRlZ29yeSA9IGNvdW50cnlDYXRlZ29yeS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLnN1Yl9tZW51X2NvdW50cnlfY2F0ZWdvcnlcIlxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGFycm93SWNvbkNvdW50cnlDYXRlZ29yeSA9XG4gICAgICAgICAgZXh0ZW5kQ291bnRyeUNhdGVnb3J5QnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dcIik7XG5cbiAgICAgICAgY29uc3QgY2hpbGRBcnJvd0ljb25zQ291bnRyeUNhdGVnb3J5ID1cbiAgICAgICAgICBjb3VudHJ5Q2F0ZWdvcnkucXVlcnlTZWxlY3RvckFsbChcIi5hcnJvd1wiKTtcblxuICAgICAgICBjb25zdCBzdWJNZW51c0NvdW50cmllcyA9XG4gICAgICAgICAgY291bnRyeUNhdGVnb3J5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ViX21lbnVfY291bnRyeVwiKTtcblxuICAgICAgICBleHRlbmRDb3VudHJ5Q2F0ZWdvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBtYWluTWVudUNvdW50cnlDYXRlZ29yeS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIHN1Yk1lbnVDb3VudHJ5Q2F0ZWdvcnkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICBhcnJvd0ljb25Db3VudHJ5Q2F0ZWdvcnkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICBpZiAoIXN1Yk1lbnVDb3VudHJ5Q2F0ZWdvcnkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICBzdWJNZW51c0NvdW50cmllcy5mb3JFYWNoKChzdWJNZW51Q291bnRyaWVzKSA9PiB7XG4gICAgICAgICAgICAgIHN1Yk1lbnVDb3VudHJpZXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2hpbGRBcnJvd0ljb25zQ291bnRyeUNhdGVnb3J5LmZvckVhY2goKGNoaWxkQXJyb3cpID0+IHtcbiAgICAgICAgICAgICAgY2hpbGRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyAqKioqKipcblxuICAgICAgY29uc3QgZXh0ZW5kQ291bnRyeUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcImJ1dHRvbi5leHRlbmRfY291bnRyeVwiXG4gICAgICApO1xuXG4gICAgICBleHRlbmRDb3VudHJ5QnV0dG9ucy5mb3JFYWNoKChleHRlbmRDb3VudHJ5QnV0dG9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50cnkgPSBleHRlbmRDb3VudHJ5QnV0dG9uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3Qgc3ViTWVudUNvdW50cnkgPSBjb3VudHJ5LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViX21lbnVfY291bnRyeVwiKTtcbiAgICAgICAgY29uc3QgYXJyb3dJY29uQ291bnRyeSA9IGV4dGVuZENvdW50cnlCdXR0b24ucXVlcnlTZWxlY3RvcihcIi5hcnJvd1wiKTtcblxuICAgICAgICBleHRlbmRDb3VudHJ5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgc3ViTWVudUNvdW50cnkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICBhcnJvd0ljb25Db3VudHJ5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ291bnRyeUNhdGVnb3J5KFwiJm5ic3A7V2VzdGVybiBFdXJvcGVcIiwgd2VzdGVybkV1cm9wZSk7XG4gICAgY3JlYXRlQ291bnRyeUNhdGVnb3J5KFwiJm5ic3A7RWFzdGVybiBFdXJvcGVcIiwgZWFzdGVybkV1cm9wZSk7XG4gICAgY3JlYXRlQ291bnRyeUNhdGVnb3J5KFwiJm5ic3A7QmFsa2Fuc1wiLCBiYWxrYW5zKTtcbiAgICBjcmVhdGVDb3VudHJ5Q2F0ZWdvcnkoXCImbmJzcDtBc2lhXCIsIGFzaWEpO1xuXG4gICAgYWRkU2lkZWJhckV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICByZXR1cm4geyBjcmVhdGVTaWRlYmFyRE9NIH07XG59XG4iLCJmdW5jdGlvbiBDcmVhdGVDb3VudHJ5KGNvdW50cnlfbmFtZSwgY2l0aWVzX2xpc3QpIHtcbiAgbGV0IGNvdW50cnlOYW1lID0gY291bnRyeV9uYW1lO1xuICBsZXQgY2l0aWVzTGlzdCA9IGNpdGllc19saXN0O1xuXG4gIHJldHVybiB7IGNvdW50cnlOYW1lLCBjaXRpZXNMaXN0IH07XG59XG5cbmNvbnN0IGdlcm1hbnlDaXRpZXMgPSBbXG4gIFwiQmVybGluXCIsXG4gIFwiTXVuaWNoXCIsXG4gIFwiQ29sb2duZVwiLFxuICBcIkZyYW5rZnVydFwiLFxuICBcIlN0dXR0Z2FydFwiLFxuICBcIkTDvHNzZWxkb3JmXCIsXG4gIFwiRHJlc2RlblwiLFxuICBcIkhlaWRlbGJlcmdcIixcbiAgXCJOdXJlbWJlcmdcIixcbiAgXCJHw7Z0dGluZ2VuXCIsXG5dO1xuXG5jb25zdCBncmVlY2VDaXRpZXMgPSBbXG4gIFwiQXRoZW5zXCIsXG4gIFwiVGhlc3NhbG9uaWtpXCIsXG4gIFwiQ29yaW50aFwiLFxuICBcIkthc3RvcmlhXCIsXG4gIFwiVm9sb3NcIixcbiAgXCJTa2lhdGhvc1wiLFxuICBcIkthbGxpdGhlYVwiLFxuICBcIlNhbW9zXCIsXG5dO1xuXG4vLyBXZXN0ZXJuIEV1cm9wZVxuLy8gKioqKioqKioqKioqKipcblxuY29uc3QgZ2VybWFueSA9IENyZWF0ZUNvdW50cnkoXCJHZXJtYW55XCIsIGdlcm1hbnlDaXRpZXMpO1xuY29uc3QgZnJhbmNlID0gQ3JlYXRlQ291bnRyeShcIkZyYW5jZVwiLCBbXCJQYXJpc1wiLCBcIlN0cmFzYm91cmdcIl0pO1xuY29uc3QgYmVsZ2l1bSA9IENyZWF0ZUNvdW50cnkoXCJCZWxnaXVtXCIsIFtcIkJydXNzZWxzXCIsIFwiQnJ1Z2VzXCJdKTtcbmNvbnN0IG5ldGhlcmxhbmRzID0gQ3JlYXRlQ291bnRyeShcIk5ldGhlcmxhbmRzXCIsIFtcbiAgXCJBbXN0ZXJkYW1cIixcbiAgXCJSb3R0ZXJkYW1cIixcbiAgXCJVdHJlY2h0XCIsXG5dKTtcbmNvbnN0IGx1eGVtYm91cmcgPSBDcmVhdGVDb3VudHJ5KFwiTHV4ZW1ib3VyZ1wiLCBbXCJMdXhlbWJvdXJnXCJdKTtcbmNvbnN0IGF1c3RyaWEgPSBDcmVhdGVDb3VudHJ5KFwiQXVzdHJpYVwiLCBbXCJWaWVubmFcIl0pO1xuY29uc3QgaXRhbHkgPSBDcmVhdGVDb3VudHJ5KFwiSXRhbHlcIiwgW1wiVmVuaWNlXCIsIFwiVmVyb25hXCIsIFwiQmVyZ2Ftb1wiLCBcIk5hcGxlc1wiXSk7XG5jb25zdCBzcGFpbiA9IENyZWF0ZUNvdW50cnkoXCJTcGFpblwiLCBbXCJNYWRyaWRcIl0pO1xuY29uc3QgcG9ydHVnYWwgPSBDcmVhdGVDb3VudHJ5KFwiUG9ydHVnYWxcIiwgW1wiTGlzYm9uXCIsIFwiUG9ydG9cIl0pO1xuXG5leHBvcnQgY29uc3Qgd2VzdGVybkV1cm9wZSA9IFtcbiAgZ2VybWFueSxcbiAgZnJhbmNlLFxuICBiZWxnaXVtLFxuICBuZXRoZXJsYW5kcyxcbiAgbHV4ZW1ib3VyZyxcbiAgYXVzdHJpYSxcbiAgaXRhbHksXG4gIHNwYWluLFxuICBwb3J0dWdhbCxcbl07XG4vLyAqKioqKioqKioqKioqKlxuXG4vLyBFYXN0ZXJuIEV1cm9wZVxuLy8gKioqKioqKioqKioqKipcblxuY29uc3QgcG9sYW5kID0gQ3JlYXRlQ291bnRyeShcIlBvbGFuZFwiLCBbXG4gIFwiV2Fyc2F3XCIsXG4gIFwiS3Jha293XCIsXG4gIFwiTHVibGluXCIsXG4gIFwiWmFrb3BhbmVcIixcbl0pO1xuY29uc3QgY3plY2hpYSA9IENyZWF0ZUNvdW50cnkoXCJDemVjaGlhXCIsIFtcIlByYWd1ZVwiXSk7XG5jb25zdCBzbG92YWtpYSA9IENyZWF0ZUNvdW50cnkoXCJTbG92YWtpYVwiLCBbXCJCcmF0aXNsYXZhXCJdKTtcbmNvbnN0IGxpdGh1YW5pYSA9IENyZWF0ZUNvdW50cnkoXCJMaXRodWFuaWFcIiwgW1wiVmlsbml1c1wiXSk7XG5jb25zdCBsYXR2aWEgPSBDcmVhdGVDb3VudHJ5KFwiTGF0dmlhXCIsIFtcIlJpZ2FcIl0pO1xuY29uc3QgZXN0b25pYSA9IENyZWF0ZUNvdW50cnkoXCJFc3RvbmlhXCIsIFtcIlRhbGxpbm5cIl0pO1xuY29uc3QgYmVsYXJ1cyA9IENyZWF0ZUNvdW50cnkoXCJCZWxhcnVzXCIsIFtcIkdyb2Rub1wiXSk7XG5jb25zdCB1a3JhaW5lID0gQ3JlYXRlQ291bnRyeShcIlVrcmFpbmVcIiwgW1wiS2lldlwiLCBcIkNoZXJub2JpbFwiXSk7XG5jb25zdCBtb2xkb3ZhID0gQ3JlYXRlQ291bnRyeShcIk1vbGRvdmFcIiwgW1wiQ2hpc2luYXVcIl0pO1xuXG5leHBvcnQgY29uc3QgZWFzdGVybkV1cm9wZSA9IFtcbiAgcG9sYW5kLFxuICBjemVjaGlhLFxuICBzbG92YWtpYSxcbiAgbGl0aHVhbmlhLFxuICBsYXR2aWEsXG4gIGVzdG9uaWEsXG4gIGJlbGFydXMsXG4gIHVrcmFpbmUsXG4gIG1vbGRvdmEsXG5dO1xuLy8gKioqKioqKioqKioqKipcblxuLy8gQmFsa2Fuc1xuLy8gKioqKioqKlxuXG5jb25zdCBodW5nYXJ5ID0gQ3JlYXRlQ291bnRyeShcIkh1bmdhcnlcIiwgW1wiQnVkYXBlc3RcIl0pO1xuY29uc3Qgc2xvdmVuaWEgPSBDcmVhdGVDb3VudHJ5KFwiU2xvdmVuaWFcIiwgW1wiTGp1YmxqYW5hXCJdKTtcbmNvbnN0IGNyb2F0aWEgPSBDcmVhdGVDb3VudHJ5KFwiQ3JvYXRpYVwiLCBbXCJaYWdyZWJcIl0pO1xuY29uc3Qgc2VyYmlhID0gQ3JlYXRlQ291bnRyeShcIlNlcmJpYVwiLCBbXCJCZWxncmFkZVwiLCBcIk5pc1wiXSk7XG5jb25zdCBrb3Nvdm8gPSBDcmVhdGVDb3VudHJ5KFwiS29zb3ZvXCIsIFtcIlByaXN0aW5hXCJdKTtcbmNvbnN0IG1hY2Vkb25pYSA9IENyZWF0ZUNvdW50cnkoXCJNYWNlZG9uaWFcIiwgW1wiU2tvcGplXCIsIFwiT2hyaWRcIl0pO1xuY29uc3QgZ3JlZWNlID0gQ3JlYXRlQ291bnRyeShcIkdyZWVjZVwiLCBncmVlY2VDaXRpZXMpO1xuY29uc3QgYWxiYW5pYSA9IENyZWF0ZUNvdW50cnkoXCJBbGJhbmlhXCIsIFtcIlRpcmFuYVwiLCBcIlNhcmFuZGVcIl0pO1xuY29uc3QgYnVsZ2FyaWEgPSBDcmVhdGVDb3VudHJ5KFwiQnVsZ2FyaWFcIiwgW1wiU29maWFcIl0pO1xuY29uc3QgbW9udGVuZWdybyA9IENyZWF0ZUNvdW50cnkoXCJNb250ZW5lZ3JvXCIsIFtcbiAgXCJQb2Rnb3JpY2FcIixcbiAgXCJCdWR2YVwiLFxuICBcIktvdG9yXCIsXG4gIFwiUGVyYXN0XCIsXG5dKTtcblxuZXhwb3J0IGNvbnN0IGJhbGthbnMgPSBbXG4gIGdyZWVjZSxcbiAgYWxiYW5pYSxcbiAgbW9udGVuZWdybyxcbiAgYnVsZ2FyaWEsXG4gIG1hY2Vkb25pYSxcbiAga29zb3ZvLFxuICBzZXJiaWEsXG4gIGNyb2F0aWEsXG4gIHNsb3ZlbmlhLFxuICBodW5nYXJ5LFxuXTtcbi8vICoqKioqKipcblxuLy8gQXNpYVxuLy8gKioqKlxuY29uc3QgY2hpbmEgPSBDcmVhdGVDb3VudHJ5KFwiQ2hpbmFcIiwgW1wiQmVpamluZ1wiLCBcIlNoYW5naGFpXCJdKTtcbmV4cG9ydCBjb25zdCBhc2lhID0gW2NoaW5hXTtcbi8vICoqKipcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==