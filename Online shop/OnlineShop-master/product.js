/*  products Images  */
let smallImg = document.querySelectorAll('.smallImg');
let bigImg = document.querySelector('#bigImg');
smallImg.forEach(e => {
    e.addEventListener('click',()=>{
       bigImg.src = e.src;
    });
});