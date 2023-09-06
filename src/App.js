import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import HealthReadMore from './components/HealthReadmore.jsx'
import Footer from './components/Footer.jsx';
import Publications from './components/Publications.jsx';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readMore" element={<HealthReadMore />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      <Footer />
    </>
  );
}




















export default App;
