export const toast = (title, message) => {
    const body = document.querySelector('body')
    const container = document.createElement('div')
    const toastHeader = document.createElement('div')
    const image = document.createElement('img')
    const text = document.createElement('span')

    image.src = '../assets/check.svg'
    text.innerText = title

    container.classList.add('toast--container')
    container.classList.add('toast--show')
    toastHeader.classList.add('toast--header')
    image.classList.add('toast--image')
    text.classList.add('toast--title')

    toastHeader.append(image, text)
    container.appendChild(toastHeader)
    body.appendChild(container)

    setTimeout(() => {
        container.classList.remove('toast--show')
    }, 4900)
}