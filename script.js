
let a=0;
let users=[];
user=null;
console.log(user)
power=0;
discount=10;


// MODELS HERE :----------------------------------------------------------

class User{
    constructor(e,p,c){
        this.e=e;
        this.p=p;
        this.c=c;
        this.cart=[]
    }
    show_data(){
console.log(this.e);
console.log(this.p);
console.log(this.c);
    }
}


class Item{
    constructor(i,n,b,p){
        this.i=i;
        this.n=n;
        this.b=b;
        this.p=p;
    }
    show(){
        console.log(this.i);
        console.log(this.n);
        console.log(this.b);
        console.log(this.p);
    }
}


class Cart_item{
    constructor(item,quantity) {
        this.item=item;
        this.quantity=quantity;
    }
    get(){
        console.log(this.item.n+','+this.quantity);
    }
    update(){
        this.quantity++;
    }
    reduce(){
        this.quantity--;
    }
}

//--------------------------------------------------------



function show(){
let e=document.getElementById("email").value;
let p=document.getElementById("password").value;
let c=document.getElementById("contact").value;
console.log(e);
console.log(p);
console.log(c);
}



function register(){

let e=document.getElementById("email").value;
let p=document.getElementById("password").value;
let c=document.getElementById("contact").value;

if(c.length<10){
    alert("number must be of 10 digits")
    return
}

if(e=='' || p==''|| c==''){
    alert("entries are empty");
    return;
}

let u=new User(e,p,c);
users.push(u);
console.log(users)
document.getElementById("email").value="";
document.getElementById("password").value="";
document.getElementById("contact").value="";
openForm()

}




function login(){

let e1=document.getElementById("lemail").value;
let p1=document.getElementById("lpassword").value;
for (let i in users) {
        if (users[i].e==e1 && users[i].p==p1 ) {
            user=users[i]
            a=1;
            break;
        }
        if (users[i].e==e1 || users[i].p==p1 ) {
            a=1;
            if(users[i].e!=e1){
                alert("email not match");
                return
            }
            if(users[i].p!=p1){
                alert("password do not match");
                return
            }
        }
        else{a=0;}
}
show_a();
document.getElementById("lemail").value="";
document.getElementById("lpassword").value="";

if(a==0) {
    opennForm()
    return
}

closeForm()
openHOME()

}



function addToCart(i,n,b,p) {
    if(user==null){
        return
    }

let pro=new Item(i,n,b,p)

    for (let i = 0; i < user.cart.length; i++) {
        if(user.cart[i].item.n==n && user.cart[i].item.b==b){
           user.cart[i].update();
           update_user(user)
            return
    }
    }
    power+=1
let cItem=new Cart_item(pro,1)
user.cart.push(cItem)
update_user(user)
console.log(user.cart);
document.getElementById("power").innerHTML=`${power}`
}
function show_a(){
if(a==0){
    alert("user not registered");
}
}





let p1=new Item("product-1.jpg","galaxy A_50 pro","Samsung",330);
let p2=new Item("product-2.jpg","YU4 pro","mi",450);
let p3=new Item("product-3.jpg","NOTE_7 pro","Vivo",510);
let p4=new Item("product-4.jpg","Y12 pro","Lenovo",210);
let p5=new Item("product-5.jpg","F17","oppp",310);
let p6=new Item("product-1.jpg","xiomi note11 pro","mi",530);
let arr=[p1,p2,p3,p4,p5,p6];



let txt='';
    for (const k of arr) {
        txt+=` <section class="product-card">
        <img src="${k.i}" alt="Product 1">
        <h3>${k.n}</h3>
        <h4>${k.b}<h4>
        <p class="price">$${k.p}</p>
        <button class="newbtns" onclick="addToCart('${k.i}','${k.n}','${k.b}',${k.p})">Add to Cart</button>
        </section> `
  }
    document.getElementById("main").innerHTML=txt;



        
function update_user(u){
    for (let i = 0; i < users.length; i++) {
        if(users[i].n==user.n && users[i].p==user.p){
            users[i]=user
        }
    }
}
 let num=1;


   
 function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
 }

//----- FUNCTIONING----------------------------------------------------------------------

function openForm() {
        closeFormm()
        document.getElementById("main").style.opacity=0;
      document.getElementById("myForm").style.display = "block";
}

    
function opennForm() {
        closeForm()
        document.getElementById("main").style.opacity=0;
      document.getElementById("myFormm").style.display = "block";
}


function closeFormm() {
        document.getElementById("main").style.opacity=1;
      document.getElementById("myFormm").style.display = "none";
}


function closeForm() {
        document.getElementById("main").style.opacity=1;
      document.getElementById("myForm").style.display = "none";
}


function openHOME(){
    closeForm()
    closeFormm()
    if(user!=null){
        document.getElementById("cart").innerHTML=`CART<sup id="power">${power}</sup>`
    }
  document.getElementById("main").innerHTML=txt;
}

//----------------------------------------------------------------------------------


function remove(n,b) {
    for (let i = 0; i < user.cart.length; i++) {
        if(user.cart[i].item.n==n && user.cart[i].item.b==b){
            if(user.cart[i].quantity>=2){
           user.cart[i].reduce();
           update_user(user)
           opencart()
            return
            }
            user.cart.splice(i, 1); 
            update_user(user)
           opencart()
            return   
    }
    }
}
    

function opencart(){
    closeForm()
    closeFormm()
    power=0
    let total=0;
    if(user==null){ 
        alert("LOGIN FIRST");
        return
    }


    let txtt=""

for (let i = 0; i < user.cart.length; i++) {

    console.log(user.cart)
 

  txtt=txtt+  `<div class="cart-item">
<img src=${user.cart[i].item.i}>
<div class="item-details">
    <h4>${user.cart[i].item.n}</h4>
    <p>$${user.cart[i].item.p+1}</p>
    <p>${user.cart[i].quantity}</p>
    <button class="remove-button" onclick="remove('${user.cart[i].item.n}','${user.cart[i].item.b}')">Remove</button>
</div>
</div>`;

total=total+user.cart[i].item.p*user.cart[i].quantity;
}
    document.getElementById("main").innerHTML=`
    <div class="cart-container">
    <h1>Your Shopping Cart <sup>${discount}% OFF</sup></h1>
    <div class="cart-items">
        <!-- Cart items will be displayed here -->
        ${txtt}
</div>
        <!-- Add more cart items here -->
    </div>
    <div class="cart-total">
    <p id="total">Total :   <span>$${total-(total*(discount/100))}</span><br> ----(discount applied)---- </p>
    </div>
</div>
`
}

