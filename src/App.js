import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import HealthReadMore from './components/HealthReadMore.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/readMore" element={<HealthReadMore />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
