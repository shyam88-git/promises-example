async function makePromise(){

    return 25;
}

function doTask(){

    let resSpan=document.getElementById('result');
    let pr=makePromise();
    resSpan.innerHTML=pr;
}