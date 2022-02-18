import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './components/Button';
import Header from './components/Header';
import Input from './components/Input';
import Spinner from './components/Spinner';
import Weather from './components/Weather';
import getWeatherUpdateAction from './redux/actions/weatherAction';


function App() {
  const [city, setCity] = useState('Kigali');

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getWeatherUpdateAction(city));
   
  }, [dispatch]);

  const handleChange = (e) => {
    setCity(e.target.value)
  }

 const handleSearch =  () => {
   dispatch(getWeatherUpdateAction(city));
 
 }
 const handleReset = () =>{
   setCity(city => 'Kigali');
   dispatch(getWeatherUpdateAction('Kigali'));

 }

 const {loading, error} =  useSelector(state => state?.weather);

  return (
    <div className='flex bg-gray-900 min-h-screen items-center'>
      <div className='flex flex-col mx-auto'>
      <section> 
        <Header/>
      </section>
      <div>
        {
          loading ?(
            <Spinner message={`Please wait as we load the weather for ${city}`}/>
          ): error ? (
            <div className='flex flex-col items-center'>
              <h3 className='text-red-400 text-lg text-center mt-2 capitalize'>{error?.message}</h3>
              <Button name="Back" styles="bg-blue-200 text-gray-800 mx-auto mt-6" onClick={handleReset} />
              </div>

          ): (
            <>
          <section className='flex justify-center mt-6'>
          <span className='mr-3'>
          <Input placeholder="Enter City" value={city} onChange={handleChange}/>
          </span>
          <span>
          <Button name="Search" onClick={handleSearch} styles='bg-indigo-600 text-white'/>
          </span>
        </section>
        <section>
          <Weather/>
        </section>
            
            </>

          )
        }
       


      </div>
     
      </div>

     
    </div>
  );
}

export default App;
