import { backgrounds } from "~/components/Background/constants";

export const getRandomBackground = () =>
  backgrounds[Math.floor(Math.random() * backgrounds.length)];
