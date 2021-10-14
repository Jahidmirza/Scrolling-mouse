var imgBx = document.querySelector('.imgBx');
window.addEventListener('scroll', function(){
    var mouseSrcoll = window.scrollY;
    imgBx.style.clipPath= "circle("+ mouseSrcoll +"px at center)";
})