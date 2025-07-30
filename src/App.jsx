import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Homepage from './pages/Homepage';
import Medalspage from './pages/Medalspage';
import Footer from './components/Footer';



const App = () => {
  return (

    <BrowserRouter>
      <Navbar />

      <div className="container-fluid">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/medals' element={<Medalspage />} />
        </Routes>
      </div>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;