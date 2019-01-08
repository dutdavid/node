//A promise object has a then function that alerts us whether our asnc function has successfully completed or not.
//The then method takes on 2 anonymous functions as arguments. The first one is called if the Asynchronous Task was a success the second is called when the task fails.
function asycTask(){
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
             console.log("Action complete");
             resolve();
            }catch(err){
              reject()
            }
        },1000);
    });
    return promise;
}
asycTask().then(()=>{console.log('Event was successful')},()=>{console.log('Event failed')},)

//We can also pass in values to the resolve and reject function and then can be used by the then function’s arguments.
//We place the values inside the resolve and reject functions and log them when we call our then function.
/*
function asycTask(){
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
             console.log("Action complete");
             resolve("Success");
            }catch(err){
              reject(err)
            }
        },1000);
    });
    return promise;
}
asycTask().then((val)=>{console.log(val)},(err)=>{console.log(err)},)
*/
