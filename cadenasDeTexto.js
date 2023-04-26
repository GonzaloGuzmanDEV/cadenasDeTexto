let nombre = "Gonzalo";

let apellido = "Guzman";

let estudiante = nombre + " " + apellido;

console.log(estudiante);

console.log(estudiante.toUpperCase());

console.log(estudiante.toLocaleLowerCase());

let estudianteLargo = estudiante.length;

console.log(estudianteLargo);

let primeraLetra = estudiante.charAt(0);

console.log(primeraLetra);

let ultimaLetra = estudiante.charAt(estudiante.length-1);

console.log(ultimaLetra);

let sinEspacios = estudiante.replace(/\s+/g, "");

console.log(sinEspacios);

let VF = estudiante.includes(nombre);

console.log(VF);
