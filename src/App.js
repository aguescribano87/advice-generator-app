import './App.css';
import divider from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'
import { useEffect, useState } from 'react';
import { getAdvice } from './api/getAdvice';
import {
  useQuery,
} from 'react-query'
import { Prueba } from './prueba';

function App() {
  const { data, error, isError, isLoading, isSuccess, isFetching, refetch } = useQuery(['advice'], getAdvice)

  /*   const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setIsError] = useState(false)
  
  const refetch = () => {
  
      setIsLoading(true)
      getAdvice()
        .then(setData)
        .catch(setIsError)
        .finally(() => setIsLoading(false))
    
    }
  
    useEffect(() => {
      refetch()
    }, []) */

  const { advice, id } = data?.slip || { advice: "", id: "" }

  if (error) {
    return <div>{error.message}</div>
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
