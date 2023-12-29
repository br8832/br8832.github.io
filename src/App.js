import {Home, TypingTest} from "./pages"
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
 return (
  <Router>
  <Routes>
    <Route path="/" element={<Home/>}>
    </Route>
    <Route path="/TypingTest" element={<TypingTest/>}>
    </Route>
  </Routes>
  </Router>
  )
}

export default App;
