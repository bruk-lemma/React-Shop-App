import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageScreen from './screens/HomePageScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
<Router>
<Header/>
<main className='py-3'>
<Container>
  <Routes>
<Route exact path='/'   element={<HomePageScreen/>}/>
<Route  path='/product/:id' element={<ProductScreen/>}/>
</Routes>
</Container>
</main>
<Footer/>
</Router>
  )
}

export default App;
