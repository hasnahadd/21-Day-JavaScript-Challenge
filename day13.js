let A = 20 ;
let B= 50;
let email = 'test@gmail.com'
// function CalculatSum(A,B){
//     return   A+B;
// }
// console.log(CalculatSum(A,B));
// 
// function validateEmail(userEmail){
// if (/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail) ) {
//     return'Email is valid';
    
// }else{

//   return 'email not Valid'  ;
// }


// }
// console.log( validateEmail(email));





const CalculatSum =(A,B)=> A+B;
console.log(CalculatSum(A,B));


const validateEmail =(userEmail)=>/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail) ?  console.log('Email is valid'):console.log('Email is  not Valid ')
console.log( validateEmail(email));