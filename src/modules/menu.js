const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul > li > a')
    const btnNextSlide = document.querySelector('main > a')
    
    let animStartPos
    let animEndPos
    let animationId
    let scrollDistance

    const handleMenu = () => {
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

    closeBtn.addEventListener('click', handleMenu)
    menuBtn.addEventListener('click', handleMenu)

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            handleMenu()
            let targetId = item.getAttribute('href')
            const targetElement = document.querySelector(targetId)
            calculateAnim(targetElement)
            scrollAnim()
        })
    })
    
    btnNextSlide.addEventListener('click', () => {
        let targetId = btnNextSlide.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        calculateAnim(targetElement)
        scrollAnim()
    })
}

export default menu 