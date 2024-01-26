
function imageHandler(event, search = true){
    event.preventDefault();
   const searchValue = document.querySelector("#inputbox").value;
   console.log(searchValue);
    const promice = fetch(`https://api.unsplash.com/search/photos?page=${count}&query=${searchValue}&client_id=9xDjV6ba5gKToWK3rjaq9CfNmj7v9L9SGwocDxmLRqM`);
    console.log(promice);
    promice.then((response)=>{
       //console.log(response);
       return response.json();
    })
    .then((result)=>{
        const array = result.results;
        const innerContainer = document.querySelector(".innerContainer");
        if(search==true){
            innerContainer.innerHTML = "";
        }
       
        array.forEach((element) => {
            console.log(element.urls.small);
            const url = element.urls.small;
            const description = element.alt_description;
            console.log(description)
           
            innerContainer.innerHTML += `<div class="imageContainer">
            <figure>
                <img src="${url}" alt="image">
            </figure>
            <figcaption>${description}</figcaption>
        </div>`;
        });
    })
    .catch((error) =>{
        console.log("not gettinhg file");
    })


}
const  form = document.querySelector("form");
form.addEventListener("submit" , imageHandler);
console.log(form);
// document.querySelector("from").addEventListener("submit" , (e)=>{
//     e.preventDefault();
//     imageHandler();
// });
var count = 1;
document.querySelector("#btn").addEventListener("click" , (e)=>{
    count++;
    imageHandler(e , false);
    
})