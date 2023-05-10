        const menuHamburger = document.querySelector(".boutton")
        const navLinks = document.querySelector(".navLiens")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobileMenu')
        })