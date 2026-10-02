const frm = document.querySelector("Form")
const resp = document.querySelector("h3")

function validar(e) {
    e.preventDefault();
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso
    if (masculino) {
        peso = 22  * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    resp.innerHTML = `${nome}: Seu peso ideal é ${peso.toFixed(2)} kg.`
}

frm.addEventListener("submit", validar)
