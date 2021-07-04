import { Navbar } from "./Components"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


const App =()=>{
  return(
    <>
      <Router>
        <Switch>
            <Route exact path="/">
              <Navbar/>
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
