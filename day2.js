let A = 20 ;
let B= 50;
let Name = 'Manel';
let isValid = true;
function add(A,B){

    return   A+B;
}
console.log(add(A,B));

function Concat (word){
return `hello my name is ${word}`;
}
console.log(Concat(Name));

function checkName(isValid ,User ){
if(isValid === true  && User.length>0){
return  `your user ${User} is valide  `;

}
}
console.log(checkName(isValid,Name));
