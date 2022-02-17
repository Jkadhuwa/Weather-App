import React from 'react';


const Button = ({name, onClick, styles}) => {
    return (
        <div className=''>
            <button type="" 
            onClick={onClick} 
            
            className={`${styles} rounded-md w-16 h-8`}>{name}</button>

        </div>
    )

}

export default Button;