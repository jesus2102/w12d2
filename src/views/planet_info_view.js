const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function (container) {
  this.container = container;
}

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:selected-planet', (evt) => {
    const planet = evt.detail;
    console.log('planet info:', planet);
    this.render(planet);
  });
};

PlanetInfoView.prototype.createListItem = function (listElement, targetList) {
const item = document.createElement('li');
item.textContent = `${listElement}`;
targetList.appendChild(item);
};

PlanetInfoView.prototype.render = function (planet) {
const infoDiv = document.createElement('div');
const list = document.createElement('ul')
this.createListItem(planet.name, list);
this.createListItem(planet.orbit, list);
this.createListItem(planet.day, list);
this.createListItem(planet.surfaceArea, list);
this.createListItem(planet.gravity, list);
this.createListItem(planet.moons, list);
this.createListItem(planet.image, list);
infoDiv.appendChild(list);
this.container.innerHTML = '';
this.container.appendChild(infoDiv);
};





module.exports = PlanetInfoView
