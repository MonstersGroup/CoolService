import has from './has';
import remove from './remove';

/**
 * @description: 返回arr中与args不同的元素，对比规则使用强类型匹配
 * @param {Array} arr 
 * @param {...value} args
 * @example: .difference([1,2,3,4], ...[2,3]) => [1,4]
 *            .difference([1,2,3,4],2,3) => [1,4]
 */
export default function (arr, ...args) {
  if (!Array.isArray(arr) || args.length < 1) return false;
  args.forEach(item => {
    const _hasTmp = has(arr, item, true); // 使用强匹配
    if (_hasTmp && _hasTmp.length > 0) {
      _hasTmp.forEach(item => {
        const { index, value } = item;
        arr = remove(arr, index);
      });
    }
  });
  return arr;
}