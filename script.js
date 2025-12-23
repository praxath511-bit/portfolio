const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const Sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(Link => {
        Link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    Sections.forEach(Section => {
        Section.classList.remove('active');
    });
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                Sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if(!navlinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
               Sections[0].classList.add('active');
            }, 1100);
    }
});





const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) =>{
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}


arrowRight.addEventListener('click', () => {
    if(index < 1) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 1;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if(index >1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});








// const navLinks = document.querySelectorAll("nav a");
// const sections = document.querySelectorAll("section");
// const menuIcon = document.querySelector("#menu-icon");
// const navbar = document.querySelector("nav");

// let currentSection = 0;
// const isMobile = window.innerWidth < 768;

// /* INITIAL STATE */
// gsap.set(sections, { autoAlpha: 0 });
// gsap.set(sections[0], { autoAlpha: 1 });

// /* MENU */
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("bx-x");
//     navbar.classList.toggle("active");
// };

// /* ANIMATION FUNCTION */
// function animateSection(index){

//     const duration = isMobile ? 0.6 : 1;
//     const move = isMobile ? 80 : 150;

//     gsap.to(sections[currentSection], {
//         autoAlpha:0,
//         duration:0.4
//     });

//     if(index === 0){
//         gsap.fromTo(sections[index],
//             {autoAlpha:0, scale:0.9},
//             {autoAlpha:1, scale:1, duration}
//         );
//     }

//     if(index === 1){
//         gsap.fromTo(sections[index],
//             {autoAlpha:0, x:move},
//             {autoAlpha:1, x:0, duration}
//         );
//     }

//     if(index === 2){
//         gsap.fromTo(sections[index],
//             {autoAlpha:0, y:move},
//             {autoAlpha:1, y:0, duration}
//         );
//     }

//     if(index === 3){
//         gsap.fromTo(sections[index],
//             {autoAlpha:0, scale:1.2},
//             {autoAlpha:1, scale:1, duration}
//         );
//     }

//     if(index === 4){
//         gsap.fromTo(sections[index],
//             {autoAlpha:0, y:-move},
//             {autoAlpha:1, y:0, duration}
//         );
//     }

//     currentSection = index;
// }

// /* NAV CLICK */
// navLinks.forEach((link, index)=>{
//     link.addEventListener("click", ()=>{
//         if(index === currentSection) return;

//         navLinks.forEach(l => l.classList.remove("active"));
//         link.classList.add("active");

//         animateSection(index);

//         navbar.classList.remove("active");
//         menuIcon.classList.remove("bx-x");
//     });
// });
