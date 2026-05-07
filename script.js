/*
=========================================
PRODUCT DATABASE (ARRAY OF OBJECTS)
=========================================
*/
const sliderDots =
document.getElementById("slider-dots");

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

    images: ["img/marvarid.jpg" ,"img/marvarid2.jpg"],

    description:"Xohishga ko'ra boshqa rangda qilish mumkin. Sumkaning yelkama tasmasi tilla rang metall zanjirdan ishlangan bo'lishini xohlasangiz izohda yozib qoldiring.",

    materials:"Rangi o'chmaydigan dur",

    size:"12x12cm qalinligi-5cm",

    time:"5 kungacha"
  },
  {
    id:12,

    category:"sumka",

    categoryName:"Bisserli sumkalar",

    name:"Mini oq bisser sumka",

    price:120000,

    images: ["img/oq kichik sumka.jpg"],

    description:"Xohishga ko'ra boshqa rangda qilish mumkin. Sumkaning yelkama tasmasi tilla rang metall zanjirdan ishlangan bo'lishini xohlasangiz izohda yozib qoldiring.",

    materials:"Rangi o'chmaydigan dur",

    size:"12x12cm",

    time:"3 kungacha"
  },
    {
    id:13,

    category:"sumka",

    categoryName:"Bisserli sumkalar",

    name:"Medium oq bisser sumka",

    price:140000,

    images: ["img/oq sumka.jpg"],

    description:"Xohishga ko'ra boshqa rangda qilish mumkin. Sumkaning yelkama tasmasi tilla rang metall zanjirdan ishlangan bo'lishini xohlasangiz izohda yozib qoldiring.",

    materials:"Rangi o'chmaydigan dur",

    size:"15x10cm",

    time:"3 kungacha"
  },
      {
    id:14,

    category:"sumka",

    categoryName:"Bisserli sumkalar",

    name:"Katta oq bisser sumka",

    price:140000,

    images: ["img/mega oq.jpg", "img/mega oq2.jpg"],

    description:"Xohishga ko'ra boshqa rangda qilish mumkin.",

    materials:"Rangi o'chmaydigan dur",

    size:"24x14cm",

    time:"3 kungacha"
  },
      {
    id:15,

    category:"sumka",

    categoryName:"Bisserli sumkalar",

    name:"Mini zamonaviy sumka",

    price:110000,

    images: ["img/oq mini.jpg", "img/oq mini2.jpg"],

    description:"Xohishga ko'ra boshqa rangda qilish mumkin.",

    materials:"Kristall effektli shishasimon premium bisser",

    size:"7x6cm",

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

    name:"Elegant gulchali sumkalar",

    price:150000,

    images: ["img/ko'k sumka.jpg", "img/ko'k sumka2.jpg", "img/ko'k sumka3.jpg"],

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
    
    images: ["img/blue.jpg", "img/blue2.jpg"],
    
    description:"Xohishga ko'ra ko'k rangi malina yoki boshqa rangda bo'lishi mumkin.",
    
    materials:"Ko'k to'rtburchak bisser, oq durli bisser",
    
    size:"17x12cm qalinligi-5cm",
    
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

images: ["img/yurakchali sumka.jpg", "img/yurakchali sumka2.jpg"],

description:"Rangi xohishga ko'ra.",

materials:"Kristall effektli bisser",

size:"20x15cm",

time:"7 kungacha"
},

  {
    id:32,

    category:"sumka",

    categoryName:"Bisserli sumkalar",

    name:"Ixcham sumka",

    price:130000,

    images: ["img/pink.jpg", "img/pink2.jpg"],

    description:"Rangi xohishga ko'ra",

    materials:"Yapon premium bisseri",

    size:"10x11cm",

    time:"5 kungacha"
  },
    /*
  =========================================
  MALINA SUMKA
  =========================================
  */

  {
    id:33,

    category:"sumka",

    categoryName:"Bisserli sumkalar",

    name:"Malina rangli mini sumka",

    price:110000,

    images: ["img/pink elegant.jpg", "img/pink elegant2.jpg"],

    description:"Rangi xohishga ko'ra",

    materials:"Yapon premium bisseri",

    size:"8x6cm",

    time:"5 kungacha"
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
   
   images: ["img/gulli taqimchoq.jpg", "img/gulli taqimchoq2.jpg"],
   
   description:"Zakazga siz xohlaganday qilib yasab beriladi, xohlaganingizni tasvirlab yozib qoldiring.",
   
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
 
   images: ["img/gul.jpg"],
 
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

    images: ["img/harfli brilok.jpg", "img/breloklar2.jpg"],

    description:"Qaysi harf va rangda bo'ishini izohda yozib qoldiring",

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

    images: ["img/quloqchin g'ilofi.jpg"],

    description:"Quloqchin solib yurish uchun chiroyli brelok. Rangi xohishga ko'ra.",

    materials:"Marvaridsimon bisser",

    size:"6x6cm",

    time:"1 kun"
  },
  {
    id:55,

    category:"brelok",

    categoryName:"Bisserli breloklar",

    name:"Rasm solib qo'yiladiga brelok",

    price:25000,

    images: ["img/rasm brelok2.jpg", "img/rasm brelok.jpg"],

    description:"Rangi va xohishga ko'ra",

    materials:"Kristall effektli bisser",

    size:"7.5x6cm",

    time:"1 kun"
  },
  {
    id:56,

    category:"brelok",

    categoryName:"Bisserli breloklar",

    name:"Har xil shakldagi breloklar",

    price:25000,

    images: ["img/brelok sumka.jpg", "img/brelok sumka2.jpg"],

    description:"Rangi shakli xohishga ko'ra",

    materials:"Kristall effektli bisser",

    size:"7.5x6cm",

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
        src="${product.images[0]}">

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

          <img src="${item.images[0]}">

          <div>

            <h3>
              ${item.name}
            </h3>

            <p>
              ${item.price} so'm
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
ORDER HISTORY STORAGE
=========================================
*/

let ordersHistory =
JSON.parse(
  localStorage.getItem("ordersHistory")
) || [];

/*
=========================================
GENERATE ORDER NUMBER
=========================================
*/

function generateOrderNumber(){

  const year =
  new Date().getFullYear();

  /*
  RANDOM 6 DIGIT
  */

  const random =
  Math.floor(
    100000 + Math.random() * 900000
  );

  /*
  LAST 4 DIGIT TIME
  */

  const timePart =
  Date.now().toString().slice(-4);

  /*
  FINAL 10 DIGIT
  */

  return `${year}${random}${timePart}`
  .slice(0,10);

}

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

  /*
  =========================================
  IMAGES
  =========================================
  */

  currentImages = product.images;
  /*
=========================================
CREATE DOTS
=========================================
*/

sliderDots.innerHTML = "";

currentImages.forEach((img,index)=>{

  sliderDots.innerHTML += `

    <span
    class="slider-dot
    ${index===0 ? "active" : ""}">
    </span>

  `;

});

  currentImageIndex = 0;

  modalImage.src =
  currentImages[currentImageIndex];
  updateDots();

  /*
  =========================================
  TEXT INFO
  =========================================
  */

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

  /*
  =========================================
  ADD TO CART
  =========================================
  */

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
   /*
=========================================
DATE & TIME
=========================================
*/

const now = new Date();

const orderDate =
now.toLocaleDateString("uz-UZ");

const orderTime =
now.toLocaleTimeString("uz-UZ");

const orderNumber =
generateOrderNumber();

const message = `

🛒 YANGI BUYURTMA

🆔 Buyurtma No:
${orderNumber}

📅 Sana:
${orderDate}

⏰ Vaqt:
${orderTime}

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
=========================================
SAVE ORDER HISTORY
=========================================
*/

ordersHistory.unshift({

  orderNumber:orderNumber,

  status:"active",

  date:orderDate,

  time:orderTime,

  name:name,

  phone:phone,

  total:total,

  products:[...cart]

});

localStorage.setItem(

  "ordersHistory",

  JSON.stringify(ordersHistory)

);

renderOrdersHistory();

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
NEXT IMAGE
=========================================
*/

nextSlideBtn.onclick = function(){

  currentImageIndex++;

  if(
    currentImageIndex >=
    currentImages.length
  ){

    currentImageIndex = 0;

  }

  modalImage.src =
  currentImages[currentImageIndex];
  updateDots();

};

/*
=========================================
PREVIOUS IMAGE
=========================================
*/

prevSlideBtn.onclick = function(){

  currentImageIndex--;

  if(currentImageIndex < 0){

    currentImageIndex =
    currentImages.length - 1;

  }

  modalImage.src =
  currentImages[currentImageIndex];
  updateDots();
};









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
    updateDots()

    // FADE IN
    modalImage.style.opacity = 1;
    modalImage.style.transform = "scale(1)";

  }, 200);

}










/*
=========================================
FULLSCREEN IMAGE VIEWER
=========================================
*/

const imageViewer =
document.getElementById("image-viewer");

const viewerImage =
document.getElementById("viewer-image");

const closeViewer =
document.getElementById("close-viewer");

/*
=========================================
OPEN FULLSCREEN
=========================================
*/

modalImage.addEventListener("click", () => {

  viewerImage.src =
  modalImage.src;

  imageViewer.style.display =
  "flex";

});

/*
=========================================
CLOSE FULLSCREEN
=========================================
*/

closeViewer.onclick = () => {

  imageViewer.style.display =
  "none";

};

/*
=========================================
OUTSIDE CLICK CLOSE
=========================================
*/

imageViewer.onclick = (e) => {

  if(e.target === imageViewer){

    imageViewer.style.display =
    "none";

  }

};




/*
=========================================
TOUCH SLIDER
=========================================
*/

let touchStartX = 0;
let touchEndX = 0;

modalImage.addEventListener(
  "touchstart",

  e => {

    touchStartX =
    e.changedTouches[0].screenX;

  }
);

modalImage.addEventListener(
  "touchend",

  e => {

    touchEndX =
    e.changedTouches[0].screenX;

    /*
    SWIPE LEFT
    */

    if(touchStartX - touchEndX > 50){

      nextSlideBtn.click();

    }

    /*
    SWIPE RIGHT
    */

    if(touchEndX - touchStartX > 50){

      prevSlideBtn.click();

    }

  }
);


/*
=========================================
UPDATE DOTS
=========================================
*/

function updateDots(){

  const dots =
  document.querySelectorAll(
    ".slider-dot"
  );

  dots.forEach(dot => {

    dot.classList.remove("active");

  });

  dots[currentImageIndex]
  .classList.add("active");

}

/*
=========================================
RENDER ORDER HISTORY
=========================================
*/

function renderOrdersHistory(){

  const ordersList =
  document.getElementById("orders-list");

  ordersList.innerHTML = "";

  if(ordersHistory.length === 0){

    ordersList.innerHTML =
    "<p>Buyurtmalar mavjud emas</p>";

    return;

  }

  ordersHistory.forEach((order,index)=>{

    let productsHTML = "";

    order.products.forEach(item=>{

      productsHTML += `

        <p>

        🛍 ${item.name}
        (${item.quantity} ta)

        </p>

      `;

    });

    ordersList.innerHTML += `

  <div class="order-card">

    <h4>

      🆔 #${order.orderNumber}

    </h4>

    <p>

      📅 ${order.date}
      ⏰ ${order.time}

    </p>

    <p>
      👤 ${order.name}
    </p>

    <p>
      📞 ${order.phone}
    </p>

    <div class="order-products">

      ${productsHTML}

    </div>

    <h3>
      💰 ${order.total} so'm
    </h3>

    <div class="
      order-status
      ${order.status === "cancelled"
      ? "order-cancelled"
      : "order-active"}
    ">

      ${
        order.status === "cancelled"
        ? "❌ Rad etildi"
        : "✅ Faol"
      }

    </div>

    ${
      order.status !== "cancelled"

      ?

      `

      <button
      class="cancel-order-btn"
      onclick="cancelOrder(${index})">

        Buyurtmani rad qilish

      </button>

      `

      :

      ""

    }

  </div>

`;

  });

}

/*
=========================================
TOGGLE HISTORY
=========================================
*/

const historyToggleBtn =
document.getElementById(
  "history-toggle-btn"
);

const ordersHistoryBox =
document.getElementById(
  "orders-history"
);


historyToggleBtn.onclick = () => {

  if(
    ordersHistoryBox.style.display
    === "block"
  ){

    ordersHistoryBox.style.display =
    "none";

  }

  else{

    ordersHistoryBox.style.display =
    "block";

  }

};



/*
=========================================
CANCEL ORDER
=========================================
*/

async function cancelOrder(index){

  const order =
  ordersHistory[index];

  const confirmCancel =
  confirm(

    "Aniq buyurtmani rad qilmoqchimisiz?"

  );

  if(!confirmCancel){

    return;

  }

  /*
  =========================================
  TELEGRAM MESSAGE
  =========================================
  */

  const cancelMessage = `

❌ BUYURTMA RAD QILINDI

🆔 Buyurtma No:
${order.orderNumber}

📅 Sana:
${order.date}

⏰ Vaqt:
${order.time}

👤 ${order.name}

💰 Summa:
${order.total} so'm

`;
  try{

    await fetch(

      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,

      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({

          chat_id:
          TELEGRAM_CHAT_ID,

          text:cancelMessage

        })

      }

    );

  }

  catch(error){

    console.log(error);

  }

  /*
  =========================================
  REMOVE ORDER
  =========================================
  */

  ordersHistory[index].status = "cancelled";
  localStorage.setItem(

    "ordersHistory",

    JSON.stringify(ordersHistory)

  );

  renderOrdersHistory();

}

renderOrdersHistory();







/*
=========================================
CLEAR CANCELLED
=========================================
*/

document.getElementById(
  "clear-cancelled-btn"
).onclick = () => {

  const confirmDelete =
  confirm(

    "Rad etilgan buyurtmalar tozalansinmi?"

  );

  if(!confirmDelete){

    return;

  }

  ordersHistory =
  ordersHistory.filter(

    order => order.status !==
    "cancelled"

  );

  localStorage.setItem(

    "ordersHistory",

    JSON.stringify(ordersHistory)

  );

  renderOrdersHistory();

};

/*
=========================================
CLEAR ALL ORDERS
=========================================
*/

const clearAllOrdersBtn =
document.getElementById(
  "clear-all-orders-btn"
);

clearAllOrdersBtn.onclick = () => {

  const confirmDelete =
  confirm(

    "Barcha buyurtmalar o'chirilsinmi?"

  );

  if(!confirmDelete){

    return;

  }

  ordersHistory = [];

  localStorage.setItem(

    "ordersHistory",

    JSON.stringify(ordersHistory)

  );

  renderOrdersHistory();

};