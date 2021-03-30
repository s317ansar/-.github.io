bourger =document.querySelector('.bourger')
navbar =document.querySelector('.navbar')
navlist =document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')



bourger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');


})


function myCoolFuction(){
    document.location.href="blog1.html";
}