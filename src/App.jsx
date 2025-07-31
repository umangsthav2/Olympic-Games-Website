import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Homepage from './pages/Root/Homepage';
import Medalspage from './pages/Root/Medalspage';
import Footer from './components/Footer';
import Footballpage from './pages/Sports/Footballpage';
import Sportspage from './pages/Root/Sportspage';



const App = () => {
  return (

    <BrowserRouter>
      <Navbar />

      <div className="container-fluid">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/medals' element={<Medalspage />} />
          <Route path='/schedule' element={<Medalspage />} />



          <Route path='/sports/football' element={<Footballpage />} />
          <Route path='/sports' element={<Sportspage />} />
        </Routes>
      </div>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;