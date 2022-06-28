import { LogoType } from "~/components/Logo";
import * as S from "./styles";

const Header = () => (
  <S.HeaderWrapper>
    <S.LinkStyled to={"/"}>
      <S.LogoMiniStyled logoType={LogoType.mini} />
      <S.LogoStyled />
    </S.LinkStyled>
    <S.CitySearchInputStyled />
  </S.HeaderWrapper>
);

export default Header;
