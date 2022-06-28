// Desafio: Juntando Salas
// Haverá uma palestra sobre padrões de projetos para alunos das salas de JavaScript e Python.
// Junte ambas as salas em uma única lista que exiba todos os alunos

const salaDePython = ["Tais", "Mel", "Helena", "Fabio", "Manoel", "Jesus", "Clarice"];
const salaJavaScript = ["Taysa", "Pedro", "Carla", "Julia", "Camila", "Priscila", "Beatriz"];

const salasUnificadas = salaJavaScript.concat(salaDePython);

console.log(salasUnificadas);