import styled from "styled-components";
import { Card } from "antd";
import WeatherIcon from "~/components/WeatherIcon";

export const CardStyled = styled(Card)`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const WeatherIconWrapper = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
`;

export const WeatherIconStyled = styled(WeatherIcon)`
  width: 100%;
  height: 100%;
  max-height: 25vh;
  max-width: 25vh;
`;
