
const main = document.getElementById('main')
main.remove()
main.innerHTML = "<h1>victory</h1><h3>Gatwiri is the champion</h3>"
let newHeader = document.createElement("h1")
document.body.append(newHeader)
newHeader.innerHTML = 'Gatwiri is the champion'
newHeader.id = "#victory"
newHeader.className = "victory";