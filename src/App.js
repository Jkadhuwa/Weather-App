import { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Input from './components/Input';
import Weather from './components/Weather';


function App() {
  const [city, setCity] = useState('Kigali');

  const handleChange = (e) => {
    setCity(e.target.value)
  }

 const handleSearch =  () => {
   alert('clicked')
 }

  return (
    <div className='flex  bg-gray-900 min-h-screen items-center'>
      <div className='flex flex-col mx-auto'>
      <section> 
        <Header/>
      </section>
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
      </div>

     
    </div>
  );
}

export default App;
