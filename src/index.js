import * as _exArray from './core/array/index';

function init (namespace) {
  namespace.array = Object.assign(_exArray, namespace.array);
  return namespace;
}

const cs = init({
  array: {}
});

export default cs;
