import { Switch, Route } from "react-router-dom";
import Home from "@/components/Home.jsx";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Router;
