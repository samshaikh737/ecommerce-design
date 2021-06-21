let head = document.querySelector("head")
let link = document.createElement("link")
link.rel = "stylesheet"
link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
link.integrity = "sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
link.crossOrigin = "anonymous"
link.referrerPolicy = "no-referrer"
head.appendChild(link)


const cardCon = document.getElementById("card-container")
for (let i = 0; i < 8; i++) {
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="card">
        <div class="card-img-box">
            <img src="./product/images/${i+1}.jpg" alt="img">
            <ul class="card-action">
                <li><a href="">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <span>Add to Wishlist</span>
                </a></li>
                <li><a href=""><i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span>Add to Cart</span>
                </a></li>
                <li><a href=""><i class="fa fa-eye" aria-hidden="true"></i>
                    <span>View Details</span>
                </a></li>
            </ul>
        </div>
        <div class="card-contain-box">
            <div class="product-name">
                <h3>Best Watch by Analog ${i+1}</h3>
            </div>
            <div class="product-rating">
                <h2>$199.9</h2>
                <div class="rating">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
    `
    cardCon.appendChild(div)
    }
    
