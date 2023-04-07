"use strict";
(self["webpackChunkvisited_cities_map"] = self["webpackChunkvisited_cities_map"] || []).push([["sidebarConfig"],{

/***/ "./src/javascript/modules/sidebar_config.js":
/*!**************************************************!*\
  !*** ./src/javascript/modules/sidebar_config.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/modules/sidebar_config.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhckNvbmZpZy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlzaXRlZF9jaXRpZXNfbWFwLy4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy9zaWRlYmFyX2NvbmZpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBDcmVhdGVDb3VudHJ5KGNvdW50cnlfbmFtZSwgY2l0aWVzX2xpc3QpIHtcbiAgbGV0IGNvdW50cnlOYW1lID0gY291bnRyeV9uYW1lO1xuICBsZXQgY2l0aWVzTGlzdCA9IGNpdGllc19saXN0O1xuXG4gIHJldHVybiB7IGNvdW50cnlOYW1lLCBjaXRpZXNMaXN0IH07XG59XG5cbmNvbnN0IGdlcm1hbnlDaXRpZXMgPSBbXG4gIFwiQmVybGluXCIsXG4gIFwiTXVuaWNoXCIsXG4gIFwiQ29sb2duZVwiLFxuICBcIkZyYW5rZnVydFwiLFxuICBcIlN0dXR0Z2FydFwiLFxuICBcIkTDvHNzZWxkb3JmXCIsXG4gIFwiRHJlc2RlblwiLFxuICBcIkhlaWRlbGJlcmdcIixcbiAgXCJOdXJlbWJlcmdcIixcbiAgXCJHw7Z0dGluZ2VuXCIsXG5dO1xuXG5jb25zdCBncmVlY2VDaXRpZXMgPSBbXG4gIFwiQXRoZW5zXCIsXG4gIFwiVGhlc3NhbG9uaWtpXCIsXG4gIFwiQ29yaW50aFwiLFxuICBcIkthc3RvcmlhXCIsXG4gIFwiVm9sb3NcIixcbiAgXCJTa2lhdGhvc1wiLFxuICBcIkthbGxpdGhlYVwiLFxuICBcIlNhbW9zXCIsXG5dO1xuXG4vLyBXZXN0ZXJuIEV1cm9wZVxuLy8gKioqKioqKioqKioqKipcblxuY29uc3QgZ2VybWFueSA9IENyZWF0ZUNvdW50cnkoXCJHZXJtYW55XCIsIGdlcm1hbnlDaXRpZXMpO1xuY29uc3QgZnJhbmNlID0gQ3JlYXRlQ291bnRyeShcIkZyYW5jZVwiLCBbXCJQYXJpc1wiLCBcIlN0cmFzYm91cmdcIl0pO1xuY29uc3QgYmVsZ2l1bSA9IENyZWF0ZUNvdW50cnkoXCJCZWxnaXVtXCIsIFtcIkJydXNzZWxzXCIsIFwiQnJ1Z2VzXCJdKTtcbmNvbnN0IG5ldGhlcmxhbmRzID0gQ3JlYXRlQ291bnRyeShcIk5ldGhlcmxhbmRzXCIsIFtcbiAgXCJBbXN0ZXJkYW1cIixcbiAgXCJSb3R0ZXJkYW1cIixcbiAgXCJVdHJlY2h0XCIsXG5dKTtcbmNvbnN0IGx1eGVtYm91cmcgPSBDcmVhdGVDb3VudHJ5KFwiTHV4ZW1ib3VyZ1wiLCBbXCJMdXhlbWJvdXJnXCJdKTtcbmNvbnN0IGF1c3RyaWEgPSBDcmVhdGVDb3VudHJ5KFwiQXVzdHJpYVwiLCBbXCJWaWVubmFcIl0pO1xuY29uc3QgaXRhbHkgPSBDcmVhdGVDb3VudHJ5KFwiSXRhbHlcIiwgW1wiVmVuaWNlXCIsIFwiVmVyb25hXCIsIFwiQmVyZ2Ftb1wiLCBcIk5hcGxlc1wiXSk7XG5jb25zdCBzcGFpbiA9IENyZWF0ZUNvdW50cnkoXCJTcGFpblwiLCBbXCJNYWRyaWRcIl0pO1xuY29uc3QgcG9ydHVnYWwgPSBDcmVhdGVDb3VudHJ5KFwiUG9ydHVnYWxcIiwgW1wiTGlzYm9uXCIsIFwiUG9ydG9cIl0pO1xuXG5leHBvcnQgY29uc3Qgd2VzdGVybkV1cm9wZSA9IFtcbiAgZ2VybWFueSxcbiAgZnJhbmNlLFxuICBiZWxnaXVtLFxuICBuZXRoZXJsYW5kcyxcbiAgbHV4ZW1ib3VyZyxcbiAgYXVzdHJpYSxcbiAgaXRhbHksXG4gIHNwYWluLFxuICBwb3J0dWdhbCxcbl07XG4vLyAqKioqKioqKioqKioqKlxuXG4vLyBFYXN0ZXJuIEV1cm9wZVxuLy8gKioqKioqKioqKioqKipcblxuY29uc3QgcG9sYW5kID0gQ3JlYXRlQ291bnRyeShcIlBvbGFuZFwiLCBbXG4gIFwiV2Fyc2F3XCIsXG4gIFwiS3Jha293XCIsXG4gIFwiTHVibGluXCIsXG4gIFwiWmFrb3BhbmVcIixcbl0pO1xuY29uc3QgY3plY2hpYSA9IENyZWF0ZUNvdW50cnkoXCJDemVjaGlhXCIsIFtcIlByYWd1ZVwiXSk7XG5jb25zdCBzbG92YWtpYSA9IENyZWF0ZUNvdW50cnkoXCJTbG92YWtpYVwiLCBbXCJCcmF0aXNsYXZhXCJdKTtcbmNvbnN0IGxpdGh1YW5pYSA9IENyZWF0ZUNvdW50cnkoXCJMaXRodWFuaWFcIiwgW1wiVmlsbml1c1wiXSk7XG5jb25zdCBsYXR2aWEgPSBDcmVhdGVDb3VudHJ5KFwiTGF0dmlhXCIsIFtcIlJpZ2FcIl0pO1xuY29uc3QgZXN0b25pYSA9IENyZWF0ZUNvdW50cnkoXCJFc3RvbmlhXCIsIFtcIlRhbGxpbm5cIl0pO1xuY29uc3QgYmVsYXJ1cyA9IENyZWF0ZUNvdW50cnkoXCJCZWxhcnVzXCIsIFtcIkdyb2Rub1wiXSk7XG5jb25zdCB1a3JhaW5lID0gQ3JlYXRlQ291bnRyeShcIlVrcmFpbmVcIiwgW1wiS2lldlwiLCBcIkNoZXJub2JpbFwiXSk7XG5jb25zdCBtb2xkb3ZhID0gQ3JlYXRlQ291bnRyeShcIk1vbGRvdmFcIiwgW1wiQ2hpc2luYXVcIl0pO1xuXG5leHBvcnQgY29uc3QgZWFzdGVybkV1cm9wZSA9IFtcbiAgcG9sYW5kLFxuICBjemVjaGlhLFxuICBzbG92YWtpYSxcbiAgbGl0aHVhbmlhLFxuICBsYXR2aWEsXG4gIGVzdG9uaWEsXG4gIGJlbGFydXMsXG4gIHVrcmFpbmUsXG4gIG1vbGRvdmEsXG5dO1xuLy8gKioqKioqKioqKioqKipcblxuLy8gQmFsa2Fuc1xuLy8gKioqKioqKlxuXG5jb25zdCBodW5nYXJ5ID0gQ3JlYXRlQ291bnRyeShcIkh1bmdhcnlcIiwgW1wiQnVkYXBlc3RcIl0pO1xuY29uc3Qgc2xvdmVuaWEgPSBDcmVhdGVDb3VudHJ5KFwiU2xvdmVuaWFcIiwgW1wiTGp1YmxqYW5hXCJdKTtcbmNvbnN0IGNyb2F0aWEgPSBDcmVhdGVDb3VudHJ5KFwiQ3JvYXRpYVwiLCBbXCJaYWdyZWJcIl0pO1xuY29uc3Qgc2VyYmlhID0gQ3JlYXRlQ291bnRyeShcIlNlcmJpYVwiLCBbXCJCZWxncmFkZVwiLCBcIk5pc1wiXSk7XG5jb25zdCBrb3Nvdm8gPSBDcmVhdGVDb3VudHJ5KFwiS29zb3ZvXCIsIFtcIlByaXN0aW5hXCJdKTtcbmNvbnN0IG1hY2Vkb25pYSA9IENyZWF0ZUNvdW50cnkoXCJNYWNlZG9uaWFcIiwgW1wiU2tvcGplXCIsIFwiT2hyaWRcIl0pO1xuY29uc3QgZ3JlZWNlID0gQ3JlYXRlQ291bnRyeShcIkdyZWVjZVwiLCBncmVlY2VDaXRpZXMpO1xuXG5leHBvcnQgY29uc3QgYmFsa2FucyA9IFtcbiAgZ3JlZWNlLFxuICBtYWNlZG9uaWEsXG4gIGtvc292byxcbiAgc2VyYmlhLFxuICBjcm9hdGlhLFxuICBzbG92ZW5pYSxcbiAgaHVuZ2FyeSxcbl07XG4vLyAqKioqKioqXG5cbi8vIEFzaWFcbi8vICoqKipcbmNvbnN0IGNoaW5hID0gQ3JlYXRlQ291bnRyeShcIkNoaW5hXCIsIFtcIkJlaWppbmdcIiwgXCJTaGFuZ2hhaVwiXSk7XG5leHBvcnQgY29uc3QgYXNpYSA9IFtjaGluYV07XG4vLyAqKioqXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=