import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Details from './components/Details';
// import logo from './logo.svg';
import './styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './images/index'
function App() {
  return (
    <div className="App">
<Router>
  <Switch>
    <Route>
      <Navbar/>
      <Search/>
      <Header/>
      <Details/>
      <Footer/>
    </Route>

    <Route>
      <Navbar/>
      {/* <Search/> */}
    </Route>
  
      <Route>
      <Navbar/>
      {/* <Details/> */}
        </Route>      
  </Switch>
</Router>
    </div>
  );
}

export default App;
