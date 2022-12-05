import { BrowserRouter as Router, Switch } from "react-router-dom"
import routes from "./routes/Routes";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  return (
    <Router>
      <Switch>
        {
          routes.map((route, index) => (
            <ProtectedRoute key={index} path={route.path} component={route.element} exact={route.exact} public={route.public} />
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
