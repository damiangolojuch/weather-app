import Layout from "~/components/Layout";
import { Button, Col, Row } from "antd";
import Header from "~/modules/Header";
import { Link } from "react-router-dom";
import * as S from "./styles";

const CityNotFoundPage = () => (
  <Layout header={<Header />}>
    <Row gutter={16}>
      <Col span={24}>
        <S.ResultStyled
          status="404"
          title="Brak wyników :("
          subTitle="Niestety nie udało nam się dopasować wyników do szukanej przez Ciebie frazy."
          extra={
            <Link to={"/"}>
              <Button type="primary">Powrót do strony głównej</Button>
            </Link>
          }
        />
      </Col>
    </Row>
  </Layout>
);

export default CityNotFoundPage;
