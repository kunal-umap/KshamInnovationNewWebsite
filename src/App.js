import './App.css';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage/>} />
        <Route path='/Contact' element={<ContactPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
