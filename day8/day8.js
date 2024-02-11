const para = document.createElement("p");
const text = document.createTextNode("This is new.");
const div = document.getElementById('dynamicDiv');
para.appendChild(text);
div.appendChild(para);