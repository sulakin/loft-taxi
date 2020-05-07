import '@testing-library/jest-dom/extend-expect';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  MapContainer: () => ({}),
}));
