import Layout from "~/components/Layout";
import { Row } from "antd";
import CityCardModule from "~/modules/CityCardModule";
import { LogoType } from "~/components/Logo";
import * as S from "./styles";
import { defaultCities } from "./constants";
import { useSelector } from "react-redux";
import { selectIsCitiesLoading } from "~/modules/WeatherLogic/selectors";
import Loader from "~/components/Loader";

const HomePage = () => {
  const isLoading = useSelector(selectIsCitiesLoading);

  return (
    <Layout>
      <S.LogoWrapper>
        <S.LogoStyled logoType={LogoType.twoLines} />
      </S.LogoWrapper>
      <S.CitySearchWrapper>
        <S.CitySearchInputStyled />
      </S.CitySearchWrapper>
      {isLoading && <Loader />}
      <Row gutter={16}>
        {!isLoading &&
          defaultCities.map((cityName) => (
            <S.CityCol key={cityName} span={24} sm={12} md={8}>
              <CityCardModule cityName={cityName} />
            </S.CityCol>
          ))}
      </Row>
    </Layout>
  );
};

export default HomePage;
