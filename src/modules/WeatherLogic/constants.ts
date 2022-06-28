export interface ApiCityWeatherType {
  cisnienie: string;
  data_pomiaru: string;
  godzina_pomiaru: string;
  id_stacji: string;
  kierunek_wiatru: string;
  predkosc_wiatru: string;
  stacja: string;
  suma_opadu: string;
  temperatura: string;
  wilgotnosc_wzgledna: string;
}

export interface CityWeatherType {
  id: string;
  city: string;
  windSpeed: number;
  humidity: number;
  pressure: number;
  temperature: number;
  clouds: number;
}
