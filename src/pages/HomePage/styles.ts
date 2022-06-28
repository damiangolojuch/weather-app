import styled from "styled-components";
import Logo from "~/components/Logo";
import CitySearchInput from "~/modules/CitySearchInput";
import { Col } from "antd";
import config from "~/styles/config";

export const CityCol = styled(Col)`
  @media (max-width: ${config.viewports.sm - 1}px) {
    &:nth-child(n + 2) {
      display: none;
    }
  }

  @media (min-width: ${config.viewports.sm}px) and (max-width: ${config
      .viewports.md - 1}px) {
    &:nth-child(n + 3) {
      display: none;
    }
  }
`;

export const LogoStyled = styled(Logo)`
  max-width: 400px;
  padding-bottom: 15px;
`;

export const LogoWrapper = styled.div`
  text-align: center;
  padding: 50px 0 0 0;
`;

export const CitySearchWrapper = styled.div`
  text-align: center;
  padding: 15px 0 50px;
`;

export const CitySearchInputStyled = styled(CitySearchInput)`
  @media (min-width: 700px) {
    width: 600px;
  }
`;
