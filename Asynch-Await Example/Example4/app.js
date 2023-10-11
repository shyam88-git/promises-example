function getEmoji() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        let num = Math.round(Math.random() * 1);
        console.log("Random num is:" + num);
        if (num != 0) {
          resolve("😊");
        } else {
          reject("😒");
        }
      }, 3000);
    });
  }
  async function doTask() {
    let resSpan = document.getElementById("result");

    try{
        let pr = await getEmoji();
        resSpan.innerHTML = pr;


    }
    catch(err){

        resSpan.innerHTML=err;
    }
   
  }
  