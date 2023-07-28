import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
import Home from './components/Home';
import Mobile from './components/Mobile';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mobile/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;