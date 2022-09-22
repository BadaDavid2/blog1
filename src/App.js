import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Detail from "./Pages/Detail";
function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<Home/>}/>
        <Route path="blog-id/:id" element={<Detail/>}/>
      </Router>
    </>
  );
}

export default App;
