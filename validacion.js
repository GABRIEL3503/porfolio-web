//Haz tú validación en javascript acá

export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.add("input-container--valid");
    input.parentElement.querySelector(".input-message-error").innerHTML = " "
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
    mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores =[
  "valueMissing",
  "typeMismatch"
];
  


const mensajesDeError ={
nombre:{
  valueMissing: "El campo nombre no puede estar vacio"
},
email:{
  valueMissing: "El campo email no puede estar vacio",
  typeMismatch: "Deber estar en formato e-mail conteniendo el caracter especial @ seguido de un dominio o proveedor seguido de un punto(.)"
},
asunto:{
  valueMissing: "El campo contraseña no puede estar vacio",
  
},
mensaje:{ 
  valueMissing: "El campo mensaje no puede estar vacio",
  
}
}

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

