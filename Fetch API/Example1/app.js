function renderUsers(){

    let endPoint='team_sca_details.txt';

    fetch(endPoint).then((response)=>{

        if(response.status!==200){

            alert("Error in server communication");
        }
        else{

            return response.json();
        }
    }).then((users)=>{

        let html="<h2>Team SCA </h2>";
        users.forEach((user)=>{

            let htmlSegment=`<section class="card">

             <img src="${user.profileURL}" style="width:100%"/>
             <h3>${user.firstName} ${user.lastName} </h3>
             <section class="email">
             <a href="email:${user.email}">${user.email}></a>

              </section>
             </section>`;

             html+=htmlSegment;
        });

        let aboutTeam=document.querySelector('#about-team');
        aboutTeam.innerHTML=html;
    });
}