export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type LocationCoordinatesType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  name: string;
  location: LocationCoordinatesType;
}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationCoordinatesType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
};

export type ShortenedOfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationCoordinatesType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
