async function getNames() {
  let endPoint = "https://reqres.in/api/users";

  try {
    let response = await fetch(endPoint);

    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`An Error Ocured ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    throw Error;
  }
}

async function renderUserName() {
  let ul = document.getElementById("person");

  try {
    let users= await getNames();
    let names=users.data;
    console.log(JSON.stringify(names));

    

    names.forEach((user) => {
      let li = document.createElement("li");
      li.style.listStyleType = "none";
      
      li.innerHTML = `${user.id},${user.first_name} ${user.last_name}`;
     
      ul.appendChild(li);
    });
  } catch (error) {
    alert(`Error Received ${error}`);
  }
}
