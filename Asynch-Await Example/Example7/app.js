let resSpan;
function calculateSquare(value){

    return new Promise((resolve,reject)=>{
        let num=Number(value);

         setTimeout(()=>{

            if(isNaN(num)){

                reject("Error! cannot calc string in square ");
                return;
            }
            resolve(num*num);
         },2000);


    });
}

async function doTask(){

    let inp=document.querySelector('#userinp');
    let data=inp.value;
    // 

     resSpan=document.getElementById('result');
     resSpan.innerHTML="curr value is :"+data+"<br>";
   
    try{

        let pr=await calculateSquare(data);
        resSpan.innerHTML+="it's square is :"+pr+"<br>";

        let pr2=await calculateSquare(pr);
        resSpan.innerHTML+="it's square is :"+pr2+"<br>";

        let pr3=await calculateSquare(pr2);
        resSpan.innerHTML+="it's square is :"+pr3;



    }
    
    catch(error){

        resSpan.innerHTML=error;


    }


}