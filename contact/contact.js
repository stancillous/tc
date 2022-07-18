
window.addEventListener('load',()=>{
    animatePage()
})



function animatePage(){
    let tl = gsap.timeline({
        defaults:{
            ease:'power1.out'
        }
    })

    tl.to('.main',{duration:1,opacity:1})
    .from('.logo',{opacity:0},'<')
    .from('.menu-links-list-items',{y:-22,stagger:.1,opacity:0},'<')


}


