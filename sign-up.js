//var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 /* if (input.value.match(validRegex)) {

    alert("Valid email address!");

    document.form1.text1.focus();

    return true;

  } else {

    alert("Invalid email address!");

    document.form1.text1.focus();

    return false;

  }  */

  
const  btn = document.querySelector('.btn');


btn.addEventListener("click", (e)=>{
    e.preventDefault();

    console.log('gghj');
    const  inpw = document.querySelector('.in-pw').value;
    const  incoPw = document.querySelector('.in-con-pw').value;
    const inTxt = document.querySelector('.in-txt').value;
    const  name = document.querySelector('.in-name').value;
    const  email = document.querySelector('.in-emm').value;
    const  inno = document.querySelector('.in-no').value;
    const  pass = document.querySelector('.pass');
    const Copass = document.querySelector('.co-pass');
    const   txt = document.querySelector('.txt');
    const   na = document.querySelector('.na');
    const   emm = document.querySelector('.emm');
    const   no = document.querySelector('.no');
    const   form = document.querySelector('form');
   if (name === ''){

    na.innerHTML = 
    ' ** Please fill the name field'
    return false;
   }   
   if (email === ''){
    emm.innerHTML = 
    ' ** Please fill the email field'
    na.innerHTML='';
    return false;
   }      
   if(   email.charAt(email.length - 4) != "." &&
   email.charAt(email.length - 3) != "."  || email.indexOf("@") <= 0){
    emm.innerHTML=
    ' ** Please enter a valid email'
    na.innerHTML='';
    return false;
   }
   if (inTxt === ''){
    txt.innerHTML = 
    ' ** Please fill the username field'
    emm.innerHTML='';
    na.innerHTML='';
    return false;
   }
   if (inTxt.length < 3 || inTxt.length >= 20 ){
    txt.innerHTML = 
    ' ** Username lenght must be between 3 and 20 ';
    na.innerHTML='';
    emm.innerHTML='';
    return false;
   }
   if (!isNaN(inTxt) ){
    txt.innerHTML = 
    ' ** only character is allowed '
    na.innerHTML='';;
    emm.innerHTML='';
    return false;
   }
   if (inpw === '' ){
    pass.innerHTML = 
    " ** Please fill the password field";
    txt.innerHTML='';
    na.innerHTML='';
    emm.innerHTML='';
    return false ;
   }
   if (inpw.length < 5 || inpw.length >= 20 ){
    pass.innerHTML = 
    ' ** password lenght must be between 5 and 20 '
    txt.innerHTML='';
    na.innerHTML='';
    emm.innerHTML='';
    return false;
   }
   if (incoPw != inpw){
    Copass.innerHTML = 
    ' ** Please the password does not match'
    pass.innerHTML='';
    txt.innerHTML='';
    na.innerHTML='';
    emm.innerHTML='';
    return false;
   }
   if (inno === ''){
    no.innerHTML = 
    ' ** Please fill the Mobile Number field'
    pass.innerHTML='';
    txt.innerHTML='';
    na.innerHTML='';
    Copass.innerHTML='';
    emm.innerHTML='';
    return false;
   }
   if (inno.length != 11){
    no.innerHTML = 
    ' ** Please Your Moblie Number must be 11 Digits'
    pass.innerHTML='';
    txt.innerHTML='';
    na.innerHTML='';
    Copass.innerHTML='';
    emm.innerHTML=''
    return false;
   }
   if (inno != +inno){
    no.innerHTML = 
    ' ** this is not a valid Moblie Number'
    pass.innerHTML='';
    txt.innerHTML='';
    na.innerHTML='';
    Copass.innerHTML='';
    emm.innerHTML=''
    return false;
   }
   else{
    no.innerHTML='';
    pass.innerHTML='';
    txt.innerHTML='';
    na.innerHTML='';
    Copass.innerHTML='';
    emm.innerHTML='';
    form.reset();
   }

})
