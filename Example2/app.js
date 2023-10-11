let resIcn; 
let resSpan;
function makePromise(n){

    return new Promise(function(resolve,reject){

        setTimeout(()=>{
            let value=n;
            if(value%2==0){
    
                resolve("HUrray!I Completed the project");
            }
            else{
    
                reject("Sorry! I didnot complete the project");
            }


        },2000);


       
    });
}

function success(msg){

    
    resSpan.innerHTML+=msg;


    resIcn.innerHTML='👌👌👌';
}

function failure(msg){

    
    resSpan.innerHTML+=msg;
    
    
    resIcn.innerHTML='😂😂😂';

}


function doTask(){

    let now=new Date();
    let currSec=now.getSeconds();

     resSpan=document.getElementById('result');
    resSpan.innerHTML='curr value is :'+currSec +"<br>";

     resIcn=document.getElementById('icn');
    resIcn.innerHTML="";

    let p=makePromise(currSec);
    p.then(success,failure);



}