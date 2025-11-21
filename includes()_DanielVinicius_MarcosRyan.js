const usuariosPermitidos = ["Ana", "Marcos", "Julia", "Pedro"];

const usuarioDigitado = "Cristiano";

if (usuariosPermitidos.includes(usuarioDigitado)) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso negado!");
}