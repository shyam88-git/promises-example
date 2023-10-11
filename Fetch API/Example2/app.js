async function getPerson(){

    let endPoint='https://randomuser.me/api';

   try{

    let response=await fetch(endPoint);

    if(response.status===200){

        return await response.json();
    }
    else{

        throw new Error(`An Error Ocurred ${response.status}`);
    }
   }
   catch(error){

    console.error(error);
    throw error;
   }
}


async function renderPerson(){

    let btn=document.querySelector('input');
    btn.value=" ";
    btn.style.backgroundImage="url('loading4.gif')";
    btn.style.backgroundRepeat='no-repeat';
    btn.style.backgroundPosition='center';

    let div=document.getElementById('person');

    try{

        let persons=await getPerson();
        let pr=persons.results[0];
        let img=document.createElement('img');
        img.src=pr.picture.large;

        let article=document.createElement('article');
        article.innerHTML=`<p><strong> Name : </strong> ${pr.name.first} ${pr.name.last} </p>`;
        article.innerHTML+=`<p><strong> Gender : </strong> ${pr.gender} </p>`;
        article.innerHTML+=`<p><strong> Phone : <strong> ${pr.phone} </p>`;

        div.innerHTML="";
        div.appendChild(img);
        div.appendChild(article);


    }
    catch(error){

        alert(`Error received ${error}`);


    }
    finally{


        btn.style.backgroundImage=null;
        btn.value='Show Person';
    }
}