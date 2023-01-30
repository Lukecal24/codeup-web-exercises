(async () =>{
"use strict"










    // fetch(`https://api.github.com/users`, {headers: {'Authorization': `token ${keys.github}` }}).then((response)=>{
    //     console.log('resolved', response);
    //     return response.json;
    // }).then((data)=>{
    //     console.log(data);
    // }).catch((error)=>{
    //     console.log('rejected', error);
    // });


    async function getUsers (username) {
        const response = await fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${keys.github}` }});
        const events = await response.json();
        for(let event of events){
          if(event.type === "PushEvent"){
              return event.created_at;
          }
        }

        // console.log(data);
    };

    getUsers("Lukecal24")
        .then(date => console.log(date))
        .catch((error)=>console.error(error));




})();