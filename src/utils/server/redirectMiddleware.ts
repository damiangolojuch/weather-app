import { NextFunction, Request, Response } from "express";
import fetch from "cross-fetch";
import { getAllCitiesEndpoint } from "~/endpoints";

const getCityName = async (requestedCity: string) => {
  const cityNames: string[] = await fetch(getAllCitiesEndpoint())
    .then((data) => data.json())
    .then((cities) => (cities || []).map((city: any) => city.stacja));

  let bestCity;
  let bestCityDistance = 100;

  const leven = await require("fast-levenshtein");

  for (const city of cityNames) {
    const currentDistance = leven.get(
      city.toLowerCase(),
      requestedCity.toLowerCase()
    );

    if (currentDistance < bestCityDistance) {
      bestCity = city;
      bestCityDistance = currentDistance;
    }
  }

  return bestCityDistance <= 2 ? bestCity : undefined;
};

const redirectMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const pathname = req.path;
  const probablyCityFromPathname = pathname.substring(1);
  const requestedCity = (req.query.city as string) || "";
  const bestCityMatch = await getCityName(
    requestedCity || probablyCityFromPathname
  );
  const isAlreadyCityPage =
    requestedCity === bestCityMatch ||
    probablyCityFromPathname === bestCityMatch;

  if (!isAlreadyCityPage && (requestedCity || bestCityMatch)) {
    if (!!bestCityMatch) {
      res.redirect(`/${bestCityMatch}`);
    } else {
      res.redirect("/not-found/");
    }

    return;
  }

  next();
};

export default redirectMiddleware;
