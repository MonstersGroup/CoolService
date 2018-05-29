/**
 * @description: 数组扩展方法remove
 * @param {Array} arr
 * @example: .chunk([1,2,3,4], 2) => return [[1,2],[3,4]]
 */
export default function (arr, value, type='index') {
  if(!Array.isArray(arr)){
    return arr;
  }
  if(type === 'index'){
    arr.splice(value, 1);
    return arr;
  }
  for(let i=0,l=arr.length; i<l; i++){
    if(arr[i] === value){
      arr.splice(i, 1);
      break;
    }
  }
  return arr;
}
