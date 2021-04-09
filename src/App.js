import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Slider from './components/Slider/Slider';
import Gallery from './components/Gallery/Gallery'
import Questions from './components/Questions/Questions'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Slider />
      <Gallery />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
