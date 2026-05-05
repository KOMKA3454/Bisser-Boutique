/*
=========================================
PRODUCT DATABASE (ARRAY OF OBJECTS)
=========================================
*/

const products = [
   /*
  =========================================
  OQ SUMKALAR
  =========================================
  */

  {
    id:11,

    category:"sumka",

    categoryName:"Bisserli sumkalar",

    name:"Dumaloq oq bisser sumka",

    price:150000,

    image:"img/marvarid.jpg",

    description:"Xohishga ko'ra boshqa rangda qilish mumkin. Sumkaning yelkama tasmasi tilla rang metall zanjirdan ishlangan bo'lishini xohlasangiz izohda yozib qoldiring.",

    materials:"Rangi o'chmaydigan dur",

    size:"12x12cm qalinligi-5cm",

    time:"5 kungacha"
  },
  {
    id:12,

    category:"sumka",

    categoryName:"Bisserli sumkalar",

    name:"Dumaloq oq bisser sumka",

    price:110000,

    image:"img/oq kichik sumka.jpg",

    description:"Xohishga ko'ra boshqa rangda qilish mumkin. Sumkaning yelkama tasmasi tilla rang metall zanjirdan ishlangan bo'lishini xohlasangiz izohda yozib qoldiring.",

    materials:"Rangi o'chmaydigan dur",

    size:"12x12cm",

    time:"3 kungacha"
  },
    {
    id:13,

    category:"sumka",

    categoryName:"Bisserli sumkalar",

    name:"Dumaloq oq bisser sumka",

    price:140000,

    image:"img/oq sumka.jpg",

    description:"Xohishga ko'ra boshqa rangda qilish mumkin. Sumkaning yelkama tasmasi tilla rang metall zanjirdan ishlangan bo'lishini xohlasangiz izohda yozib qoldiring.",

    materials:"Rangi o'chmaydigan dur",

    size:"15x10cm",

    time:"3 kungacha"
  },
 /*
  =========================================
  KO'K SUMKALAR
  =========================================
  */
    {
    id:21,

    category:"sumka",

    categoryName:"Bisserli sumkalar",

    name:"Ko'k elegant gulchali sumka",

    price:150000,

    image:"img/ko'k sumka.jpg",

    description:"Rangi xohishga ko'ra.",

    materials:"Marvarid bisser",

    size:"20x15cm",

    time:"3 kungacha"
  },
  
  {
    id:22,
    
    category:"sumka",
    
    categoryName:"Bisserli sumkalar",
    
    name:"Ko'k elegant sumka",
    
    price:150000,
    
    image: "img/blue.jpg",
    
    description:"Xohishga ko'ra ko'k rangi malina yoki boshqa rangda bo'lishi mumkin.",
    
    materials:"Ko'k to'rtburchak bisser, oq durli bisser",
    
    size:"25x20cm",
    
    time:"5 kungacha"
  },
   /*
  =========================================
  PUSHTI SUMKALAR
  =========================================
  */
  {
id:31,

category:"sumka",

categoryName:"Bisserli sumkalar",

name:"Yurakchali sumka",

price:150000,

image:"img/yurakchali sumka.jpg",

description:"Rangi xohishga ko'ra.",

materials:"Marvarid bisser",

size:"20x15cm",

time:"3 kungacha"
},

  {
    id:32,

    category:"sumka",

    categoryName:"Bisserli sumkalar",

    name:"Pushti ixcham sumka",

    price:130000,

    image:"img/pink.jpg",

    description:"Chiroyli qo'lda yasalgan bilaguzuk",

    materials:"Yapon bisseri",

    size:"Standart",

    time:"1 kun"
  },
  /*
  =========================================
  TAQINCHOQLAR
  =========================================
  */
 
 {
   id:41,
   
   category:"taqinchoq",
   
   categoryName:"Bisserli taqinchoqlar",
   
   name:"Bisserli bilakuzuklar",
   
   price:20000,
   
   image:"img/gulli taqimchoq.jpg",
   
   description:"Zakazga siz xohlaganday qilib yasab beriladi",
   
   materials:"Rangli bisser",
   
   size:"Mijoz xohishiga ko'ra ≈15cm",
   
   time:"1 kun"
  },
  /*
 =========================================
  BRELOKLAR
 =========================================
 */
 {
   id:51,
 
   category:"brelok",
 
   categoryName:"Bisserli breloklar",
 
   name:"Gulchali brelok",
 
   price:15000,
 
   image:"img/gul.jpg",
 
   description:"Guldasta shaklidagi chiroyli brilok",
 
   materials:"Rangli bisser",
 
   size:"7cm",
 
   time:"1 kun"
 },
    {
    id:52,

    category:"brelok",

    categoryName:"Bisserli breloklar",

    name:"Harfli brelok",

    price:25000,

    image:"img/harfli brilok.jpg",

    description:"Harf shaklidagi chiroyli brilok",

    materials:"Rangli bisser",

    size:"≈5x5cm",

    time:"1 kun"
  },
      {
    id:53,

    category:"brelok",

    categoryName:"Bisserli breloklar",

    name:"Quloqchin uchun g'ilofli brelok",

    price:25000,

    image:"img/quloqchin g'ilofi.jpg",

    description:"Harf shaklidagi chiroyli brilok",

    materials:"Rangli bisser",

    size:"≈5x5cm",

    time:"1 kun"
  },
];
/*
=========================================
PRODUCTS RENDER
=========================================
*/

const productGrid =
document.getElementById("product-grid");

function renderProducts(items){

  productGrid.innerHTML = "";

  items.forEach(product => {

    productGrid.innerHTML += `

      <div class="product-card">

        <img
        src="${product.image}">

        <div class="product-info">

          <h3>
            ${product.name}
          </h3>

          <p class="price">
            ${product.price} so'm
          </p>

          <div class="product-buttons">

            <button
            class="add-btn"
            onclick="addToCart(${product.id})">

            Savatga qo'shish

            </button>

            <button
            class="detail-btn"
            onclick="openModal(${product.id})">

            Batafsil

            </button>

          </div>

        </div>

      </div>

    `;

  });

}

/*
=========================================
SHOPPING CART
=========================================
*/

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

/*
=========================================
SAVE CART
=========================================
*/

function saveCart(){

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

}

/*
=========================================
ADD TO CART
=========================================
*/

function addToCart(id){

  const product =
  products.find(
    item => item.id === id
  );

  const existingProduct =
  cart.find(
    item => item.id === id
  );

  if(existingProduct){

    existingProduct.quantity++;

  }

  else{

    cart.push({
      ...product,
      quantity:1
    });

  }

  saveCart();

  renderCart();

}

/*
=========================================
INCREASE QUANTITY
=========================================
*/

function increaseQuantity(id){

  const item =
  cart.find(
    product => product.id === id
  );

  item.quantity++;

  saveCart();

  renderCart();

}

/*
=========================================
DECREASE QUANTITY
=========================================
*/

function decreaseQuantity(id){

  const item =
  cart.find(
    product => product.id === id
  );

  if(item.quantity > 1){

    item.quantity--;

  }

  saveCart();

  renderCart();

}

/*
=========================================
REMOVE ITEM
=========================================
*/

function removeItem(id){

  cart =
  cart.filter(
    item => item.id !== id
  );

  saveCart();

  renderCart();

}

/*
=========================================
RENDER CART
=========================================
*/

function renderCart(){

  const cartItems =
  document.getElementById("cart-items");

  const totalPrice =
  document.getElementById("total-price");

  const cartCount =
  document.getElementById("cart-count");

  cartItems.innerHTML = "";

  let total = 0;

  let totalItems = 0;

  cart.forEach(item => {

    total +=
    item.price * item.quantity;

    totalItems += item.quantity;

    cartItems.innerHTML += `

      <div class="cart-item">

        <div class="cart-left">

          <img src="${item.image}">

          <div>

            <h3>
              ${item.name}
            </h3>

            <p>
              $${item.price}
            </p>

          </div>

        </div>

        <div class="quantity-controls">

          <button
          onclick="decreaseQuantity(${item.id})">
          -
          </button>

          <span>
            ${item.quantity}
          </span>

          <button
          onclick="increaseQuantity(${item.id})">
          +
          </button>

        </div>

        <h3>
          ${item.price * item.quantity} so'm
        </h3>

        <button
        class="remove-btn"
        onclick="removeItem(${item.id})">

        O'chirish

        </button>

      </div>

    `;

  });

  totalPrice.innerText = `${total} so'm`;

  cartCount.innerText =
  totalItems;

}

renderCart();

/*
=========================================
MODAL LOGIC
=========================================
*/

const modal =
document.getElementById("product-modal");

const closeModalBtn =
document.getElementById("close-modal");

let currentImages = [];

let currentImageIndex = 0;

const prevSlideBtn =
document.getElementById(
  "prev-slide"
);

const nextSlideBtn =
document.getElementById(
  "next-slide"
);

const modalImage =
document.getElementById("modal-image");

const modalTitle =
document.getElementById("modal-title");

const modalDescription =
document.getElementById("modal-description");

const modalCategory =
document.getElementById(
  "modal-category"
);

const modalMaterials =
document.getElementById("modal-materials");

const modalSize =
document.getElementById("modal-size");

const modalTime =
document.getElementById("modal-time");

const modalPrice =
document.getElementById("modal-price");

const modalAddBtn =
document.getElementById("modal-add-btn");

/*
=========================================
OPEN MODAL
=========================================
*/

function openModal(id){

  const product =
  products.find(
    item => item.id === id
  );

  modal.style.display = "flex";

  modalImage.src =
  product.image;

  modalTitle.innerText =
  product.name;

  modalDescription.innerText =
  product.description;

  modalCategory.innerText =
  product.categoryName;

  modalMaterials.innerText =
  product.materials;

  modalSize.innerText =
  product.size;

  modalTime.innerText =
  product.time;

  modalPrice.innerText =
  product.price + " so'm";

  modalAddBtn.onclick = function(){

    addToCart(product.id);

  };

}

/*
=========================================
CLOSE MODAL
=========================================
*/

closeModalBtn.onclick = function(){

  modal.style.display = "none";

};

/*
=========================================
OUTSIDE CLICK CLOSE
=========================================
*/

window.onclick = function(event){

  if(event.target === modal){

    modal.style.display = "none";

  }

};

/*
=========================================
TELEGRAM BOT SETTINGS
=========================================
*/

const TELEGRAM_BOT_TOKEN =
"8452786833:AAH-JmEPQ92WzBAqwowU-90Cqx0CirYKsRc";

const TELEGRAM_CHAT_ID =
"1133038480";

/*
=========================================
CHECKOUT FORM
=========================================
*/

const checkoutForm =
document.getElementById("checkout-form");

const checkoutBtn =
document.getElementById("checkout-btn");

/*
=========================================
DOUBLE CLICK PROTECTION
=========================================
*/

let isSubmitting = false;

/*
=========================================
FORM SUBMIT
=========================================
*/

checkoutForm.addEventListener(
  "submit",

  async function(event){

    event.preventDefault();

    /*
    =========================================
    AGAR BOSILGAN BO'LSA
    =========================================
    */

    if(isSubmitting){

      return;

    }

    /*
    =========================================
    SAVAT BO'SH
    =========================================
    */

    if(cart.length === 0){

      alert("Savat bo'sh!");

      return;

    }

    /*
    =========================================
    FORM DATA
    =========================================
    */

    const inputs =
    checkoutForm.querySelectorAll(
      "input, textarea"
    );

    const name =
    inputs[0].value;

    const phone =
    inputs[1].value;

    const desire =
    inputs[2].value;

    /*
    =========================================
    LOADING START
    =========================================
    */

    isSubmitting = true;

    checkoutBtn.disabled = true;

    checkoutBtn.classList.add("loading");

    checkoutBtn.innerHTML = `
      <span class="spinner"></span>
      Yuborilmoqda...
    `;

    /*
    =========================================
    PRODUCT LIST
    =========================================
    */

    let productsText = "";

    let total = 0;

    cart.forEach(item => {

      total +=
      item.price * item.quantity;

      productsText += `

🛍 ${item.name}
📦 Miqdor: ${item.quantity}
💵 Narx: ${item.price * item.quantity} so'm

`;

    });

    /*
    =========================================
    TELEGRAM MESSAGE
    =========================================
    */

    const message = `

🛒 YANGI BUYURTMA

👤 Ism:
${name}

📞 Telefon:
${phone}

💭 Qo'shimcha istak:
${desire}

========================

${productsText}

💰 Umumiy summa:
${total} so'm

`;

    /*
    =========================================
    2.5 SECOND LOADING
    =========================================
    */

    await new Promise(resolve =>
      setTimeout(resolve, 2500)
    );

    /*
    =========================================
    SEND TO TELEGRAM
    =========================================
    */

    try{

      const response = await fetch(

        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,

        {

          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({

            chat_id:
            TELEGRAM_CHAT_ID,

            text:message

          })

        }

      );

      /*
      =========================================
      SUCCESS
      =========================================
      */

      if(response.ok){

        alert(
          "Buyurtma muvaffaqiyatli yuborildi!"
        );

        /*
        SAVATNI TOZALASH
        */

        cart = [];

        saveCart();

        renderCart();

        checkoutForm.reset();

      }

      /*
      =========================================
      ERROR
      =========================================
      */

      else{

        alert(
          "Telegramga yuborishda xatolik!"
        );

      }

    }

    catch(error){

      console.log(error);

      alert(
        "Internet yoki bot xatosi!"
      );

    }

    /*
    =========================================
    BUTTON RESET
    =========================================
    */

    checkoutBtn.disabled = false;

    checkoutBtn.classList.remove("loading");

    checkoutBtn.innerHTML =
    "Buyurtma berish";

    isSubmitting = false;

  }
);










/*
=========================================
FILTER PRODUCTS
=========================================
*/

function filterProducts(category, button){

  /*
  =========================================
  ACTIVE BUTTON
  =========================================
  */

  const buttons =
  document.querySelectorAll(
    ".filter-btn"
  );

  buttons.forEach(btn => {

    btn.classList.remove("active");

  });

  button.classList.add("active");

  /*
  =========================================
  SHOW ALL PRODUCTS
  =========================================
  */

  if(category === "all"){

    renderProducts(products);

    return;

  }

  /*
  =========================================
  FILTER PRODUCTS
  =========================================
  */

  const filteredProducts =
  products.filter(product =>

    product.category === category

  );

  /*
  =========================================
  RENDER FILTERED
  =========================================
  */

  renderProducts(filteredProducts);

}
/*
=========================================
INITIAL PRODUCTS
=========================================
*/

renderProducts(products);


function changeImage(index){

  // FADE OUT
  modalImage.style.opacity = 0;
  modalImage.style.transform = "scale(0.97)";

  setTimeout(() => {

    currentImageIndex = index;

    modalImage.src =
    currentImages[currentImageIndex];

    // FADE IN
    modalImage.style.opacity = 1;
    modalImage.style.transform = "scale(1)";

  }, 200);

}


