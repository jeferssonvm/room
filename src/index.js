const infoSlide =[
    {
        title:"  Discover innovative ways to decorate",
        description: "  We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        urlImg:"./img/img/desktop-image-hero-1.jpg"
    },
    {
        title:"We are available all across the globe",
        description: " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        urlImg:"./img/img/desktop-image-hero-2.jpg"
    },
    {
        title:"Manufactured with the best materials",
        description: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        urlImg:"./img/img/desktop-image-hero-3.jpg"
    }
    
]
const elementPrevious =document.getElementById("previous");
const elementNext =document.getElementById("next");
const imgArticle = document.getElementById("img-article");
const titleArticle = document.getElementById("title-section")
const contentSection = document.getElementById("content-section")
const closeNav = document.getElementById("close-nav");
const openNav = document.getElementById("open-nav");
const titleRoom = document.getElementById("room")
const navList = document.getElementById("nav-list");
const nav = document.getElementById("nav");
let position = 0;
elementPrevious.addEventListener("click", ()=>{
    scrollList(-1)

})


elementNext.addEventListener("click", () =>{
    scrollList(1)
})

const scrollList = (number)=>{
    if (position <= infoSlide.length-1 && position >= 0 ){
        position = position + number;
        if(position < 0){
            position = infoSlide.length-1;
        }
        if(position>infoSlide.length-1){
            position = 0;
        }
    }
    console.log(position)
    itemChange(position)
}
const itemChange = (numberPosition)=>{
    imgArticle.style.backgroundImage = `url(${infoSlide[numberPosition].urlImg})`
    titleArticle.textContent = infoSlide[numberPosition].title;
    contentSection.textContent = infoSlide[numberPosition].description;
}

openNav.addEventListener("click", ()=>{
    // nav.style.display = "block";
    // nav.style.backgroundColor="red";
    navList.classList.remove("hidden");
    navList.classList.add("flex");
    openNav.classList.add("hidden")
    closeNav.classList.remove("hidden");
    titleRoom.classList.add("hidden");
    nav.classList.add("bg-slate-50");
    nav.style.backgroundColor ="white";
    navList.style.color ="black";


})
closeNav.addEventListener("click", ()=>{
    closeNav.classList.add("hidden")
    navList.classList.add("hidden")
    openNav.classList.remove("hidden")
    titleRoom.classList.remove("hidden");
    nav.style.backgroundColor ="transparent";
    navList.style.color ="white";
    
})
