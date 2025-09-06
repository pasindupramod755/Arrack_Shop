AOS.init();

let arrackArray = [
    {
        "title": "Green Apple Flavour Arrack",
        "img": "assets/image/green.png",
        "description": "A smooth arrack infused with the crisp, tangy freshness of green apples for a zesty, refreshing taste.",
        "price": 2500
    },
    {
        "title": "Gold Flavour Arrack",
        "img": "assets/image/gold.png",
        "description": "A premium smooth arrack enriched with golden notes of warmth and richness for an elegant, refined taste.",
        "price": 3500
    },
    {
        "title": "Purple Grape Flavour Arrack",
        "img": "assets/image/purple.png",
        "description": "A smooth arrack infused with the sweet, juicy essence of ripe purple grapes for a rich and refreshing taste.",
        "price": 2100
    },
    {
        "title": "Red Apple Flavour Arrack",
        "img": "assets/image/red.png",
        "description": "A crisp, smooth arrack infused with the sweet and tangy taste of fresh red apples for a refreshing twist.",
        "price": 2500
    },
    {
        "title": "Faluda Flavour Arrack",
        "img": "assets/image/pink.png",
        "description": "A smooth arrack infused with the sweet, creamy richness of faluda for a unique exotic taste.",
        "price": 1800
    },
    {
        "title": "Nil Katarolu Flavour Arrack",
        "img": "assets/image/blue.png",
        "description": "A smooth arrack infused with the delicate, refreshing essence of blue butterfly pea (nil katarolu) for a naturally exotic taste.",
        "price": 3000
    },
    {
        "title": "Silva Flavour Arrack",
        "img": "assets/image/silver.png",
        "description": "A smooth arrack crafted with a bold, distinctive flavour that blends tradition with a modern twist.",
        "price": 2800
    },
    {
        "title": "Kolakenda Flavour Arrack",
        "img": "assets/image/kolakeda.png",
        "description": "A smooth arrack infused with the unique, aromatic taste of kolakenda for a rich and traditional flavor.",
        "price": 1200
    },
    {
        "title": "Chocolate Flavour Arrack",
        "img": "assets/image/chocolate.png",
        "description": "A smooth arrack blended with rich chocolate notes for a sweet and indulgent taste.",
        "price": 2000
    },
    {
        "title": "Coffee Flavour Arrack",
        "img": "assets/image/coffe.png",
        "description": "A smooth arrack infused with the rich, bold essence of coffee for a perfect aromatic experience.",
        "price": 1950
    }
]



for (let i = 0; i < arrackArray.length; i++) {
    document.getElementById("mainAdd").innerHTML += `
        <div class="col" data-aos="zoom-out-up">
    
            <div class="card h-100">
                <img src="${arrackArray[i].img}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${arrackArray[i].title}</h5>
                    <p class="card-text">${arrackArray[i].description}</p>
                    <p class="card-text"><strong>Price:</strong> Rs. ${arrackArray[i].price}</p>
                    <button class="btn btn-primary" id="${arrackArray[i].title}" onclick="buyNowBtn(this.id)">Buy Now</button>
                </div>
            </div>
        </div>
    `;
}


function buyNowBtn(id) {
    let index = getIndex(id);

    let buyArrak = {
        title: arrackArray[index].title,
        img: arrackArray[index].img,
        price: arrackArray[index].price,
        quantity: 1
    };

    let storageArray = JSON.parse(localStorage.getItem("arrakCart")) || [];

    let existingItem = storageArray.find(item => item.title === buyArrak.title);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {

        storageArray.push(buyArrak);
    }

    localStorage.setItem("arrakCart", JSON.stringify(storageArray));
}



function getIndex(id) {
    for (let i = 0; i < arrackArray.length; i++) {
        if (arrackArray[i].title === id) {
            return i;
        }
    }
    return -1;
}
