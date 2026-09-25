function calcularmedia() [
const textoNota1 = document.getElementById("nota1")
const textoNota2 = document.getElementById("nota2")
const textoNota3 = document.getElementById("nota3")

const nota1= Number(textoNota1)
const nota2= Number(textoNota2)
const nota3= Number(textoNota3)

const media= (nota1+ nota2+ nota3) /3

let situação 
if(media>=7){ situação="aprovado"
}
else if(media>=5){ situação="recuperação"
}
else { situação="aprovado"
}
const mediaformatada= media.toFixed(1)
document.getElementById("resultado").textContent="media:" + mediaformatada +"-situação:" + situação
]