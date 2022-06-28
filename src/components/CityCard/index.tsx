import { FC } from "react";
import * as S from "./styles";
import { CityWeatherType } from "~/modules/WeatherLogic/constants";
import { Link } from "react-router-dom";
import CityStatistic from "~/components/CityStatistic";
import { CityStatisticType } from "~/components/CityStatistic/constants";
import { WeatherIcons } from "~/components/WeatherIcon/constants";

export interface CityCardProps {
  cityData: CityWeatherType;
  compareToCityData?: CityWeatherType;
}

const statistics = [
  CityStatisticType.windSpeed,
  CityStatisticType.temperature,
  CityStatisticType.pressure,
  CityStatisticType.humidity,
];

const CityCard: FC<CityCardProps> = ({ cityData, compareToCityData }) => (
  <Link to={`/${cityData.city}`}>
    <S.CardStyled hoverable title={cityData.city}>
      <S.WeatherIconWrapper>
        <S.WeatherIconStyled
          type={cityData.clouds === 0 ? WeatherIcons.day : WeatherIcons.rainy6}
        />
      </S.WeatherIconWrapper>
      {statistics.map((statistic) => (
        <CityStatistic
          key={statistic}
          cityData={cityData}
          compareToCityData={compareToCityData}
          type={statistic}
        />
      ))}
    </S.CardStyled>
  </Link>
);

export default CityCard;
