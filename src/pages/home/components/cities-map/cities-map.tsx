import { useEffect, useRef } from 'react';
import { OfferType, ShortenedOfferType } from '../../../../types/offer.type';
import { useMap } from './hooks/use-map';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = 'markup/img/pin.svg';
const URL_MARKER_CURRENT = 'markup/img/pin-active.svg';

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

type CitiesMapPropsType = {
  coordinatesCity: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  offers: OfferType[] | ShortenedOfferType[];
  activeCardId: string;
  className: string;
}

const CitiesMap = ({ coordinatesCity, offers, activeCardId, className }: CitiesMapPropsType) => {

  // создадим ссылку на section, в которой будет отрисована карта
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // создание карты с конкретным городом на ней
  const map = useMap({ location: coordinatesCity, containerRef: mapContainerRef });

  // создание отдельного слоя с маркерами
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if(map) {
      map.setView([coordinatesCity.latitude, coordinatesCity.longitude], coordinatesCity.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers(); // чистит все маркеры на текущем слое
    }
  }, [coordinatesCity, map]);

  useEffect(() => { // добавляет маркеры на карту
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === activeCardId)
              ? activeMarkerIcon
              : defaultMarkerIcon,
          })
          .addTo(markerLayer.current); // добавляет маркер на карту
      });
    }
  }, [map, offers, activeCardId]);

  return (
    <section
      className={`map ${className}`}
      ref={mapContainerRef}
    >
    </section>
  );
};


export default CitiesMap;
