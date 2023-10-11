function makePromise(n){

    return new Promise(function(resolve,reject){


            let value=n;
            if(value%2==0){

                resolve("Hurray!I completed the project");
            }
            else{

                reject("Sorry!I couldn't complete the project");
            }
    });
}

function success(msg){
    let resSpan=document.getElementById('result');
    resSpan.innerHTML+=msg;
    let resIcn=document.getElementById('icn');
    resIcn.innerHTML='👌👌👌';




}
function failure(msg){

    let resSpan=document.getElementById('result');
    resSpan.innerHTML+=msg;
    let resIcon=document.getElementById('icn');
    resIcon.innerHTML='😂😂😂';


}
function doTask(){

    let now=new Date();
    let currSec=now.getSeconds();
    let resSpan=document.getElementById('result');
    resSpan.innerHTML='Curr value is:' +currSec+"<br>";
    let pr=makePromise(currSec);
    pr.then(success,failure);

}