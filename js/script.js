let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
}

window.onscroll = () => {
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.products .box-container .box');

filterBtn.forEach(button => {

  button.onclick = () => {
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let dataFilter = button.getAttribute('data-filter');

    filterItem.forEach(item => {

      item.classList.remove('active');
      item.classList.add('hide');

      if (item.getAttribute('data-item') == dataFilter || dataFilter == 'all') {
        item.classList.remove('hide');
        item.classList.add('active');
      }

    });

  };

});

var swiper = new Swiper(".home-slider", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".featured-slider", {
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".review-slide", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});





document.querySelectorAll('.small-image-1').forEach(images => {
  images.onclick = () => {
    document.querySelector('.big-image-1').src = images.getAttribute('src');
  }
});

document.querySelectorAll('.small-image-2').forEach(images => {
  images.onclick = () => {
    document.querySelector('.big-image-2').src = images.getAttribute('src');
  }
});

document.querySelectorAll('.small-image-3').forEach(images => {
  images.onclick = () => {
    document.querySelector('.big-image-3').src = images.getAttribute('src');
  }
});

// Set the date we're counting down to
var countDownDate = new Date("Aug 30, 2022 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  var counter_div = '<div class="count-down">' +
    '<div class="box">' +
    '<h3 id="days">' + days + '</h3>' +
    '<span>days</span>' +
    '</div>' +
    '<div class="box">' +
    '<h3 id="hours">' + hours + '</h3>' +
    '<span>hours</span>' +
    ' </div>' +
    '<div class="box">' +
    '<h3 id="minutes">' + minutes + '</h3>' +
    '<span>minutes</span>' +
    '</div>' +
    '<div class="box">' +
    '<h3 id="seconds">' + seconds + '</h3>' +
    '<span>seconds</span>' +
    '</div>' +
    '</div>';

  document.getElementById("demo").innerHTML = counter_div;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



function UpdateCartCount() {
  cart = JSON.parse(localStorage.getItem("cart"));
  if (cart != null) {
    var cart_count = cart.length;
    document.getElementById("cart_count").innerText = cart_count;
  }
}










const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


// Update the count down every 1 second
var x_ = setInterval(function () {

  // Get today's date and time
  var countDownDate_ = new Date("aug 8, 2022 10:40:00").getTime();
  let current = new Date();
  const day_ = current.getDate();
  const month_ = monthNames[current.getMonth()];
  const year_ = current.getFullYear();
  let cDate = day_ + '-' + month_ + '-' + year_;
  let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  let dateTime = cDate + ' ' + cTime;


  // Display the result in the element with id="demo"
  var counter_div_ = '<div class="count-down">' +
    '<div class="box">'+ dateTime +'</div>';

  document.getElementById("demo_").innerHTML = counter_div_;

}, 1000);

