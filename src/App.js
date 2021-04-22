import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          "favorite snack is" {favoriteSnack()}
        </p>
    </div>
  );
}

function favoriteSnack() {
  return "chips";
}

export default App;
