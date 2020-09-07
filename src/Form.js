import React,{useState} from 'react';
import {isEmail} from './validation/validation'
import './Form.css';

const Form =()=> {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(false);
const [success, setSuccess] = useState('');


const validateForm = () => {
  if(!email || !isEmail(email) || !password ) {
    setError(true);
    return false;
  }else{
    return true;
  }
}


const handleOnSubmit =(e)=>{
  setError(false);

  if(validateForm()){
     setSuccess('Form Submit Done')
  }
}

  return (
    <div className="main" data-test="component-app">
    <div className="App">
     <h1>Form</h1>
     <h3><b>{success ? success :''}</b></h3>
     <lable><b>Email</b></lable>
     <input data-test="input1" value={email} onChange={(e)=>setEmail(e.target.value)} className='inputCss'/>
     {error && !email ?  <p data-test="p1">please fill the Email</p>:''}
     {error && !isEmail(email) ?  <p data-test="p2">Your Email is wrong</p>:''}
     <label><b>Password</b></label>
     <input data-test="input2" value={password} onChange={(e)=>setPassword(e.target.value)} className='inputCss'/>
     {error && !password ? <p data-test="p3">please fill the Password</p>:''}
     <button data-test="button" onClick={e =>handleOnSubmit(e)} className='buttonCss'>Submit</button>
    </div>
    </div>
  );
}

export default Form;
