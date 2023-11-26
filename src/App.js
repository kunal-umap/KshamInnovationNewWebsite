import './App.css';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <HomePage/> */}
      {/* <AboutPage/> */}
      <ContactPage />
      <Footer/>
    </div>
  );
}

export default App;
