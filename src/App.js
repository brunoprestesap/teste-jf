import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import { Routes, Route } from "react-router-dom"
import About from './components/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path='/result/:result' element={<Result />} />
      <Route path='/about' element={<About />} />
    </Routes>
    
  );
}

export default App;