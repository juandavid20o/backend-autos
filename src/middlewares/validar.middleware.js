export function validarCamposCliente(req, res, next) {
  const { nombre, correo, numLic, password } = req.body;
  if (!nombre || !correo || !numLic || !password) {
    return res.status(400).json({
      mensaje: 'nombre, correo, numLic y password son obligatorios'
    });
  }
  next();
}

export function validarCredenciales(req, res, next) {
  const { correo, password } = req.body;
  if (!correo || !password) {
    return res.status(400).json({
      mensaje: 'correo y password son obligatorios'
    });
  }
  next();
}

export function validarCamposAuto(req, res, next) {
  const { marca, modelo, valorAlquiler } = req.body;
  // == null ya que !valorAlquiler: el numero 0 es falso en JavaScript
  if (!marca || !modelo || valorAlquiler == null) {
    return res.status(400).json({
      mensaje: 'marca, modelo y valorAlquiler son obligatorios'
    });
  }
  if (typeof valorAlquiler !== 'number' || valorAlquiler <= 0) {
    return res.status(400).json({
      mensaje: 'valorAlquiler debe ser un numero mayor a 0'
    });
  }
  next();
}

export function validarCamposAlquiler(req, res, next) {
  // Aceptamos tanto fechainicio como fechaInicio por seguridad
  const { autoId, fechainicio, fechaInicio, fechaFin } = req.body;
  const inicioValido = fechainicio || fechaInicio;

  if (autoId == null || !inicioValido || !fechaFin) {
    return res.status(400).json({
      mensaje: 'autoId, fechainicio y fechaFin son obligatorios'
    });
  }
  const inicio = new Date(inicioValido);
  const fin = new Date(fechaFin);
  if (isNaN(inicio.getTime()) || isNaN(fin.getTime())) {
    return res.status(400).json({
      mensaje: 'Las fechas deben tener un formato valido'
    });
  }
  if (fin <= inicio) {
    return res.status(400).json({
      mensaje: 'fechaFin debe ser posterior a fechainicio'
    });
  }
  next();
}

export function validarIdNumerico(req, res, next) {
  if (!(/^\d+$/.test(req.params.id))) {
    return res.status(400).json({ mensaje: 'El id debe ser un numero entero' });
  }
  next();
}