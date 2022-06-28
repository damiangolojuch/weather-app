import isServer from "~/utils/server/isServer";

export const matchCity = async (inputValue: string, citiesList: string[]) => {
  if (isServer()) {
    return;
  }

  return await import("leven").then((leven) => {
    const advancesCompareValues = (firstValue: string, secondValue: string) =>
      leven.default(firstValue.toLowerCase(), secondValue.toLowerCase());

    const compareResults = citiesList
      .map((cityName) => ({
        cityName,
        distance: advancesCompareValues(cityName, inputValue),
      }))
      .sort((a, b) => a.distance - b.distance)
      .filter((result) => result.distance <= 2);

    return compareResults[0]?.cityName;
  });
};
