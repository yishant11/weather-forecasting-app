import logo from './logo.svg';
import './App.css';
import CitySelection from './Components/CitySelection';

function App() {
  return (
    <div className="App wrapper">
      <h1 className="heading">My Weather App</h1>
      <CitySelection/>
    </div>
  );
}

export default App;
