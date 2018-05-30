/**
 * @description: 扩展数组concat方法，可以与任意数据类型做扩充
 * @param {Array} arr
 * @example: .concat([1,2],3,'4', true, [[5]]) => [1, 2, 3, "4", true, [5]]
 */
export default function (arr, ...args) {
  if (!Array.isArray(arr)) return [];
  if (args.length < 1) return arr;

  args.forEach(item => {
    !Array.isArray(item)
      ? arr.push(item)
      : item.forEach(child => {
        arr.push(child);
      });
  });
  return arr;
}