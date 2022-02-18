import React from 'react';
import { useSelector } from 'react-redux';

const Weather = () => {


    const {weather} =  useSelector(state => state?.weather);

  return (
    <div className='border border-blue-200 rounded-md w-80 h-72 mx-auto text-white mt-10'>
        <section className='flex m-4'>
            <div className='rounded-full border w-16  h-16'>
                <span className='flex items-center justify-center'>
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="weather Img" />
                </span>

            </div>
            <div className='m-6 font-light text-sm'>
                {weather?.weather[0].main}
            </div>

        </section>
        <section className='mx-2.5'>
            <div className='mx-24 text-yellow-600'>
                {Math.ceil(Number(weather?.main.temp))} {''} <span>°F</span>
            </div>
        </section>
        <section className='m-4 font-light text-sm'>
            <div>
                {weather?.name}, {weather?.sys?.country}

            </div>
            <div className='mt-2 font-extralight'>
                Cleaniest City in Africa

            </div>


        </section>


    </div>
  )
}

export default Weather