

window.addEventListener('load',()=>{
    animatePage()
    initLocomotiveScroll()
})

// INITIALIZING THE LOCOMOTIVE SCROLL
function initLocomotiveScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
}


//SETTING ANIMATION FOR WHEN THE PAGE LOADS

function animatePage(){
    let pageTl = gsap.timeline({defaults:{
        ease:'Back.easeOut',
        // ease:'Power0.easeNone',
        
        ease:'power0.out'
    
    }})

    
    pageTl.to('.main',{duration:.6,opacity:1})
    .from('.menu-links-list-items',{y:-22,stagger:.1,opacity:0})
    .from('.logo',{opacity:0},'<')
    .from('.top-section-header, .ts-paragraph, .ts-cta',{duration:.4, opacity:0,y:13,clipPath:'inset(100% 0 0 0)'},'<')
}



// SELECTING THE TITLES AND TEST OF THE ABOUT US SECTION

const whoWeAre = document.querySelector('.who-we-are')

const whatWeDo = document.querySelector('.what-we-do')

const howWeDo = document.querySelector('.how-we-do-it')

const aboutUsParagraph = document.querySelector('#about-us-paragraph')

//CHANGING THE TEXT OF THE ABOUT US PARAGRAPH DEPENDING ON WHICH HEADER IS CILCKED
whoWeAre.addEventListener('click',()=>{
    aboutUsParagraph.textContent = 'TransCargo is a true asset based carrier. We control the assets and the drivers are direct employees. Our customers work directly with those moving their freight, not a broker or independent contractor. This allows us to better manage fluctuations, capacity demands and equipment availability for our customers. We also deliver 100% of your freight on company truck.';
    gsap.from(aboutUsParagraph,{x:-14})

})

whatWeDo.addEventListener('click',()=>{
    aboutUsParagraph.textContent = 'TransCargo specializes in dry van, truckload transportation.  This can be in a contract, dedicated or expedited mode.  We also pursue opportunities with shippers looking to outsource transportation to a logistics supplier including the acquisition and/or disposition of private fleets.';
    gsap.from(aboutUsParagraph,{x:-14})

})

howWeDo.addEventListener('click',()=>{
    aboutUsParagraph.textContent = 'Our fleet incorporates a number of efficiency-enhancing technologies engineered to help us reduce emissions, fossil fuel usage and our impact on the environment.We provide the best in truckload services. We operate as an intrastate and interstate common and contract authority specializing in time-definite truckload service.';

    gsap.from(aboutUsParagraph,{x:-14})
})

const aboutUsHeader = document.querySelectorAll('.au-header')


//selecting the container that has all the about us headings
const headersContainer = document.querySelector('.au-headings')

//THE HEADERS IN THE HOME PAGE INSIDE THE ABOUT US SECTION, ie who we are, what we do and how we do it headers
aboutUsHeader.forEach((item)=>{

    item.addEventListener('click',()=>{
  
        headersContainer.querySelector('.active').classList.remove('active')        
        item.classList.add('active')   
        gsap.fromTo('.active',{clipPath:'inset(0% 100% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)'})   
      
    })
})


//FUNCTION TO CHAGE THE REVIEW SHOWN WHEN THE BUTTONS ARE CLICKED
function showReview(){

    //array containing the reviews
    const reviews = [
        {
            image:'images/userAvatar04.svg',
            text:'I have been in the transportation industry for 45 years. I have worked at 4 different trucking companies and TransCargo is definitely the best company by far.',
            name:'James Myers'
    
        },
        {
            image:'images/userAvatar05.svg',
            text:'I am a former employee, who left to be closer to home. I had a very good work relationship with TransCargo from start to finish. All office and driver management I worked with were good caring people.',
            name:'@Jessica Mays'
        },
        {
            image:'images/userAvatar06.svg',
            text:"Working for TransCargo was, to me, a fantastic experience! Due to 'life' happening, I had to leave my truck and plant my feet back home. I miss the family like atmosphere and if I had to go back OTR, this is definitely where I will be going!",
            name:'@Alex Smith',
        },
        {
            image:'images/userAvatar07.svg',
            text:"New equipment every year. Maintenance gets the repairs done right managing and safety teams are supportive. Lots of fun activities year. I loved everything about them.",
            name:"Peter John"
        },
        {
            image:'images/userAvatar09.svg',
            text:"Company seems to care about the people who work for them. Dispatchers are very nice and take the time in the learning curve of the new system.",
            name:"@Alex June"
        }

    ]
    
    //selecting the next and prev arrows in the review section
    const nextBtn = document.querySelector('#arrowRight')
    const prevBtn = document.querySelector('#arrowLeft')
    
    
    //the contents of the reviews section
    const reviewImage = document.querySelector('.review-image')
   
    const reviewText = document.querySelector('.review-text')
    const reviewName = document.querySelector('.review-name')
    
    
    
    
    reviewIndex = 0
    
    
    prevBtn.addEventListener('click',()=>{
        reviewIndex--
    
        if(reviewIndex<0){  
            reviewIndex = reviews.length-1
        }
    
        showReview(reviewIndex)
    
    
    
    })
    
    nextBtn.addEventListener('click',()=>{
        reviewIndex++
    
        if(reviewIndex>reviews.length-1){
            reviewIndex=0
        }
    
    
        showReview(reviewIndex)
    
    
    })
    
    //function to change the review when the buttons are clicked
    function showReview(reviewIndex){
    
        let currentReview = reviews[reviewIndex]
    
        reviewImage.src = currentReview.image
        gsap.from(reviewImage,{y:-13,ease:'power1.out'})
        reviewText.textContent = currentReview.text
        gsap.from(reviewText,{y:-13,ease:'power1.out'})

        reviewName.textContent = currentReview.name
        gsap.from(reviewName,{y :-13,ease:'power1.out'})

    }

}

showReview()