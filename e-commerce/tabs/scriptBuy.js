var contador = 0;

function transformCash(){
    var infoText = document.getElementById("remove");
    infoText.style.display = "none";
    const element = document.createElement("div");
    element.textContent = "El pago en efectivo será realizado en el lugar acordado, o en el local.";
    element.classList.add("alert");
    element.classList.add("alert-warning");
    element.setAttribute("id","alert-envio");
    const replace = document.getElementById("alert-precio")
    document.getElementById("alert-envio").replaceWith(element);
};

function transformTransfer(){
    var infoText = document.getElementById("remove");
    infoText.style.display = "flex";
    const element = document.createElement("div");
    element.textContent = "Vas a pagar ARS$700 en el envio al domicilio indicado.";
    element.classList.add("alert");
    element.classList.add("alert-light");
    document.getElementById("alert-envio").replaceWith(element);
    element.setAttribute("id","alert-envio");
};


// falta añadir un sistema de recolección de los datos -> Utiliar API? ver bootcamp. API REST o algo así.
