/*---------------------HEADER----------------------------*/ 
//create observer
const h_observer = new IntersectionObserver(entries => {
    //loop over entries
    entries.forEach(entry => {
        //if element is visible
        if (entry.isIntersecting) {
        //adds animation class
            entry.target.classList.add('header-appear');
        }
    });
});

const hm_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('header-appear');
        }
    });
});

/*---------------------FEATURES_MOBILE-----------------------*/ 
const m_observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('feature-slideLeft');
        }
    });
});

const m_observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('feature-slideRight');
        }
    });
});

const m_observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('feature-slideLeft');
        }
    });
});

/*-------------------------FEATURES----------------------------*/ 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('feature-slideLeft');
        }
    });
});

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('feature-slideCenter');
        }
    });
});

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('feature-slideRight');
        }
    });
});

/*-------------------------SHOWCASE----------------------------*/ 
const s_observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showcase-slideLeft');
        }
    });
});

const s_observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showcase-slideLeft');
        }
    });
});

const s_observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showcase-slideLeft');
        }
    });
});

const s_observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showcase-slideRight');
        }
    });
});

const s_observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showcase-slideRight');
        }
    });
});

const s_observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showcase-slideRight');
        }
    });
});

/*-------------------------TESTIMONIALS----------------------------*/ 
const t_observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('testimonials-slideCenter');
        }
    });
});

const t_observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('testimonials-slideCenter');
        }
    });
});

const t_observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('testimonials-appear');
        }
    });
});

const t_observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('testimonials-appear');
        }
    });
});

const t_observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('testimonials-appear');
        }
    });
});

/*-------------------------NEWSLETTER----------------------------*/ 
const n_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('newsletter-appear');
        }
    });
});


/*---------------------------FOOTER------------------------------*/ 
const f_observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('footer-slideLeft');
        }
    });
});

const f_observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('footer-slideRight');
        }
    });
});


//which element to track Mobile view
const mediaMobile = window.matchMedia('(max-width: 61rem)'); 
if(mediaMobile.matches) {
    //.header
    hm_observer.observe(document.querySelector('.happear'));
    //.features
    m_observer1.observe(document.querySelector('.m-ftl'));
    m_observer2.observe(document.querySelector('.m-ftr'));
    m_observer3.observe(document.querySelector('.m-ftl2'));
    //.showcase
    s_observer1.observe(document.querySelector('.m-scl1'));
    s_observer2.observe(document.querySelector('.m-scl2'));
    s_observer3.observe(document.querySelector('.m-scl3'));
    s_observer4.observe(document.querySelector('.m-scr1'));
    s_observer5.observe(document.querySelector('.m-scr2'));
    s_observer6.observe(document.querySelector('.m-scr3'));
    //.testimonials
    t_observer1.observe(document.querySelector('.testimonials'));
    t_observer2.observe(document.querySelector('.t-up'));
    t_observer3.observe(document.querySelector('.t-app2'));
    t_observer4.observe(document.querySelector('.t-app3'));
    t_observer5.observe(document.querySelector('.t-app4'));
    //.newsletter
    n_observer.observe(document.querySelector('.newsletter-wrap'));
    //.footer
    f_observer1.observe(document.querySelector('.footer-left'));
    f_observer2.observe(document.querySelector('.footer-icons'));
}

//which element to track Desktop view
const mediaDesktop = window.matchMedia('(min-width: 61rem)'); 
if(mediaDesktop.matches) {
    //.header
    h_observer.observe(document.querySelector('.happear'));
    //.features
    observer.observe(document.querySelector('.ftl'));
    observer2.observe(document.querySelector('.ftc'));
    observer3.observe(document.querySelector('.ftr'));
    //.showcase
    s_observer1.observe(document.querySelector('.scl1'));
    s_observer2.observe(document.querySelector('.scl2'));
    s_observer3.observe(document.querySelector('.scl3'));
    s_observer4.observe(document.querySelector('.scr1'));
    s_observer5.observe(document.querySelector('.scr2'));
    s_observer6.observe(document.querySelector('.scr3'));
    //.testimonials
    t_observer1.observe(document.querySelector('.testimonials'));
    t_observer3.observe(document.querySelector('.t-app2'));
    t_observer4.observe(document.querySelector('.t-app3'));
    t_observer5.observe(document.querySelector('.t-app4'));
    //.newsletter
    n_observer.observe(document.querySelector('.newsletter-wrap'));
    //.footer
    f_observer1.observe(document.querySelector('.footer-left'));
    f_observer2.observe(document.querySelector('.footer-icons'));
}