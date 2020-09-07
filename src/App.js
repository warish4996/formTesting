import React,{useState} from 'react';
import './App.css';

export default ()=> {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState(false);
const [vaildEmailError, setValidEmailError] = useState(false);
const [passwordError, setPasswordError] = useState(false);
const [success, setSuccess] = useState('');

const isEmail =  (email) => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateForm = () => {
  if(!email) {
    setEmailError(true);
    return false;
  }
  else if(!isEmail(email)) {
    setValidEmailError(true);
    return false;
  }else if(!password) {
    setPasswordError(true);
    return false;
  }else{
    return true;
  }
}


const handleOnSubmit =(e)=>{
  setEmailError(false);
  setValidEmailError(false);
  setPasswordError(false);

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
     {emailError ? <p data-test="p1">please fill the Email</p>:''}
     {vaildEmailError ? <p>Your Email is wrong</p>:''}
     <label><b>Password</b></label>
     <input data-test="input2" value={password} onChange={(e)=>setPassword(e.target.value)} className='inputCss'/>
     {passwordError ? <p>please fill the Password</p>:''}
     <button data-test="button" onClick={e =>handleOnSubmit(e)} className='buttonCss'>Submit</button>
    </div>
    </div>
  );
}
