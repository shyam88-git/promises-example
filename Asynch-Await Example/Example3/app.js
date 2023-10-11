async function makePromise(){

    let num=Math.round(Math.random()*1);
    console.log("The random num is:"+num);
    if(num!=0){

        return '😂😂';
    }
    else
     return '😒😒';
}


function doTask(){

    let resSpan=document.getElementById('result');
    let pr=makePromise();
    pr.then((result)=>{

        resSpan.innerHTML=result
    });
}