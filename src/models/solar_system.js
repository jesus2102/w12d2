const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('NavView:selected-planet', (evt) =>{
    const planet = this.findPlanetByName(evt.detail);
    console.log('solar system:', planet);
    PubSub.publish('SolarSystem:selected-planet', planet);
  })
//   console.log(planetList);
};

SolarSystem.prototype.findPlanetByName = function (searchName) {
  return this.planets.find((planet) => {
    return planet.name === searchName;
  });
};

module.exports = SolarSystem;
