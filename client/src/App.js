import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} index />
      </Routes>
    </>
  );
}

export default App;
