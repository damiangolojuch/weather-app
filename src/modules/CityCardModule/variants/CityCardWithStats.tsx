import CityCard from "~/components/CityCard";
import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCity } from "~/modules/WeatherLogic/selectors";

export interface CityCardWithStatsProps {
  cityName: string;
}

const CityCardWithStats: FC<CityCardWithStatsProps> = ({ cityName }) => {
  const cityData = useSelector(selectCity(cityName));

  if (!cityData) {
    return null;
  }

  return <CityCard cityData={cityData} />;
};

export default CityCardWithStats;
