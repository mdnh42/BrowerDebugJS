const watch = () =>{
    let num = 0;
    setInterval(()=>{
        document.getElementById('start').innerText =  num++;
    }, 1000);
    
}




document.getElementById('s').addEventListener('click', function(){
    watch();
})
document.getElementById('st').addEventListener('click', function(){
    watch(1100);
})