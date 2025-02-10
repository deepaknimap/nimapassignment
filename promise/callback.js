const checkOtp = (otp , callback)=>{
  if(otp === 1234){
    setTimeout(()=>{
      callback(true);
    } , 2000)
  }
  else{
    callback(false)
  }
}

const accessAcount = (check)=>{
  if(check){
    console.log('now you can access your account');
    console.log('your account is 1239@hello and password is 12334')
  }
  else{
    console.log('oops you entered wrong otp')
  }
}

checkOtp(1234 , accessAcount);