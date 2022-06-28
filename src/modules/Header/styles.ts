import styled from "styled-components";
import { headerHeight } from "~/components/Layout/styles";
import config from "~/styles/config";
import Logo from "~/components/Logo";
import CitySearchInput from "~/modules/CitySearchInput";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  display: inline-flex;
  align-content: flex-start;
`;

export const HeaderWrapper = styled.div`
  height: ${headerHeight}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

const miniLogoBreakpoint = config.viewports.md;

export const LogoStyled = styled(Logo)`
  height: ${headerHeight - 20}px;
  padding-right: 50px;

  @media (max-width: ${miniLogoBreakpoint - 1}px) {
    display: none;
  }
`;

export const LogoMiniStyled = styled(Logo)`
  height: ${headerHeight - 20}px;
  padding-right: 10px;

  @media (min-width: ${miniLogoBreakpoint}px) {
    display: none;
  }
`;

export const CitySearchInputStyled = styled(CitySearchInput)``;
