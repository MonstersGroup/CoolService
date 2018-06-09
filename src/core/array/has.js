/**
 * @description：返回数组arr中所有与value相等的元素的下标与值
 * @param {Array} arr 
 * @param {*} value 
 * @param {Boolean} isForce
 * @example: arr([1,2,'2',3], 2) => [{index: 1, value: 2}, {index: 2, value: '2'}]
 *           arr([1,2,'2',3], 2, true) => [{index: 1, value: 2}]
 */
export default function (arr, value, isForce = false) {
  if (!Array.isArray(arr)) return false;
  const result = [];
  arr.forEach((item, index) => {
    const _tmp = {};
    if ((isForce && item === value) || (!isForce && item == value)) {
      _tmp.index = index;
      _tmp.value = item;
      result.push(_tmp);
    }
  });
  return result;
}