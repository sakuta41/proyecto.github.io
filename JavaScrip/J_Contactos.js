function enviarCorreo() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    let asunto = "Nuevo mensaje de contacto de " + nombre;
    let cuerpo = `Nombre: ${nombre}%0ACorreo: ${email}%0AMensaje: ${mensaje}`;

    window.location.href = `mailto:contacto@agenciadeviajes.com?subject=${asunto}&body=${cuerpo}`;
    return false;
}
