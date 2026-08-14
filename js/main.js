const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");

if(menuToggle&&navLinks){
menuToggle.addEventListener("click",()=>{
const isOpen=navLinks.classList.toggle("active");
menuToggle.setAttribute("aria-expanded",isOpen);
menuToggle.setAttribute("aria-label",isOpen?"Close navigation menu":"Open navigation menu");
menuToggle.textContent=isOpen?"✕":"☰";
});
navLinks.querySelectorAll("a").forEach(link=>{
link.addEventListener("click",()=>{
navLinks.classList.remove("active");
menuToggle.setAttribute("aria-expanded","false");
menuToggle.setAttribute("aria-label","Open navigation menu");
menuToggle.textContent="☰";
});
});
}

const joinForm=document.getElementById("joinForm");

if(joinForm){
joinForm.addEventListener("submit",function(e){
e.preventDefault();

const name=document.getElementById("fullName").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
const ward=document.getElementById("ward").value.trim();
const interest=document.getElementById("interest").value;

const message=`*SIBANYE COMMUNITY ENGAGEMENT*

👤 Full Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
📍 Area / Ward: ${ward}
🤝 Interest: ${interest}

I would like to support and engage with Sibanye (We Are One).

*Officially Registered Political Party*`;

const whatsappURL=`https://wa.me/27760262725?text=${encodeURIComponent(message)}`;

window.open(whatsappURL,"_blank","noopener,noreferrer");
});
}

document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener("click",function(e){
const targetID=this.getAttribute("href");
if(targetID==="#")return;
const target=document.querySelector(targetID);
if(target){
e.preventDefault();
target.scrollIntoView({behavior:"smooth",block:"start"});
}
});
});

const navbar=document.querySelector(".navbar");

if(navbar){
const updateNavbar=()=>{
if(window.scrollY>20){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}
};
window.addEventListener("scroll",updateNavbar,{passive:true});
updateNavbar();
}