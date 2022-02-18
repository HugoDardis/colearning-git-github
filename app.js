let paises = [];

paises.push("Brasil ", "Argentina ", "Colombia ", "Equador ", "Alemanha ", "Espanha ");

console.table(paises);

console.log("-")

console.log('imprimindo posição por posição');

//forma tradicional
for (let i = 0; i < paises.length; i++){
  console.log(paises[i]);
}

console.log("-")

//intera
paises.forEach((pais) => {
  return console.log(pais)
})

console.log("-")

//interna sobre array
for (let pais of paises){
  console.log(pais)
}