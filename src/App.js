import './App.css';
import Header from './components/Header';
import About from './components/About';
import Shop from './components/Shop'; 
import Menu from './components/Menu';
import Review from './components/Review';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Review/>
    </div>
  );
}

export default App;
