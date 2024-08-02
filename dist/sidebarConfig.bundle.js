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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/modules/sidebar_config.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhckNvbmZpZy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL3Zpc2l0ZWRfY2l0aWVzX21hcC8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvc2lkZWJhcl9jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQ3JlYXRlQ291bnRyeShjb3VudHJ5X25hbWUsIGNpdGllc19saXN0KSB7XG4gIGxldCBjb3VudHJ5TmFtZSA9IGNvdW50cnlfbmFtZTtcbiAgbGV0IGNpdGllc0xpc3QgPSBjaXRpZXNfbGlzdDtcblxuICByZXR1cm4geyBjb3VudHJ5TmFtZSwgY2l0aWVzTGlzdCB9O1xufVxuXG5jb25zdCBnZXJtYW55Q2l0aWVzID0gW1xuICBcIkJlcmxpblwiLFxuICBcIk11bmljaFwiLFxuICBcIkNvbG9nbmVcIixcbiAgXCJGcmFua2Z1cnRcIixcbiAgXCJTdHV0dGdhcnRcIixcbiAgXCJEw7xzc2VsZG9yZlwiLFxuICBcIkRyZXNkZW5cIixcbiAgXCJIZWlkZWxiZXJnXCIsXG4gIFwiTnVyZW1iZXJnXCIsXG4gIFwiR8O2dHRpbmdlblwiLFxuXTtcblxuY29uc3QgZ3JlZWNlQ2l0aWVzID0gW1xuICBcIkF0aGVuc1wiLFxuICBcIlRoZXNzYWxvbmlraVwiLFxuICBcIkNvcmludGhcIixcbiAgXCJLYXN0b3JpYVwiLFxuICBcIlZvbG9zXCIsXG4gIFwiU2tpYXRob3NcIixcbiAgXCJLYWxsaXRoZWFcIixcbiAgXCJTYW1vc1wiLFxuXTtcblxuLy8gV2VzdGVybiBFdXJvcGVcbi8vICoqKioqKioqKioqKioqXG5cbmNvbnN0IGdlcm1hbnkgPSBDcmVhdGVDb3VudHJ5KFwiR2VybWFueVwiLCBnZXJtYW55Q2l0aWVzKTtcbmNvbnN0IGZyYW5jZSA9IENyZWF0ZUNvdW50cnkoXCJGcmFuY2VcIiwgW1wiUGFyaXNcIiwgXCJTdHJhc2JvdXJnXCJdKTtcbmNvbnN0IGJlbGdpdW0gPSBDcmVhdGVDb3VudHJ5KFwiQmVsZ2l1bVwiLCBbXCJCcnVzc2Vsc1wiLCBcIkJydWdlc1wiXSk7XG5jb25zdCBuZXRoZXJsYW5kcyA9IENyZWF0ZUNvdW50cnkoXCJOZXRoZXJsYW5kc1wiLCBbXG4gIFwiQW1zdGVyZGFtXCIsXG4gIFwiUm90dGVyZGFtXCIsXG4gIFwiVXRyZWNodFwiLFxuXSk7XG5jb25zdCBsdXhlbWJvdXJnID0gQ3JlYXRlQ291bnRyeShcIkx1eGVtYm91cmdcIiwgW1wiTHV4ZW1ib3VyZ1wiXSk7XG5jb25zdCBhdXN0cmlhID0gQ3JlYXRlQ291bnRyeShcIkF1c3RyaWFcIiwgW1wiVmllbm5hXCJdKTtcbmNvbnN0IGl0YWx5ID0gQ3JlYXRlQ291bnRyeShcIkl0YWx5XCIsIFtcIlZlbmljZVwiLCBcIlZlcm9uYVwiLCBcIkJlcmdhbW9cIiwgXCJOYXBsZXNcIl0pO1xuY29uc3Qgc3BhaW4gPSBDcmVhdGVDb3VudHJ5KFwiU3BhaW5cIiwgW1wiTWFkcmlkXCJdKTtcbmNvbnN0IHBvcnR1Z2FsID0gQ3JlYXRlQ291bnRyeShcIlBvcnR1Z2FsXCIsIFtcIkxpc2JvblwiLCBcIlBvcnRvXCJdKTtcblxuZXhwb3J0IGNvbnN0IHdlc3Rlcm5FdXJvcGUgPSBbXG4gIGdlcm1hbnksXG4gIGZyYW5jZSxcbiAgYmVsZ2l1bSxcbiAgbmV0aGVybGFuZHMsXG4gIGx1eGVtYm91cmcsXG4gIGF1c3RyaWEsXG4gIGl0YWx5LFxuICBzcGFpbixcbiAgcG9ydHVnYWwsXG5dO1xuLy8gKioqKioqKioqKioqKipcblxuLy8gRWFzdGVybiBFdXJvcGVcbi8vICoqKioqKioqKioqKioqXG5cbmNvbnN0IHBvbGFuZCA9IENyZWF0ZUNvdW50cnkoXCJQb2xhbmRcIiwgW1xuICBcIldhcnNhd1wiLFxuICBcIktyYWtvd1wiLFxuICBcIkx1YmxpblwiLFxuICBcIlpha29wYW5lXCIsXG5dKTtcbmNvbnN0IGN6ZWNoaWEgPSBDcmVhdGVDb3VudHJ5KFwiQ3plY2hpYVwiLCBbXCJQcmFndWVcIl0pO1xuY29uc3Qgc2xvdmFraWEgPSBDcmVhdGVDb3VudHJ5KFwiU2xvdmFraWFcIiwgW1wiQnJhdGlzbGF2YVwiXSk7XG5jb25zdCBsaXRodWFuaWEgPSBDcmVhdGVDb3VudHJ5KFwiTGl0aHVhbmlhXCIsIFtcIlZpbG5pdXNcIl0pO1xuY29uc3QgbGF0dmlhID0gQ3JlYXRlQ291bnRyeShcIkxhdHZpYVwiLCBbXCJSaWdhXCJdKTtcbmNvbnN0IGVzdG9uaWEgPSBDcmVhdGVDb3VudHJ5KFwiRXN0b25pYVwiLCBbXCJUYWxsaW5uXCJdKTtcbmNvbnN0IGJlbGFydXMgPSBDcmVhdGVDb3VudHJ5KFwiQmVsYXJ1c1wiLCBbXCJHcm9kbm9cIl0pO1xuY29uc3QgdWtyYWluZSA9IENyZWF0ZUNvdW50cnkoXCJVa3JhaW5lXCIsIFtcIktpZXZcIiwgXCJDaGVybm9iaWxcIl0pO1xuY29uc3QgbW9sZG92YSA9IENyZWF0ZUNvdW50cnkoXCJNb2xkb3ZhXCIsIFtcIkNoaXNpbmF1XCJdKTtcblxuZXhwb3J0IGNvbnN0IGVhc3Rlcm5FdXJvcGUgPSBbXG4gIHBvbGFuZCxcbiAgY3plY2hpYSxcbiAgc2xvdmFraWEsXG4gIGxpdGh1YW5pYSxcbiAgbGF0dmlhLFxuICBlc3RvbmlhLFxuICBiZWxhcnVzLFxuICB1a3JhaW5lLFxuICBtb2xkb3ZhLFxuXTtcbi8vICoqKioqKioqKioqKioqXG5cbi8vIEJhbGthbnNcbi8vICoqKioqKipcblxuY29uc3QgaHVuZ2FyeSA9IENyZWF0ZUNvdW50cnkoXCJIdW5nYXJ5XCIsIFtcIkJ1ZGFwZXN0XCJdKTtcbmNvbnN0IHNsb3ZlbmlhID0gQ3JlYXRlQ291bnRyeShcIlNsb3ZlbmlhXCIsIFtcIkxqdWJsamFuYVwiXSk7XG5jb25zdCBjcm9hdGlhID0gQ3JlYXRlQ291bnRyeShcIkNyb2F0aWFcIiwgW1wiWmFncmViXCJdKTtcbmNvbnN0IHNlcmJpYSA9IENyZWF0ZUNvdW50cnkoXCJTZXJiaWFcIiwgW1wiQmVsZ3JhZGVcIiwgXCJOaXNcIl0pO1xuY29uc3Qga29zb3ZvID0gQ3JlYXRlQ291bnRyeShcIktvc292b1wiLCBbXCJQcmlzdGluYVwiXSk7XG5jb25zdCBtYWNlZG9uaWEgPSBDcmVhdGVDb3VudHJ5KFwiTWFjZWRvbmlhXCIsIFtcIlNrb3BqZVwiLCBcIk9ocmlkXCJdKTtcbmNvbnN0IGdyZWVjZSA9IENyZWF0ZUNvdW50cnkoXCJHcmVlY2VcIiwgZ3JlZWNlQ2l0aWVzKTtcbmNvbnN0IGFsYmFuaWEgPSBDcmVhdGVDb3VudHJ5KFwiQWxiYW5pYVwiLCBbXCJUaXJhbmFcIiwgXCJTYXJhbmRlXCJdKTtcbmNvbnN0IGJ1bGdhcmlhID0gQ3JlYXRlQ291bnRyeShcIkJ1bGdhcmlhXCIsIFtcIlNvZmlhXCJdKTtcbmNvbnN0IG1vbnRlbmVncm8gPSBDcmVhdGVDb3VudHJ5KFwiTW9udGVuZWdyb1wiLCBbXG4gIFwiUG9kZ29yaWNhXCIsXG4gIFwiQnVkdmFcIixcbiAgXCJLb3RvclwiLFxuICBcIlBlcmFzdFwiLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBiYWxrYW5zID0gW1xuICBncmVlY2UsXG4gIGFsYmFuaWEsXG4gIG1vbnRlbmVncm8sXG4gIGJ1bGdhcmlhLFxuICBtYWNlZG9uaWEsXG4gIGtvc292byxcbiAgc2VyYmlhLFxuICBjcm9hdGlhLFxuICBzbG92ZW5pYSxcbiAgaHVuZ2FyeSxcbl07XG4vLyAqKioqKioqXG5cbi8vIEFzaWFcbi8vICoqKipcbmNvbnN0IGNoaW5hID0gQ3JlYXRlQ291bnRyeShcIkNoaW5hXCIsIFtcIkJlaWppbmdcIiwgXCJTaGFuZ2hhaVwiXSk7XG5leHBvcnQgY29uc3QgYXNpYSA9IFtjaGluYV07XG4vLyAqKioqXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=