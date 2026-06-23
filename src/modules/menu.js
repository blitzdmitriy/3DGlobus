const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul > li > a')
    const btnNextSlide = document.querySelector('main > a')
    const body = document.querySelector('body')
    
    let animStartPos
    let animEndPos
    let animationId
    let scrollDistance

    const toggleMenu = () => {
        menu.classList.toggle('active-menu')
    }
    
    const calculateAnim = (targetElement) => {
        animStartPos = document.documentElement.scrollTop
        animEndPos = Math.floor(targetElement.getBoundingClientRect().top) + animStartPos
    }

    function scrollAnim () {
        animationId = requestAnimationFrame(scrollAnim)
        scrollDistance = animEndPos - animStartPos
        scrollDistance = Math.trunc(scrollDistance / 10) + (scrollDistance < 0 ? -1 : 1)
        animStartPos += scrollDistance
        document.documentElement.scrollTop = animStartPos
        
        if (animStartPos == animEndPos) {
            cancelAnimationFrame(animationId)
        }
    }

    body.addEventListener('click', (e) => {
        if (e.target.closest('.menu') || e.target.classList.contains('close-btn')) {
            toggleMenu()
        }
        else if (e.target.closest('.active-menu') && (e.target !== menu)) {
            menuItems.forEach(elem => {
                if(elem == e.target) {
                    toggleMenu()
                    let targetId = e.target.getAttribute('href')
                    const targetElement = document.querySelector(targetId)
                    calculateAnim(targetElement)
                    scrollAnim()
                }
            })         
        }
    })

}

export default menu 