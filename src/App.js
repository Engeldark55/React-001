//importacion de css e img
import './assets/css/styles.css'
//components
import ComHeader from './components/ComHeader';
import ComNav from './components/ComNav';
import ComItem from './components/ComItem';
import ComFoo from './components/Comfoo';
//main
function App() {
  return (
    <div className="App">
      <div id="cuerpo">
      <header id="cabezera" class="box">
          <ComHeader/>
          <ComNav/>
        </header>
        <main id="cuerpo" class="box">
        <ComItem/>
        </main>
        <footer id="pie" class="box">
        <ComFoo/>
        </footer>
      </div>
    </div>
  );
}

export default App;
