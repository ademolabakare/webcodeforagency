$(".white").hover(function(){
	$(this).addClass("newBlue");
		},function(){
	$(this).removeClass("newBlue");
});


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



const sectionsWithCarousel = document.querySelectorAll(
  ".section-with-carousel"
);

createOffsets();
window.addEventListener("resize", createOffsets);

function createOffsets() {

  const sectionWithRightOffset = document.querySelector(
    ".section-with-right-offset"
  );
  const sectionWithRightOffsetCarouselWrapper = sectionWithRightOffset.querySelector(
    ".carousel-wrapper"
  );
  const offset = (window.innerWidth - 1100) / 2;
  const mqLarge = window.matchMedia("(min-width: 1200px)");



  if (sectionWithRightOffset && mqLarge.matches) {
    sectionWithRightOffsetCarouselWrapper.style.marginRight = offset + "px";
  } else {
    sectionWithRightOffsetCarouselWrapper.style.marginRight = 0;
  }
}

for (const section of sectionsWithCarousel) {
  let slidesPerView = [1.5, 2.5, 3.5];
  if (section.classList.contains("section-with-left-offset")) {
    slidesPerView = [1.5, 1.5, 2.5];
  }
  const swiper = section.querySelector(".swiper");
  new Swiper(swiper, {
    slidesPerView: slidesPerView[0],
    spaceBetween: 15,
    loop: true,
    lazyLoading: true,
    keyboard: {
      enabled: true
    },
    navigation: {
      prevEl: section.querySelector(".carousel-control-left"),
      nextEl: section.querySelector(".carousel-control-right")
    },
   pagination: {
      el: section.querySelector(".swiper-pagination"),
      clickable: true,
      renderBullet: function (index, className) {
        return `<div class=${className}>
            <span class="number">${index + 1}</span>
            <span class="line"></span>
        </div>`;
      }
    },
    breakpoints: {
      768: {
        slidesPerView: slidesPerView[1]
      },
      1200: {
        slidesPerView: slidesPerView[2]
      }
    }
  });
}





const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
