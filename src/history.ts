import * as history from "history";
import isServer from "~/utils/server/isServer";

// FIXME: Problem with history types, probably conflict with react-router
const historyInstance: any =
  !isServer() && (history as any).createBrowserHistory();

export default historyInstance;
