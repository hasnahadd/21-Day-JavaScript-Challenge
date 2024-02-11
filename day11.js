let email = 'testgmail.com'
function validateEmail(userEmail){
if (/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail) ) {
    return'Email is valid';
    
}else{

  return 'email not Valid'  ;
}


}
console.log( validateEmail(email));