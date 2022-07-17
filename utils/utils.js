

//THE HAMBURGER BUTTON AND MENU LINKS
const menulinks = document.querySelector('.menu-links')
const hamburgerButton = document.querySelector('.hamburger-button')


hamburgerButton.addEventListener('click',()=>{
    hamburgerButton.classList.toggle('hamburgerClicked')
    menulinks.classList.toggle('showlinks')

})



const menulinksContainer = document.querySelector('.menu-links-container')

const linkItems = document.querySelectorAll('.menu-links-list-items')

console.log(linkItems);
console.log(menulinksContainer);

linkItems.forEach((item)=>{

    item.addEventListener('click',()=>{
        menulinksContainer.querySelector('.active-link').classList.remove('active-link')
        item.classList.add('active-link')
    })

})