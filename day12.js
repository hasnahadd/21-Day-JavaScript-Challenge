
let A = 30
let  B = 0


function DivideNumbers(A,B){

try{
if (B !==0) {
    console.log('Division is allowed')
    return A / B;
}else{
throw new Error('Division by zero is not allowed')

}

}
catch{
console.error('Error: Division  by zero  is  not   allowed' )
return null
}

}
console.log(DivideNumbers(A,B))