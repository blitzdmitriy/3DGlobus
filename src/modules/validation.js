const validation = () => {
    const inputsForm1 = document.querySelectorAll('#form1 input')
    const inputsForm2 = document.querySelectorAll('#form2 input')
    const contactInputs = [...inputsForm1, ...inputsForm2]
    const calcInputs = document.querySelectorAll('.calc-block > input')

    contactInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            if (input.type === "text") {
                e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, "")
            }
            if (input.type === "email") {
                e.target.value = e.target.value.replace(/[^a-zA-Z\d\@\-\_\.\!\~\*\']/, "")
            }
            if (input.type === "tel") {
                e.target.value = e.target.value.replace(/[^\d\(\)\-]/, "")
            }
        })
    })

    calcInputs.forEach((input) => {
        input.addEventListener('input', (e) => {                       
            e.target.value = e.target.value.replace(/[\D]/, "")            
        })
    })
    
}

export default validation