export const citieNames = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const PREVIEW_IMAGE_SIZE_DEFAULT = {
  WIDTH: '260',
  HEIGHT: '200'
};

export const PREVIEW_IMAGE_SIZE_FAVORITES = {
  WIDTH: '150',
  HEIGHT: '110'
};

export enum HousingType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*'
}

export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}


