import './App.css';
import divider from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'
import { Prueba } from './prueba';
import { useAdvice } from './Hooks/useAdvice';

function App() {
  const { data, isLoading, isFetching, refetch, isError } = useAdvice()
  const { advice, id } = data?.slip || { advice: "", id: "" }
console.log(isFetching);
  if(isError){
    return <div>Hay un error</div>
  }

  return (
    <div className="App">
      <div className='adviseConteiner'>
        <p className='titleText'>Advide #{id}</p>
        <p className='adviceText'>"{advice}"</p>

        <div className='bottomContainer'>
          <img alt='...' src={divider} />
          <span className='diceContainer'>
            <img className={(isLoading || isFetching) ? 'rotate' : ""} alt='...' src={dice} onClick={refetch} />
          </span>
        </div>

      </div>
      <Prueba />
    </div>
  );
}

export default App;
