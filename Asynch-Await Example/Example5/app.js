async function makePromise(){
 return new Promise((resolve,reject)=>{


    setTimeout(()=>{

      resolve(10);
    },2000)
   
 });

    
}

async function doTask(){

    let resSpan=document.getElementById('result');
    let pr=makePromise();
    pr.then((result)=>{

      resSpan.innerHTML=result+"<br>";
      return result*2;
    }).then((result)=>{

      resSpan.innerHTML+=result+"<br>";
      return result*2;
    }).then((result)=>{

      resSpan.innerHTML+=result;
    });
}

