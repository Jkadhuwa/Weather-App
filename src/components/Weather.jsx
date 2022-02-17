import React from 'react'

const Weather = () => {
  return (
    <div className='border border-blue-200 rounded-md w-80 h-72 mx-auto text-white mt-10'>
        <section className='flex m-4'>
            <div className='rounded-full border w-16  h-16'>
                <span className='flex items-center justify-center'>X</span>

            </div>
            <div className='m-6 font-light text-sm'>
                Sunny

            </div>

        </section>
        <section className='mx-2.5'>
            <div className='mx-24 text-yellow-600'>
                3
            </div>
        </section>
        <section className='m-4 font-light text-sm'>
            <div>
                kigali, RW

            </div>
            <div className='mt-2 font-extralight'>
                Cleaniest City in Africa

            </div>


        </section>


    </div>
  )
}

export default Weather