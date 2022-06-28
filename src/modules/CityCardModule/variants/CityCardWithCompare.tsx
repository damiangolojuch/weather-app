import CityCard from "~/components/CityCard";
import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCity } from "~/modules/WeatherLogic/selectors";

export interface CityCardWithCompareProps {
  cityName: string;
  compareToCity: string;
}

const CityCardWithCompare: FC<CityCardWithCompareProps> = ({
  cityName,
  compareToCity,
}) => {
  const cityData = useSelector(selectCity(cityName));
  const compareToCityData = useSelector(selectCity(compareToCity));

  if (!cityData) {
    return null;
  }

  return <CityCard cityData={cityData} compareToCityData={compareToCityData} />;
};

export default CityCardWithCompare;
