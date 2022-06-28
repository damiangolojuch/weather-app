import { compareToCities } from "./constants";

const getCitiesToCompare = (currentCityName: string) =>
  compareToCities.filter((city) => city !== currentCityName).slice(0, 3);

export default getCitiesToCompare;
