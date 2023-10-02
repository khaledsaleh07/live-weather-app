import logo from './logo.svg';
import './App.css';
import WeatherItem from "./components/WeatherItem";
import Search from './components/Search';
import Upcoming from './components/Upcoming';

function App() {
  return (
    <div className="App">
      <Search />
      <WeatherItem />
      <Upcoming />
    </div>
  );
}

export default App;
