// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import CardSection from './components/cardSection/cardSection';
import HeroSection from './components/heroSection/heroSection';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
          <Navbar />
          <HeroSection />
          <CardSection />
    </div>
  );
}

export default App;
