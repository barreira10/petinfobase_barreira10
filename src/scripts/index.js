import { loginRequest, userRequest } from "./requests.js";

const authentication = () => {
    const token = localStorage.getItem("@petinfo:token")
    if(token) {
        window.location.replace('./src/pages/dashboard.html')
    }
}
authentication()

const handleLogin = () => {
    const emailInput = document.querySelector('#input--email')
    const passwordInput = document.querySelector('#input--senha')
    const submitButton = document.querySelector('.login--submit')
    const spinner = document.querySelector('.spinner')

    submitButton.addEventListener('click', async (event) => {
        event.preventDefault()
        spinner.classList.remove('hidden')
        setTimeout(() => {
            
            const loginBody = {
                email: emailInput.value,
                password: passwordInput.value
            }
            spinner.classList.add('hidden')
            const token = loginRequest (loginBody)
        }, 2000);
        if(token){
            await userRequest()
        }
    })
}
handleLogin()

const registerRedirect = () => {
    const registerButton = document.querySelector('.register--button__redirect')
    registerButton.addEventListener('click', async () => {
        window.location.replace('./src/pages/createLogin.html')
    })
}
registerRedirect()