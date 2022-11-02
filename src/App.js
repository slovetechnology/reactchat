import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

axios.defaults.baseURL = 'http://localhost:5000';
function App() {
  return (
    <Router>
      <Routes>
        {/* auth routes */}
          <Route
            path='/'
            element={<Home />}
          />
        {/* guest routes */}
        {/* <Route element={<GuestRoutes />}> */}
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
