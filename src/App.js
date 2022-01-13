import './App.css';
import Header from './components/Header';
import About from './components/About';
import Shop from './components/Shop'; 
import Menu from './components/Menu';
import Review from './components/Review';
import Prices from './components/Prices';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Review/>
      <Prices/>
    </div>
  );
}

export default App;
