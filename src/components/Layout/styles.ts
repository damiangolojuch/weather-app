import styled, { css } from "styled-components";
import { Breadcrumb, Layout as AntdLayout } from "antd";
import config from "~/styles/config";
import Background from "~/components/Background";

const { Header, Content, Footer } = AntdLayout;

export const Layout = styled(AntdLayout)`
  background-color: transparent;
`;

export const BackgroundStyled = styled(Background)`
  position: fixed;
  z-index: -1;
`;

export const headerHeight = 64;
export const footerHeight = 70;

export const ContentStyled = styled(Content)<{ $isHeaderVisible: boolean }>`
  padding: 0 50px;
  ${({ $isHeaderVisible }) =>
    css`
      min-height: calc(
        100vh ${$isHeaderVisible && `- ${headerHeight}`} - ${footerHeight}px
      );
    `};

  @media (max-width: ${config.viewports.md - 1}px) {
    padding: 0 10px;
  }

  @media (min-width: ${config.viewports.xl}px) {
    margin: 0 auto;
    width: 1000px;
  }
`;

export const HeaderStyled = styled(Header)`
  height: ${headerHeight}px;
  background: transparent;

  @media (max-width: ${config.viewports.md - 1}px) {
    padding: 0 10px;
  }

  @media (min-width: ${config.viewports.xl}px) {
    margin: 0 auto;
    width: 1000px;
  }
`;

export const BreadcrumbStyled = styled(Breadcrumb)`
  margin: 16px 0;
`;

export const SiteLayoutContent = styled.div`
  padding: 24px 0;
`;

export const FooterStyled = styled(Footer)`
  height: ${footerHeight}px;
  text-align: center;
  background-color: transparent;
  color: #fff;
  text-shadow: 0 0 2px #000;
`;
