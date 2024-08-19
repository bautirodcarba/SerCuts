

const itemCardTemplate = document.querySelector("[item-cards-template]");
const itemContainer = document.querySelector("[items-father-container]");
const searchInput = document.querySelector("[data-search]");


let users = []
searchInput.addEventListener("input",(e)=>{
    const value = e.target.value.toLowerCase();
    users.forEach(user => {
        const isVisible = user.pName.toLowerCase().includes(value) || user.pDescription.toLowerCase().includes(value);
        if(!isVisible){
            user.element.style.display = "none";
        }else{
            user.element.style.display = "flex";
        }
        //user.element.classList.toggle("hide",!isVisible);
        
    });
});

//fetch("https://jsonplaceholder.typicode.com/users")
fetch("inventory.json")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const item = itemCardTemplate.content.cloneNode(true).children[0];
            const title = item.querySelector("[data-title]");
            const description = item.querySelector("[data-description]");
            const price = item.querySelector("[data-price]");
            const image = item.querySelector("[data-image]");
            const identify = item.querySelector("[data-id]");
            title.textContent = user.productName;
            description.textContent = user.productDescription;
            price.textContent = "$"+user.productPrice;
            image.src = user.productImageSRC;
            identify.id = user.productType;
            itemContainer.append(item);
            console.log(item);
            return { pName: user.productName, pDescription: user.productDescription, element: item, pId: user.productType}
        })        
    })

function filter(type){
    users.forEach(user => {
        //const isVisible = user.pName.toLowerCase().includes(value) || user.pDescription.toLowerCase().includes(value);
        if(user.pId.toLowerCase() == type.toLowerCase()){
            user.element.style.display = "flex";
            
        }else if(type == "todo"){
            users.forEach(user => {
                user.element.style.display = "flex";
            });
        }else{
            user.element.style.display = "none";
        }
        //user.element.classList.toggle("hide",!isVisible);
        
    });
};
