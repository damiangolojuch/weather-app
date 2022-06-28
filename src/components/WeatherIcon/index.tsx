import { FC } from "react";
import * as S from "./styles";
import { WeatherIcons } from "./constants";

export interface WeatherIconProps {
  type: WeatherIcons;
  className?: string;
}

const WeatherIcon: FC<WeatherIconProps> = ({ type, className }) => {
  const iconSrc = `${
    process.env.PUBLIC_URL || ""
  }/assets/weather_icons/animated/${type}`;
  return <S.Icon className={className} src={iconSrc} />;
};

export default WeatherIcon;
