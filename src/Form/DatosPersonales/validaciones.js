export const validarNombre = (nombre) => {
    const length = nombre.length;
    return (length > 1 && length < 31) ? true : false;
}

export const validarApellido = (apellidos) => {
    const length = apellidos.length;
    return (length > 1 && length < 51) ? true : false;
}

export const validarTelefono = (telefono) => {
    const length = telefono.length;
    return (length >= 8 && length <= 14) ? true : false;
}