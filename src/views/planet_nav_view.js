const PubSub = require('../helpers/pub_sub.js');

const PlanetNavView = function (element) {
  this.element = element;
}
PlanetNavView.prototype.bindEvents = function () {
 this.element.addEventListener('click', (event) => {
  const selectedPlanet = event.target.id;
  PubSub.publish('NavView:selected-planet', selectedPlanet);
  })
};

module.exports = PlanetNavView;
