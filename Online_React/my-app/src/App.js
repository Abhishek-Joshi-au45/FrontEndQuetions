import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <>
  <Navbar navbar="Nav" about= "About"  />
  <Textbox heading="Enter the Value" />
  <About />
  </>
  );
}

export default App;
