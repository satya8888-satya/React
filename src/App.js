
import './App.css';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/navbar';
import Home from './pages/home'
import EditUser from './userinfo/edituser';
import ViewUser from './userinfo/viewuser';
import AddUser from './userinfo/adduser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
