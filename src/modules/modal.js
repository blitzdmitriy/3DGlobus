const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    let animationId
    let count

    function animateOpen() {
        animationId = requestAnimationFrame(animateOpen)
        count += 5
        if (count <= 100) {
            modal.style.opacity = count + '%'
        } else {
            cancelAnimationFrame(animationId)
        }
    } 

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            if (window.innerWidth >= 768) {
                modal.style.opacity = '0%'
                count = 0
                animateOpen()
            }
        })
    })

   
    // function animateClose() {
    //     animationId = requestAnimationFrame(animateClose)
    //     count -= 5
    //     if (count >= 0) {
    //         modal.style.opacity = count + '%'
    //     } else {
    //         cancelAnimationFrame(animationId)
    //         modal.style.display = 'none'
    //     }
    // }

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
            
        }
        
    })
}

export default modal