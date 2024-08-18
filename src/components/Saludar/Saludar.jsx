import React, { useState } from 'react';
import './Saludar.css';

export const Saludar = () => {
  const [name, setName] = useState(''); 
  const [message, setMessage] = useState(''); 

  const handleChange = (event) => {
    setName(event.target.value); 
  };

  const handleClick = () => {
    setMessage(`Bienvenido, ${name}!`); 
  };

  return (
    <>
    <div className='Saludar'>
      <div className="form__group field">
        <input 
          type="text" 
          className="form__field" 
          placeholder="Name" 
          value={name} 
          onChange={handleChange}
        />
        <label htmlFor="name" className="form__label">Name</label>
      </div>
      <button className='btn-saludar' onClick={handleClick}>Salúdame</button>
      
    </div>
    <div className='box-message'>{message && <p className='welcome-message'>{message}</p>}</div>
    </>
  );
}


