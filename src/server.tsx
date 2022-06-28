import * as express from "express";
import * as path from "path";
import renderFullReactPageMiddleware from "./utils/server/renderFullReactPageMiddleware";
import redirectMiddleware from "~/utils/server/redirectMiddleware";

const app = express.default();
app.use(redirectMiddleware);
app.use(renderFullReactPageMiddleware);
app.use(
  express.static(path.resolve(__dirname, "../app/"), {
    maxAge: "30d",
  })
);
app.listen(3000);
