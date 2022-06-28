import styled from "styled-components";
import config from "~/styles/config";

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${config.colors.main};
  overflow: hidden;
`;

export const Background = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;
