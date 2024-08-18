import React from 'react'
import { useState } from 'react'
import './RandomColor.css'

export const RandomColor = () => {

const [ colors, setcolors] = useState('#ffffff');

const Changecolor = () =>{
  const newcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  setcolors(newcolor);
}

  return (
    <>
    <div className='box-background' style={{ backgroundColor: colors }}>
    <div className='box-Random'>
    <button className='btn-random'
     onClick={Changecolor}>
    <span className="text">RandomColor</span>
    <span className="blob"></span>
    <span className="blob"></span>
    <span className="blob"></span>
    <span className="blob"></span>
    </button>
    </div>
    </div>
    </>
  )
}


