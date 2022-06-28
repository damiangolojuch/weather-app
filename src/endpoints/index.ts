export const getAllCitiesEndpoint = () =>
  "https://danepubliczne.imgw.pl/api/data/synop";

export const getStationEndpoint = (stationId: string) =>
  `https://danepubliczne.imgw.pl/api/data/synop/id/${stationId}`;
