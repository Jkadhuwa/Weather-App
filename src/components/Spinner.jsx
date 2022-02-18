import React from "react";


const Spinner =  ({message}) => {
    return(
        <div className="flex flex-col justify-center items-center mx-auto h-80 w-72 ">
            <div className="flex border-2 border-yellow-600 border-b-0 animate-spin transition ease-in-out duration-3000 rounded-full h-16 w-16 mb-4"></div>
            <p className="flex text-white text-sm font-light text-center">{message}</p>

        </div>
    )
}

export default Spinner;