import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grid from './Grid';
import InputPage from './InputPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<InputPage />} />
        <Route path ="/grid" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
