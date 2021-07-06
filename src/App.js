import { Navbar } from "./Components"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Footer } from "./Widgets"


const App =()=>{
  return(
    <>
      <Router>
        <Switch>
            <Route exact path="/">
              {/* <Navbar/> */}
              <Footer/>
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
