import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Surprise from "./Suprise";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Surprise}/>
        {/* <Route path="/surprise" component={Surprise}/> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
