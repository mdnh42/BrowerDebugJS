const getData = new Promise((resolve, reject)=>{
    // resolve(56665); 
    // reject('No data avaiable');

    const num = Math.random() * 10; 
    console.log(num); 
    if(num<5){
        resolve(5555);
    }
    else{
        reject('No data avaiable');

    }
}); 

getData
    .then(data => console.log(data+22))
    .catch(err=> console.error('ERR: ', err));