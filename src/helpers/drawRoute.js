export const drawRoute = (coordinates) => {
  const mapLayer = document.map.getLayer('route');

  if (typeof mapLayer !== 'undefined') {
    document.map.removeLayer('route').removeSource('route');
  }

  setTimeout(() => {
    document.map.flyTo({
      center: coordinates[0],
      zoom: 15,
    });

    document.map.addLayer({
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
  }, 300);
};
