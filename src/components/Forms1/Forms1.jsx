import React from 'react'
import { useState } from 'react';
import './Forms1.css'

export const Forms1 = () => {

        const [name,setname] = useState ('');
        const [id,setid]= useState('');
        const [user,setuser] = useState('');
        const [phone,setphone] = useState('');
        const [email,setemail] = useState('');
        const [keep,setkeep] = useState([]);
    
    
        const handleName = (event) => {
            setname(String(event.target.value))
        };
    
        const handleId = (event) => {
            setid (Number(event.target.value))
        };
    
        const handleUser = (event) => {
            setuser(String(event.target.value))
        };
    
        const handlePhone = (event) => {
            setphone (Number(event.target.value))
        };
        
        const handleEmail = (event) => {
            setemail (String(event.target.value))
        };
    
        const Sendform = (event) => {
            event.preventDefault();
    
        const newPerson = { name, id, user, phone, email };
    
    
        const exists = keep.some((keep) => keep.id === id);
    
        if (exists) {
            alert('Este ID ya está registrado.');
          } else {
         
            setkeep([...keep, newPerson]);
            alert('Persona registrada con éxito.');
      
            setname('');
            setid('');
            setuser('');
            setphone('');
            setemail('');
          }
        };

  return (
    <>
    <div className='container-form'>
    <div className="ContactUs">
    <form className="form-1" onSubmit={Sendform}>
      <p className="title-1">Contact Us</p>
      <p className="message-1">Leave your information in the form.</p>
      <div className="flex">
        <label>
          <input className="input" 
          type="text" 
          placeholder="" 
          value={name}
          required
          onChange={handleName} />
          <span>Name</span>
        </label>

        <label>
          <input
            className="input"
            type="number"
            placeholder=""
            value={id}
            onChange={handleId}
            required
          />
          <span>Id</span>
        </label>
      </div>

      <label>
        <input className="input" 
        type="text" 
        placeholder="" 
        value={user}
        onChange={handleUser}
        required />
        <span>User</span>
      </label>

      <label>
        <input className="input" 
        type="tel" 
        placeholder="" 
        value={phone}
        onChange={handlePhone}
        required />
        <span>Phone</span>
      </label>
      <label>
        <input className="input" 
        type="email" 
        placeholder="" 
        value={email}
        onChange={handleEmail}
        required />
        <span>Email</span>
      </label>
      <button className="submit">
        Send
      </button>
    </form>
  </div>
  <div className='box-ul'>
  <ul>
 {keep.map((form,idx) => (
   <li key = {idx}>
     * {form.name} 
     * {form.id} 
     * {form.user} 
     * {form.phone} 
     * {form.email}
   </li>
 ))}
</ul>
  </div>
  </div>
</>
 
)
};


