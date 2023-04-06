import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './main';

function App() {
  return (
    <div className="App" style={{backgroundImage : 'url(./bgLanding.png)'}}>
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
