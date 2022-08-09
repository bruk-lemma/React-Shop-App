import './App.css';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageScreen from './screens/HomePageScreen';
function App() {
  return (
<>
<Header/>
<main className='py-3'>
<Container>
<HomePageScreen/>
</Container>
</main>
<Footer/>
</>
  );
}

export default App;
