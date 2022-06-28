import * as fs from "fs";
import * as path from "path";
import * as React from "react";
import { NextFunction, Request, Response } from "express";
import { Location } from "react-router-dom";
import createStore from "../../store";
import { App } from "~/App";
import { Provider as ReduxProvider } from "react-redux";
import rootSaga from "~/sagas";
import pages from "~/pageConfigs";
import matchPages from "~/utils/page/matchPages";
import dispatchPageActions from "~/utils/page/dispatchPageActions";
import { ServerStyleSheet } from "styled-components";
import { renderToNodeStream } from "react-dom/server";

const getHtmlIndexFile = () =>
  fs.readFileSync(path.resolve(__dirname, "../app/index.html")).toString();

const renderFullReactPageMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currentRoute: Partial<Location> = {
    pathname: req.path,
    search: req.query.toString(),
  };
  const matchedPages = matchPages(pages, currentRoute);
  const isStaticFile = req.path.match(/.+\.(ico|png|jpg|json|txt|js)$/);

  if (!matchedPages.length || isStaticFile) {
    next();
    return;
  }

  const { store, runSaga, dispatchEndSagaAction } = createStore();

  const sagas = runSaga(rootSaga);
  dispatchPageActions(store.dispatch, matchedPages);
  dispatchEndSagaAction();

  await sagas.toPromise();
  const state = store.getState();
  let didError = false;

  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(
    <ReduxProvider store={store}>
      <App staticLocation={currentRoute} />
    </ReduxProvider>
  );
  const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx));

  res.statusCode = didError ? 500 : 200;
  res.setHeader("Content-type", "text/html");
  const htmlIndexFile = getHtmlIndexFile().replace(
    "__APP_STATE={}",
    `__APP_STATE=${JSON.stringify(state)}`
  );
  const htmlAppIndexFileSplitted = htmlIndexFile.split('<div id="root">');
  res.write(`${htmlAppIndexFileSplitted[0]}<div id="root">`);
  stream.pipe(res, { end: false });
  stream.on("end", () => res.end(htmlAppIndexFileSplitted[1]));
};

export default renderFullReactPageMiddleware;
