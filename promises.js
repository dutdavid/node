//Synchronous Task - The Program has to wait for the previous task to finish before it moves on to the next part
//Asynchronous Tasks - The program moves to the next line of code before the task is completed.
// A promise is a placeholder for a future value We create promises using the new keyword.
/*The promise instance takes a function as a parameter and that function has 2 arguments. resolve and reject which are both functions.

Inside that inner function that we pass as a parameter is where we perform our asynchronous tasks. We usually return the promise from a function.

*/
function asycTask(){
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Action complete");
            resolve();
        },1000);
    });
    return promise;
}

/*
//We call the resolve function after the async task has been completed.
//When we encounter an error we call the reject function.

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
*/
