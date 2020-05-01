export const drawRoute = (coordinates) => {
  const map = document.map;
  const mapLayer = map.getLayer('route');

  if (!!mapLayer) {
    map.removeLayer('route').removeSource('route');
  }

  map.flyTo({
    center: coordinates[0],
    zoom: 15,
  });

  map.on('load', function () {
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates,
          },
        },
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#ffc617',
        'line-width': 8,
      },
    });
  });
};

export const removeRoute = () => {
  const map = document.map;
  const mapLayer = map.getLayer('route');

  if (!!mapLayer) {
    map.removeLayer('route').removeSource('route');
  }
};
