import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: 'Campo inválido',
    required: 'Este campo es obligatorio',
    oneOf: '${path} debe ser uno de los siguientes valores: ${values}',
    notOneOf: '${path} no debe ser uno de los siguientes valores: ${values}',
    defined: '${path} debe estar definido',
    notType: '${path} debe ser un ${type}',
  },
  string: {
    length: '${path} debe tener exactamente ${length} caracteres',
    min: '${path} debe tener al menos ${min} caracteres',
    max: '${path} debe tener como máximo ${max} caracteres',
    matches: '${path} debe coincidir con el patrón: "${regex}"',
    email: '${path} debe ser un correo electrónico válido',
    url: '${path} debe ser una URL válida',
    uuid: '${path} debe ser un UUID válido',
    trim: '${path} no debe tener espacios al inicio o al final',
    lowercase: '${path} debe estar en minúsculas',
    uppercase: '${path} debe estar en mayúsculas',
  },
  number: {
    min: '${path} debe ser mayor o igual a ${min}',
    max: '${path} debe ser menor o igual a ${max}',
    lessThan: '${path} debe ser menor que ${less}',
    moreThan: '${path} debe ser mayor que ${more}',
    positive: '${path} debe ser un número positivo',
    negative: '${path} debe ser un número negativo',
    integer: '${path} debe ser un número entero',
  },
  date: {
    min: '${path} debe ser posterior a ${min}',
    max: '${path} debe ser anterior a ${max}',
  },
  boolean: {
    isValue: '${path} debe ser ${value}',
  },
  object: {
    noUnknown: '${path} tiene claves no especificadas: ${unknown}',
  },
  array: {
    min: '${path} debe tener al menos ${min} elementos',
    max: '${path} debe tener como máximo ${max} elementos',
    length: '${path} debe contener exactamente ${length} elementos',
  },
});
