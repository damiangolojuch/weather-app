import { Breadcrumb } from "antd";
import { FC, ReactNode } from "react";
import * as S from "./styles";

interface BreadcrumbType {
  label: string;
  href: string;
}

export interface LayoutProps {
  children?: ReactNode;
  header?: ReactNode;
  breadcrumbs?: BreadcrumbType[];
}

const Layout: FC<LayoutProps> = ({ breadcrumbs, children, header }) => (
  <S.Layout>
    <S.BackgroundStyled />
    {header && <S.HeaderStyled>{header}</S.HeaderStyled>}
    <S.ContentStyled $isHeaderVisible={!!header}>
      {Array.isArray(breadcrumbs) && breadcrumbs.length > 0 && (
        <S.BreadcrumbStyled>
          {breadcrumbs.map((breadcrumb) => (
            <Breadcrumb.Item href={breadcrumb.href}>
              {breadcrumb.label}
            </Breadcrumb.Item>
          ))}
        </S.BreadcrumbStyled>
      )}
      <S.SiteLayoutContent>{children}</S.SiteLayoutContent>
    </S.ContentStyled>
    <S.FooterStyled>© Aplikacja pogodowa 2022</S.FooterStyled>
  </S.Layout>
);

export default Layout;
