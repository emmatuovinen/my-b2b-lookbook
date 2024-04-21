import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';


function App() {
  return (   
    <Router>
    <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
    </Routes>
    </Router>
  );
}

export default App;
