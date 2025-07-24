import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Shop from './pages/Shop';  // Make sure the filename is correct (uppercase S)
import Navbar from './components/Header';
import './index.css'; // Keep this if you're using Tailwind CSS
import Shop from './pages/Shop';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Footer from './components/footer';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div className='overflow-x-hidden'>
        {/* Navbar should be outside Routes */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/shop' element={<Shop />} /> */}
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
