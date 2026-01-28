import { useEffect, useRef, useState, MutableRefObject } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const TILE_LAYER_URL_PATTERN = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

type UseMapPropsType = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  containerRef: MutableRefObject<HTMLElement | null>;
}

export const useMap = ({location, containerRef}: UseMapPropsType): leaflet.Map | null => {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  // отслеживаем инициализирована ли карта
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (containerRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(containerRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      leaflet
        .tileLayer( // создает задний фон карты
          TILE_LAYER_URL_PATTERN,
          { attribution: TILE_LAYER_ATTRIBUTION },
        )
        .addTo(instance); // добавляет задний фон карты к объекту с картой

      setMap(instance);
      isRenderedRef.current = true; // карта создана
    }
  }, [containerRef, location]);

  return map;
};
