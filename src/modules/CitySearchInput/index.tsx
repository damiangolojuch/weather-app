import { useDispatch, useSelector } from "react-redux";
import { searchCity } from "~/modules/CitySearchInput/slice";
import { selectCurrentCityName } from "~/modules/CitySearchInput/selectors";
import { ChangeEvent, FC } from "react";
import SearchCityBox from "~/components/SearchCityBox";

interface CitySearchInputProps {
  className?: string;
}

const CitySearchInput: FC<CitySearchInputProps> = ({ className }) => {
  const currentCityName = useSelector(selectCurrentCityName);
  const dispatch = useDispatch();
  const onSearch = (newCityName: string, event: ChangeEvent) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(
      searchCity({
        newCityName,
        previousCityName: currentCityName,
      })
    );
  };

  return (
    <SearchCityBox
      className={className}
      currentCityName={currentCityName}
      onSearch={onSearch}
    />
  );
};

export default CitySearchInput;
