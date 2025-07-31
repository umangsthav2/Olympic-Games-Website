import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Homepage from './pages/Root/Homepage';
import Medalspage from './pages/Root/Medalspage';
import Footer from './components/Footer';
import Footballpage from './pages/Sports/Footballpage';
import Sportspage from './pages/Root/Sportspage';
import Schedulepage from './pages/Root/Schedulepage';

import User from './pages/User/User';
import Userlogin from './pages/User/Login';
import Usersignup from './pages/User/Signup';


const App = () => {
  return (

    <BrowserRouter>
      <Navbar />

      <div className="container-fluid">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/medals' element={<Medalspage />} />
          <Route path='/schedule' element={<Schedulepage />} />



          <Route path='/sports/football' element={<Footballpage />} />
          <Route path='/sports' element={<Sportspage />} />
          
          
          
          <Route path='/user' element={<User />} />
          <Route path='/user/login' element={<Userlogin />} />
          <Route path='/user/signup' element={<Usersignup/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;