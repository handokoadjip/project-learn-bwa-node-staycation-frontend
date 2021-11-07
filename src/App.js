import "assets/scss/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutPage from "containers/pages/Checkout";
import DetailPage from "containers/pages/Detail";
import HomePage from "containers/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout" component={CheckoutPage}></Route>
          <Route path="/properties/:id" component={DetailPage}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
