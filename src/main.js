import { render } from './framework/render.js';
import FilterView from './view/filter-view.js';
import NewPointButtonView from './view/new-point-button-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import { generateFilter } from './mock/filters.js';


const siteTripMainElement = document.querySelector('.trip-main');
const siteFiltersElement = siteTripMainElement.querySelector('.trip-controls__filters');
const siteTripEventsElement = document.querySelector('.trip-events');


const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();

const tripPresenter = new TripPresenter({
  tripContainer: siteTripEventsElement,
  pointsModel: pointsModel,
  destinationsModel: destinationsModel,
  offersModel: offersModel,
});

const filters = generateFilter(pointsModel.points);


render(new FilterView({ filters }), siteFiltersElement);
render(new NewPointButtonView(), siteTripMainElement);


tripPresenter.init();
