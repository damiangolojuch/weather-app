import { CityWeatherType } from "~/modules/WeatherLogic/constants";
import { FC } from "react";
import { Statistic } from "antd";
import { CityStatisticType, CityStatistics } from "./constants";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { compareValues } from "~/components/CityStatistic/helpers";

export interface CityStatisticProps {
  cityData: CityWeatherType;
  compareToCityData?: CityWeatherType;
  type: CityStatisticType;
}

const CityStatistic: FC<CityStatisticProps> = ({
  cityData,
  compareToCityData,
  type,
}) => {
  const title = CityStatistics[type].name;
  let prefix = undefined;
  let value = cityData[type];
  let suffix = CityStatistics[type].suffix;
  let valueStyle = {};
  let precision = 0;

  if (compareToCityData) {
    const isGreater = cityData[type] >= compareToCityData[type];
    prefix = isGreater ? <ArrowUpOutlined /> : <ArrowDownOutlined />;
    valueStyle = { color: isGreater ? "#3f8600" : "#cf1322" };
    value = compareValues(cityData[type], compareToCityData[type]);
    precision = 2;
  }

  return (
    <Statistic
      title={title}
      value={value}
      valueStyle={valueStyle}
      precision={precision}
      prefix={prefix}
      suffix={suffix}
    />
  );
};

export default CityStatistic;
