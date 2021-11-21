import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import signup from "./signup/signup";
import ExistingOrders from "./existingorders/existingorder";
import Orderpage from "./screens/orderPage";
import Creatingorder from "./screens/createOrder";
import login from "./login/login";
import PrivateRoute from "./utils/privaterouter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/signup" component={signup} />{" "}
          <Route exact path="/" component={login} />{" "}
          <PrivateRoute exact path="/creatingorder" component={Creatingorder} />{" "}
          <Route exact path="/orderPage" component={Orderpage} />{" "}
          <Route exact path="/order" component={ExistingOrders} />{" "}
        </Switch>{" "}
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
