
const  btn = document.querySelector('.btn');


btn.addEventListener("click", (e)=>{
    e.preventDefault();

    console.log('gghj');
    const  inpw = document.querySelector('.in-pw').value;
    const inTxt = document.querySelector('.in-txt').value;
    const  inno = document.querySelector('.in-no').value;
    const  pass = document.querySelector('.pass');
    const   no = document.querySelector('.no');
    const   txt = document.querySelector('.txt');
    const   form = document.querySelector('form');
 
   if (inTxt === ''){
    txt.innerHTML = 
    ' ** Please fill the username field'
    return false;
   }
   else if (inTxt.length < 3 || inTxt.length >= 20 ){
    txt.innerHTML = 
    ' ** Username lenght must be between 3 and 20 '
    return false;
   }
   else if (!isNaN(inTxt) ){
    txt.innerHTML = 
    ' ** only character is allowed '
    return false;
   }
  else if (inpw === '' ){
    pass.innerHTML = 
    " ** Please fill the password field";
    txt.innerHTML='';
    return false ;
   }
  else if (inpw.length < 5 || inpw.length >= 20 ){
    pass.innerHTML = 
    ' ** password lenght must be between 5 and 20 '
    txt.innerHTML='';
    return false;
   }
  else if (inno === ''){
    no.innerHTML = 
    ' ** Please fill the Mobile Number field'
    pass.innerHTML='';
    txt.innerHTML='';
    return false;
   }
  else if (inno.length != 11){
    no.innerHTML = 
    ' ** Please Your Moblie Number must be 11 Digits'
    pass.innerHTML='';
    txt.innerHTML='';
    return false;
   }
  else if (inno != +inno){
    no.innerHTML = 
    ' ** this is not a valid Moblie Number'
    pass.innerHTML='';
    txt.innerHTML='';
    return false;
   }
   else{
    no.innerHTML='';
    pass.innerHTML='';
    txt.innerHTML='';
    form.reset();
   }
})
