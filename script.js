const frases = [
    "Eres el color que ilumina mi día",
    "Eres la optimización perfecta de mi tiempo y espacio",
    "Contigo, todo florece",
    "Eres el engranaje que hace que todo funcione a la perfección en mi corazón",
    "Nuestra conexión es como una línea de producción: constante, precisa y siempre mejorando",
    "Si fueras una máquina, serías de alta precisión y eficiencia porque encajas perfectamente conmigo",
    "Tú eres la razón por la que todo fluye sin fricciones en mi día a día"
];

let index = 0;
setInterval(() => {
    document.getElementById('frase').innerText = frases[index];
    index = (index + 1) % frases.length;
}, 3000);