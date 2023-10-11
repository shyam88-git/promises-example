
function calculateSquare(value){

    return new Promise((resolve,reject)=>{

       setTimeout(()=>{

        let num=Number(value);
        if(isNaN(num)){
            reject("Error !can not calc square of the string ");
            return;
        }
        resolve(num*num);

         
       },2000);

    });


}
function doTask(){

    let inp=document.querySelector('#userinp');
    let data=inp.value;
    let resSpan=document.getElementById('result');
    let pr=calculateSquare(data);
    pr.then((result)=>{
        resSpan.innerHTML+="it's Square is :"+result+"<br>";
        return calculateSquare(result);


    }).then((result)=>{

        resSpan.innerHTML+="it's square is :"+result+"<br>";
        return calculateSquare(result);
    }).then((result)=>{

        resSpan.innerHTML+="it's square is :"+result+"<br>";
    });

    resSpan.innerHTML="Curr value is :"+data+"<br>";

    
}