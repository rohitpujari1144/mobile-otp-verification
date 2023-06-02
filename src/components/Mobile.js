import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { auth } from './firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import OtpInput from 'otp-input-react'
import { useNavigate } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Mobile() {
  let navigate = useNavigate()
  const [open, setOpen] = useState(false);
  let [otp, setOtp]=useState("")
  const [phone, setPhone]=useState('')
  let [user, setUser]=useState(null)
  const [showDiv, setShowDiv]=useState(true)

  const sendCode=async()=>{
    const mobile=document.getElementById('mobile')
    const mobileError=document.getElementById('mobileError')
    if(mobile.value===''){
      mobileError.innerText='Required'
    }
    else{
      mobileError.innerText=''
      try{  
          let recaptchaVerifier= await new RecaptchaVerifier("recaptchaDiv", {}, auth);
          let confirmation=await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
          console.log(confirmation);
          setUser(confirmation)
          setShowDiv(false)
        }catch(error){
          console.log(error);
        }
    }
  }

  const mobileValidate=()=>{
    const mobile=document.getElementById('mobile')
    const mobileError=document.getElementById('mobileError')
    if(mobile.value===''){
      mobileError.innerText='Required'
    }
    else{
      mobileError.innerText=''
    }
  }

  const confirmOtp=async()=>{
    try{
        await user.confirm(otp);  
        navigate('/home')
      }catch(error){
        setOpen(true)
      }
  }

  const changeMobileNumber=()=>{
    setShowDiv(true)
  }

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
      return;
      }
      setOpen(false);
  };
  const action = (
      <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
          </IconButton>
      </React.Fragment>
  );
  return (
    <>
    
      <div className="col-4 rounded shadow position-absolute top-50 start-50 translate-middle">
        {
          showDiv?
          <div className=''>
              <h4 className='m-3 text-center' style={{fontFamily:'Trebuchet MS'}}>Enter mobile number</h4>
              <div className='text-center'>
                <TextField className='text-center' style={{width:'60%'}} id="mobile" label="Mobile Number" variant="outlined" placeholder='+91 1234567890' value={phone} onChange={(e)=>setPhone(e.target.value)} onKeyUp={mobileValidate}/>
              </div>
              <span  style={{marginLeft:"105px", fontSize:'90%'}}>Please enter mobile number in +91 1234567890 format</span>
              <div style={{marginLeft:"105px"}}>
                <span id="mobileError" className=' text-danger'></span>
              </div>
              <div id='recaptchaDiv'></div>
              <div className='text-center'>
                <Button className='m-3' variant="contained" endIcon={<SendIcon />} onClick={sendCode}>send otp</Button>
              </div>
          </div>:
          <div className='text-center'>
            <h4 className='m-3' style={{fontFamily:'Trebuchet MS'}}>Enter OTP</h4>
            <div className='d-flex flex-column align-items-center'>
              <OtpInput className="ms-3" OTPLength={6} otpType="number" autoFocus value={otp} onChange={setOtp}></OtpInput>
              <Button className='m-3' style={{maxWidth:'50%'}} variant="contained" onClick={confirmOtp}>verify otp</Button>
              <Button className='mb-3' size="small" onClick={changeMobileNumber}>change mobile number</Button>
            </div>
          </div>
        }
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message="Incorrect OTP" action={action}/>
    </>
  );
}

export default Mobile;
