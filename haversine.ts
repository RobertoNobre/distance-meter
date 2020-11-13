interface Coordinate {
  lat: number;
  lng: number;
}

const radians = (x: number) => x * Math.PI / 180;

const getDistance = (p1: Coordinate, p2: Coordinate) => {
  const metersEarthRadius = 6378137; 
  const latDistance = radians(p2.lat - p1.lat);
  const lngDistance = radians(p2.lng - p1.lng);

  const hav = Math.sin(latDistance / 2) * Math.sin(latDistance / 2) +
    Math.cos(radians(p1.lat)) * Math.cos(radians(p2.lat)) *
    Math.sin(lngDistance / 2) * Math.sin(lngDistance / 2);

  const cos = 2 * Math.atan2(Math.sqrt(hav), Math.sqrt(1 - hav));
  const metersDistance = metersEarthRadius * cos;

  return metersDistance;
};