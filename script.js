function boton1() {
  let lista = document.getElementById("lista-e1");
  lista.innerHTML = "";

  for (let numeroVariable = 50; numeroVariable > 19; numeroVariable--) {
    let nuevoNumero = document.createElement("li");
    nuevoNumero.textContent = numeroVariable;

    lista.appendChild(nuevoNumero);
  }
}

function numeroMenor() {
  let numeroMenor = parseInt(document.getElementById("numeroMenor").value);
  let bordeNumeroMenor = document.getElementById("numeroMenor");
  let textoError = document.getElementById("textoError1");

  if (numeroMenor >= 1 && numeroMenor <= 10) {
    bordeNumeroMenor.style.borderColor = "#EF4EC6";
    textoError.innerHTML = "";
    textoError.style.marginTop = "";
  } else {
    textoError.innerHTML = "El número ingresado no se encuentra entre 1 y 10.";
    textoError.style.marginTop = "-16px";
    bordeNumeroMenor.style.borderColor = "red";
  }
}

function numeroMayor() {
  let numeroMayor = parseInt(document.getElementById("numeroMayor").value);
  let bordeNumeroMayor = document.getElementById("numeroMayor");
  let textoError = document.getElementById("textoError2");

  if (numeroMayor >= 11 && numeroMayor <= 20) {
    bordeNumeroMayor.style.borderColor = "#EF4EC6";
    textoError.innerHTML = "";
    textoError.style.marginTop = "";
  } else {
    textoError.innerHTML = "El número ingresado no se encuentra entre 11 y 20.";
    textoError.style.marginTop = "-16px";
    bordeNumeroMayor.style.borderColor = "red";
  }
}

function boton2() {
  let n1 = parseInt(document.getElementById("numeroMenor").value);
  let n2 = parseInt(document.getElementById("numeroMayor").value);

  let lista2 = document.getElementById("lista-e2");
  lista2.innerHTML = "";

  if (n1 > 0 && n1 < 11 && n2 > 10 && n2 < 21) {
    let arrayNumeros = [];
    for (let i = n1; i <= n2; i++) {
      arrayNumeros.push(i);
    }
    let arrayImpares = arrayNumeros.filter((numero) => numero % 2 !== 0);
    for (let numerosImpares of arrayImpares) {
      let numerosImparesNuevos = document.createElement("li");
      numerosImparesNuevos.textContent = numerosImpares;
      lista2.appendChild(numerosImparesNuevos);
    }
  } else {
    alert("Los números ingresados no se encuentran dentro del rango correcto.");
  }
}

const precios = document.querySelectorAll('.precio-input');

precios.forEach(precio => {
    precio.addEventListener('input', total);
});

function total () {
    const p1 = parseInt(document.getElementById('precio1').value);
    const p2 = parseInt(document.getElementById('precio2').value);
    const p3 = parseInt(document.getElementById('precio3').value);
    const p4 = parseInt(document.getElementById('precio4').value);
    const p5 = parseInt(document.getElementById('precio5').value);

    const total = document.getElementById('total');
    const textoDescuento = document.getElementById('textoDescuento');

    const suma = p1 + p2 + p3 + p4 + p5;
    if (suma > 100){
        const totalDescuento = suma - suma * 0.15;
        total.value = "€" + totalDescuento;
        textoDescuento.innerHTML = `¡Felicidades! Te hemos hecho un 15% de descuento en tu compra.<br>Precio sin descuento de €${suma}.`;
        textoDescuento.style.marginTop = "-16px";
    } else {
        total.value = "€" + suma;
        textoDescuento.innerHTML = "Lo sentimos. Debes superar los €100 para obtener el 15% de descuento."
        textoDescuento.style.marginTop = "-16px";
    }
}

  const agrandarFuente = document.getElementById('agrandarFuente');
  const reducirFuente = document.getElementById('reducirFuente');

  let tamañoFuente = 16;

  agrandarFuente.addEventListener('click', () => {
    tamañoFuente += 2;
    document.body.style.fontSize = tamañoFuente + "px";
  })

  reducirFuente.addEventListener('click', () => {
    tamañoFuente -= 2;
    document.body.style.fontSize = tamañoFuente + "px";
  })
  