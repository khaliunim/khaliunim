import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={"/list"}>Movies</Link>
      hi
    </div>
  );
}

export default App;
