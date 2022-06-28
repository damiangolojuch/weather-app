import * as S from "./styles";
import { ChangeEvent, MouseEvent, FC } from "react";
import { Button, Form } from "antd";

export interface SearchCityBoxProps {
  className?: string;
  currentCityName: string;
  onSearch(
    text: string,
    event?: ChangeEvent<any> | MouseEvent | KeyboardEvent
  ): void;
}

const SearchCityBox: FC<SearchCityBoxProps> = ({
  className,
  currentCityName,
  onSearch,
}) => (
  <Form action={"/"} method="GET">
    <S.SearchStyled
      name="city"
      className={className}
      placeholder="Wpisz miejscowość"
      enterButton={
        <Button type="primary" htmlType="submit">
          Szukaj
        </Button>
      }
      size="large"
      defaultValue={currentCityName}
      onSearch={onSearch}
    />
  </Form>
);

export default SearchCityBox;
