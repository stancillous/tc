


window.addEventListener('load',()=>{

    let tl = gsap.timeline()
    tl.fromTo('.main',{opacity:0},{duration:1,opacity:1})
    .from('.menu-links-list-items',{y:-22,stagger:.1,opacity:0})
    .from('.logo',{opacity:0},'<')

    initLocomotiveScroll()
})

// INITIALIZING THE LOCOMOTIVE SCROLL
function initLocomotiveScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
}
