console.log(5);
console.log(6);
setTimeout(()=>{
    console.log(2);
}, 1000);


console.log(4);
console.log(5);

console.log(5);
console.log(6);
let num = 0; 
setInterval(()=>{
    console.log(num++);
}, 1000);


console.log(4);
console.log(5);

clearInterval(10);