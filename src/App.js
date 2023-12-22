import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MoviesDisplay from './components/MoviesDisplays';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MoviesDisplay />
      <Footer />
      
    </div>
  );
}

export default App;