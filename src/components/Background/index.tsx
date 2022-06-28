import * as S from "./styles";
import { FC, useMemo } from "react";
import { getRandomBackground } from "~/components/Background/helpers";

interface BackgroundProps {
  className?: string;
}

const Background: FC<BackgroundProps> = ({ className }) => {
  const image = useMemo(() => getRandomBackground(), []);
  const imgSrc = `${process.env.PUBLIC_URL || ""}/assets/backgrounds/${image}`;

  return (
    <S.BackgroundWrapper className={className}>
      <S.Background src={imgSrc} alt="Na licencji pexels.com" />
    </S.BackgroundWrapper>
  );
};

export default Background;
