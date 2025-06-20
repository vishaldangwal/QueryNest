import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedBlogs from './components/FeaturedBlogs';
import Footer from './components/Footer';
import Categories from './components/Categories';
import PopularWriters from './components/PopularWriters';
import Newsletter from './components/Newsletter';
import ProfilePage from './pages/ProfilePage';
import AboutUs from './pages/AboutUs';
import Signup from './pages/SignUp';
import Blogs from './pages/blogs';
import Cate from './pages/Cate';
import Login from './pages/Login';



const Home = () => (
  <>
  
    <Hero />
    <FeaturedBlogs />
    <Categories />
    <PopularWriters />
    <Newsletter />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/categories' element={<Cate/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;