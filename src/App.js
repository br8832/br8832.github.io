import {Home, TypingTest} from "./pages"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
 return (<Router>
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/TypingTest/">
      <TypingTest page={"index"}/>
    </Route>
    <Route exact path="/TypingTest/BigE">
      <TypingTest page={"penguin"}/>
    </Route>
  </Switch>
  </Router>)
}

export default App;
