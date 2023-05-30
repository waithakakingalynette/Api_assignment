
function generateProductCards(data) {
   const productContainer = document.getElementById("contents");
   data.forEach((product) => {
     const card = document.createElement("div");
     card.classList.add("product-card");
     card.innerHTML = `
            <img src='https://res.cloudinary.com/dcw72qigi/image/upload/v1685440145/headphones_yve1e7.jpg'/>
             <img src='https://res.cloudinary.com/dcw72qigi/image/upload/v1685455692/light_zi9mli.jpg'/>
             <img src='https://res.cloudinary.com/dcw72qigi/image/upload/v1685455691/cctv_qymp3h.png'/>
             <img src='https://res.cloudinary.com/dcw72qigi/image/upload/v1685455691/freshener_rzsktd.webp'/>
             <img src='https://res.cloudinary.com/dcw72qigi/image/upload/v1685455691/drone_v5rhjn.png'/>
             <img src='https://res.cloudinary.com/dcw72qigi/image/upload/v1685440146/procus_ao5ypu.jpg'/>
             <img src='https://res.cloudinary.com/dcw72qigi/image/upload/v1685440146/play_kqsfz2.jpg'/>
             <img src='https://res.cloudinary.com/dcw72qigi/image/upload/v1685440145/mouse_yy2sl8.jpg'/>
             <img src='https://res.cloudinary.com/dcw72qigi/image/upload/v1685440144/camera_nevjmh.jpg'/>
             
             <h2>${product.title}</h2>
             <div class='productPrice'>
             <p>${product.price}</p>
             <button>ADD TO CART</button>
             </div>
         `;
         
     productContainer.appendChild(card);
   });
 }
 function fetchProducts() {
   fetch("https://dummyjson.com/products")
     .then((response) => response.json())
     .then((data) => {
       const returnedData = data.products.slice(0,8);
       generateProductCards(returnedData);
     });
 }
 fetchProducts()
