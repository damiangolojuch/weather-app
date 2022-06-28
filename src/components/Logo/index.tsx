import * as S from "./styles";
import { FC } from "react";

export enum LogoType {
  normal = "logo",
  twoLines = "logo-2lines",
  mini = "logo-mini",
}

export interface LogoProps {
  className?: string;
  logoType?: LogoType;
}

const Logo: FC<LogoProps> = ({ className, logoType }) => (
  <S.Logo
    className={className}
    src={`${process.env.PUBLIC_URL || ""}/assets/${
      logoType ?? LogoType.normal
    }.svg`}
  />
);

export default Logo;
