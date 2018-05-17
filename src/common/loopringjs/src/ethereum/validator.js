import Schema from 'async-validator';
import schemas from './schemas';

const handleErrors = (errors, fields) => {
  let msgs = errors.map(err => err.message).join();
  throw new Error(`data type invalid: ${msgs} \n`)
};

const validate = (payload) => {
  const {type, value, onError, onSuccess} = payload;
  let source = {};
  let schema = {};

  if (typeof value === 'undefined') {
    throw new Error(`data type invalid: ${type} should not be undefined`)
  }
  if (value === null) {
    throw new Error(`data type invalid: ${type} should not be null`)
  }
  if (schemas[type]) {
    schema[type] = schemas[type];
    source[type] = value
  } else {
    throw new Error('invalid type')
  }
  let validator = new Schema(schema);

  console.log(schema);
  console.log(source);
  validator.validate(source, (errors, fields) => {
    if (errors) {
      if (onError) {
        onError(errors, fields)
      } else {
        console.log(errors)
        handleErrors(errors, fields);
      }
    } else {
      if (onSuccess) {
        onSuccess()
      }
    }
  })
};

export default {
  validate
}
