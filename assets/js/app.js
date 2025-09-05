AOS.init();

let arrackArray = [
    {
        "title": "Green Apple Flavour Arrack",
        "img": "assets/image/green.png",
        "description": "A smooth arrack infused with the crisp, tangy freshness of green apples for a zesty, refreshing taste."
    },
    {
        "title": "Gold Flavour Arrack",
        "img": "assets/image/gold.png",
        "description": "A premium smooth arrack enriched with golden notes of warmth and richness for an elegant, refined taste."
    },
    {
        "title": "Purple Grape Flavour Arrack",
        "img": "assets/image/purple.png",
        "description": "A smooth arrack infused with the sweet, juicy essence of ripe purple grapes for a rich and refreshing taste."
    },
    {
        "title": "Red Apple Flavour Arrack",
        "img": "assets/image/red.png",
        "description": "A crisp, smooth arrack infused with the sweet and tangy taste of fresh red apples for a refreshing twist."
    },
    {
        "title": "Faluda Flavour Arrack",
        "img": "assets/image/pink.png",
        "description": "A smooth arrack infused with the sweet, creamy richness of faluda for a unique exotic taste."
    },
    {
        "title": "Nil Katarolu Flavour Arrack",
        "img": "assets/image/blue.png",
        "description": "A smooth arrack infused with the delicate, refreshing essence of blue butterfly pea (nil katarolu) for a naturally exotic taste."
    },
    {
        "title": "Silva Flavour Arrack",
        "img": "assets/image/silver.png",
        "description": "A smooth arrack crafted with a bold, distinctive flavour that blends tradition with a modern twist."
    },
    {
        "title": "Kolakenda Flavour Arrack",
        "img": "assets/image/kolakeda.png",
        "description": "A smooth arrack infused with the unique, aromatic taste of kolakenda for a rich and traditional flavor."
    },
    {
        "title": "Chocolate Flavour Arrack",
        "img": "assets/image/chocolate.png",
        "description": "A smooth arrack blended with rich chocolate notes for a sweet and indulgent taste."
    },
    {
        "title": "Coffee Flavour Arrack",
        "img": "assets/image/coffe.png",
        "description": "A smooth arrack infused with the rich, bold essence of coffee for a perfect aromatic experience."
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
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>    
    `
}