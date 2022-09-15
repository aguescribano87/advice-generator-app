import './App.css';
import divider from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'

function App() {

  return (
    <div className="App">
      <div className='adviseConteiner'>
        <p className='titleText'>Advide #123</p>
        <p className='adviceText'>"Drink a glass of water before meals."</p>

        <div className='bottomContainer'>
          <img alt='...' src={divider} />
          <span className='diceContainer'>
            <img alt='...' src={dice} />
          </span>
        </div>

      </div>
    </div>
  );
}

export default App;
