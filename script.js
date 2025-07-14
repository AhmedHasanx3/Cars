window.onscroll = () =>{
  if(window.scrollY > 0){
    document.querySelector('header').classList.add('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }else{
    document.querySelector('header').classList.remove('active');
  }

}

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('nav');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('.open-login').onclick = () =>{
  document.querySelector('.login-container').classList.toggle('active');
};
document.querySelector('#close-login').onclick = () =>{
  document.querySelector('.login-container').classList.remove('active');
}




document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};



document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};



var swiper = new Swiper(".mySwiper1", {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
       autoplay: {
        delay : 3000,
        disableOnInteraction : false,
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

 var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay : 3000,
        disableOnInteraction : false,
      },
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

   var swiper = new Swiper(".mySwiper3", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
       autoplay: {
        delay : 3000,
        disableOnInteraction : false,
      },
      pagination: {
        el: ".swiper-pagination3",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".mySwiper4", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      grabCursor: true,
       autoplay: {
        delay : 3000,
        disableOnInteraction : false,
      },
      pagination: {
        el: ".swiper-pagination4",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
    