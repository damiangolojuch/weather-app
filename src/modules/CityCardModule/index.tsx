import { FC } from "react";
import CityCardWithCompare from "~/modules/CityCardModule/variants/CityCardWithCompare";
import CityCardWithStats from "~/modules/CityCardModule/variants/CityCardWithStats";

export interface CityCardModuleProps {
  cityName: string;
  compareToCity?: string;
}

const CityCardModule: FC<CityCardModuleProps> = ({
  cityName,
  compareToCity,
}) => {
  if (compareToCity) {
    return (
      <CityCardWithCompare cityName={cityName} compareToCity={compareToCity} />
    );
  }

  return <CityCardWithStats cityName={cityName} />;
};

export default CityCardModule;
