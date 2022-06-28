import Layout from "~/components/Layout";
import { Col, Row } from "antd";
import * as S from "./styles";
import CityCardModule from "~/modules/CityCardModule";
import getCitiesToCompare from "./getCitiesToCompare";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCity,
  selectIsCitiesLoading,
} from "~/modules/WeatherLogic/selectors";
import Header from "~/modules/Header";
import Loader from "~/components/Loader";
import isServer from "~/utils/server/isServer";

const CityPage = () => {
  const params = useParams();
  const cityData = useSelector(selectCity(params?.city || ""));
  const isLoading = useSelector(selectIsCitiesLoading);
  const currentCityName = cityData?.city;

  return (
    <Layout header={<Header />}>
      <Row gutter={16}>
        <Col span={24}>
          {isLoading && <Loader />}
          {!isLoading && !currentCityName && !isServer() && (
            <Navigate to={"/not-found/"} />
          )}
          {!isLoading && currentCityName && (
            <S.SpaceStyled direction={"vertical"}>
              <CityCardModule cityName={currentCityName} />

              <Row gutter={16}>
                {getCitiesToCompare(currentCityName).map((cityName) => (
                  <Col key={cityName} span={24} sm={12} md={8}>
                    <CityCardModule
                      cityName={cityName}
                      compareToCity={currentCityName}
                    />
                  </Col>
                ))}
              </Row>
            </S.SpaceStyled>
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default CityPage;
