const section = document.querySelector('section');
window.addEventListener('scroll', ()=>{
    const value = window.scrollY;
    section.style.clipPath= "circle("+ value +" at center)";
})