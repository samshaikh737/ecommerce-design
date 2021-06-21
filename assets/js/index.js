// ==== Menu Show ====

const showMenu = (toggleId,navID)=>{
    const toogle = document.getElementById(toggleId),
    nav = document.getElementById(navID);

    if (toogle && nav) {
        toogle.addEventListener("click",()=>{
            nav.classList.toggle("show")
        })
    }

}

showMenu("menu-icon","nav-menu")

// ==== Remove Menu Mobile =======
const navLink = document.querySelectorAll(".nav-menu-link")

//on function run remove active class and and active who run this function
function linkAction() {
    // active link 
    navLink.forEach(i => i.classList.remove("active"))
    this.classList.add("active")

    // Remove menu Mobile
    const navMenu = document.querySelector("#nav-menu")
    navMenu.classList.remove("show")
}

//in all link onclik run function
navLink.forEach(i => i.addEventListener("click",linkAction))

function newContainer(num) {
    const newCon = document.querySelector('#newCon');

    for (let i = 0; i < num; i++) {
        let div = document.createElement("div")
        div.className = "new-box"
        div.innerHTML = `
            <img src="./assets/img/new${i+1}.png" alt="">
            <div class="new-link">
                <a href="#" class="c-btn">View Prodcut</a>
            </div>
        `
        newCon.appendChild(div)
    }
}
newContainer(6)

function Product() {
    
        const featured = document.querySelector('#featuredCon');

        const featuredData = [
            {title:"Headphone One Black",img:"./assets/img/feature1.png",price:"$29"},
            {title:"Bluetooth Specker Black",img:"./assets/img/feature2.png",price:"$199"},
            {title:"Apple Airpod White",img:"./assets/img/feature3.png",price:"$9"},
            {title:"Bluetooth Watch Black",img:"./assets/img/feature4.png",price:"$99"},
        ]
        featuredData.map((i)=>{
            let div = document.createElement("div")
            div.className = "featured-product"
            div.innerHTML = `
                <div class="featured-box">
                    <div class="featured-new">NEW</div>
                    <img src="${i.img}" alt="img">
                </div>
                <div class="featured-data">
                    <h3 class="featured-name">${i.title}</h3>
                    <span class="featured-price">${i.price}</span>
                </div>        
            `
            featured.appendChild(div)
        })    
}
Product()


function sponsorConFun(num) {
    const sponsorCon = document.querySelector('#sponsorsCon');

    for (let i = 0; i < num; i++) {
        let div = document.createElement("div")
        div.className = 'sponsors-logo'

        div.innerHTML = `
            <img src="./assets/img/logo${i + 1}.png" alt="">
        `
        sponsorCon.appendChild(div)
    }
}
sponsorConFun(6)