
const main = document.getElementById('main')
main.remove()

let newHeader = document.createElement("h1")
document.body.append(newHeader)
newHeader.innerHTML = 'Gatwiri is the champion'
newHeader.id = "#victory"