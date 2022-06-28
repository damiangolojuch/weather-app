export enum CityStatisticType {
  windSpeed = "windSpeed",
  humidity = "humidity",
  pressure = "pressure",
  temperature = "temperature",
}

export const CityStatistics = {
  [CityStatisticType.humidity]: {
    name: "Wilgotność",
    suffix: "%",
  },
  [CityStatisticType.windSpeed]: {
    name: "Prędkość wiatru",
    suffix: "m/s",
  },
  [CityStatisticType.pressure]: {
    name: "Ciśnienie",
    suffix: "hPa",
  },
  [CityStatisticType.temperature]: {
    name: "Temperature",
    suffix: "°C",
  },
};
