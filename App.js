import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Addusers from './Users/Addusers';
import Home from './pages/Home';
import Viewusers from './Users/Viewusers';
import Editusers from './Users/Editusers';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Addusers" element={<Addusers/>}/>
        <Route exact path="/Editusers" element={<Editusers/>}/>"
        <Route exact path="/Viewusers" element={<Viewusers/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
