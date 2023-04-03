function checkage(){
    const ageField = document.getElementById('age');
    const agetext = ageField.value; 
    
    const errorTag = document.getElementById('error');
    try{
        console.log(babara);
    }
    catch(err){
        console.log('ERROR', err);
        errorTag.innerHTML  = 'Something wrong';
    }
    finally{
        console.log("all done inside");
    }
    console.log(11111);
}