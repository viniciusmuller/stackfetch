import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import App from "./pages/App";
import About from "./pages/About";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/app" component={App} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
