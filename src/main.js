import { render } from './framework/render.js';
import FilterView from './view/filter-view.js';
import NewPointButtonView from './view/new-point-button-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import FilterModel from './model/filter-model.js';

const filters = [
  {
    type: 'everything',
    count: 0,
  },
];

const siteTripMainElement = document.querySelector('.trip-main');
const siteFiltersElement = siteTripMainElement.querySelector('.trip-controls__filters');
const sitePageMainElement = document.querySelector('.page-main');
const siteBodyContainerElement = sitePageMainElement.querySelector('.page-body__container');


const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const filterModel = new FilterModel();

const tripPresenter = new TripPresenter({
  tripContainer: siteBodyContainerElement,
  pointsModel: pointsModel,
  destinationsModel: destinationsModel,
  offersModel: offersModel,
});


render(new FilterView({
  filters,
  currentFilterType: 'everything',
  onFilterTypeChange: () => { },
}), siteFiltersElement);
render(new NewPointButtonView(), siteTripMainElement);


tripPresenter.init();
