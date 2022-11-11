import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
