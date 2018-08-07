const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfoView = require('./views/planet_info_view.js');
const PlanetNavView = require('./views/planet_nav_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  console.log(planetsDataModel.planets);

  const infoLocation = document.querySelector('.planet-details')
  const planetInfoView = new PlanetInfoView(infoLocation);
  planetInfoView.bindEvents();

  const planetsNav = document.querySelector('.planets-menu');
  const planetNavView = new PlanetNavView(planetsNav);
  planetNavView.bindEvents();
});
