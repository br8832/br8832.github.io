import {Home, TypingTest} from "./pages"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
 return (<Router>
  <Routes>
    <Route  path="/portfolio" element={<Home/>}>
      
    </Route>
    <Route  path="/TypingTest" element={<TypingTest/>}>
      
    </Route>
  </Routes>
  </Router>)
}

export default App;
