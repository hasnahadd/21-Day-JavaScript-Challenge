


function getCurrentDateTime(){
    const currentDate = new Date()
    return  currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();

}
console.log(getCurrentDateTime());