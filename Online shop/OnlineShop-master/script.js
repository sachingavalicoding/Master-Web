

let navBtn = document.getElementById('navBtn');
let wraper = document.querySelector('.wraper');
navBtn.addEventListener('click',()=>{
 wraper.style.display = 'block';
 wraper.classList.add('wraper-ani');
});

/* Products -1  */
const product1 = [
    {
        title:'Sachin Gavali',
        prize:'100$',
        image:'./img/dress-shirt-img.png'

    },
    {
        title:'Sachin Gavali',
        prize:'100$',
        image:'./img/tshirt-img.png'

    },
    {
        title:'Sachin Gavali',
        prize:'100$',
        image:'./img/women-clothes-img.png'

    }
]


