import React from "react";
import { useState } from "react";
import "./Operaciones.css";

export const Operaciones = () => {
const [input1, setinput1] = useState('');
const [input2, setinput2] = useState('');
const [resulatado, setResultado] = useState('');

const handleChangeInput1 = (event) => {
    setinput1(Number(event.target.value));
  };

  const handleChangeInput2 = (event) => {
    setinput2(Number(event.target.value));
  };


const suma = () =>{
    setResultado(Number(input1) + Number(input2));
};

const resta = () =>{
  setResultado(Number(input1) - Number(input2));
};

const multiplicar = () =>{
  setResultado(Number(input1) * Number(input2));
};

const dividir = () =>{
  setResultado(Number(input1) / Number(input2));
};


  return (
    <>
    <div className="Operaciones">
      <input
        placeholder="Escriba un numero"
        className="input0"
        name="text"
        type="number"
        value={input1}
        onChange={handleChangeInput1}
        required
      />
      <input
        placeholder="Escriba un numero"
        className="input0"
        name="text"
        type="number"
        value={input2}
        onChange={handleChangeInput2}
        required
      />
      <button onClick={suma}>Sumar</button>
      <button onClick={resta}>Restar</button>
      <button onClick={multiplicar}>Multiplicar</button>
      <button onClick={dividir}>Dividir</button>
    </div>
    <div className="box-resultado">{resulatado && <h2 className='resultado'>{resulatado}</h2>}</div>
</>
  );
};
