function imageHandler(){
   
    const promice = fetch('https://api.unsplash.com/search/photos?page=1&query=dog&client_id=9xDjV6ba5gKToWK3rjaq9CfNmj7v9L9SGwocDxmLRqM');
    console.log(promice);
    promice.then((response)=>{
       console.log(response);
       return response.json();
    })
    .then((result)=>{
        console.log(result.results[0].slug);
        console.log(result.results[0]);
        const output = result.results[0].slug;
        document.querySelector("div").append(output);
    })
    // const promice = fetch('https://dog.ceo/api/breeds/image/random');
    // console.log(promice);
    // promice.then((response)=>{
    //     //console.log(response.json());
    //     return response.json();
    // })
    // .then((result)=>{
    //     console.log(result);
    // })
    // .catch((error)=>{
    //     console.log("getting error");
    // })

}
document.querySelector("div");
imageHandler();