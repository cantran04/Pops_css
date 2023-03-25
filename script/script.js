


let show_adult = document.querySelector('.show-adult');
let adult = document.querySelector('#adult');
let bars_btn = document.querySelector('#bars-btn');
let menu_dropdown = document.querySelector('.menu-dropdown');
console.log(show_adult);
console.log(adult);

adult.addEventListener('click',()=>{
    // if(show_adult.style.display ==='none'){
    //     show_adult.style.display='block'
    //     console.log('hi');
    // }
    // show_adult.style.display='none'
    

    show_adult.classList.toggle('show');
    menu_dropdown.classList.remove('show');
})


bars_btn.addEventListener('click',()=>{
  menu_dropdown.classList.toggle('show');
  show_adult.classList.remove('show');
})




// --------sticky header-----------
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
});



