window.addEventListener('load',()=>{
    animatePage()
})




function animatePage(){

    let tl = gsap.timeline({defaults:{
        ease:'power1.out'
    }})

    tl.to('.main',{opacity:1,duration:.5})
        .from('#pageImg',{scale:1.1},'-=.1')
        .from('.logo',{opacity:0},'<')
        .from('.menu-links-list-items',{y:-22,stagger:.1,opacity:0},'<')

        .from('.as-header',{opacity:0, y:33,clipPath:'inset(100% 0 0 0)'},'<')
}
