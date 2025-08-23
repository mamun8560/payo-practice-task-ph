// login Button Functionality
document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault();
   const mobileNumber= 01740398560;
   const pinNumber= 12345;
   const mobileNumberValue= document.getElementById('mobile-number').value;
   const mobileNumberValueConverted= parseInt(mobileNumberValue);
   const pinNumberValue= document.getElementById('pin-number').value;
   const pinNumberValueConverted= parseInt(pinNumberValue);
   if(mobileNumberValueConverted===mobileNumber && pinNumberValueConverted=== pinNumber ){
    window.location.href='./home.html'
   }
    else{
        alert('Invalid Credentials');
    }
   
});
