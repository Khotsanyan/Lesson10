let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9];
console.log(Concate(array1, array2));

function Concate(arr1, arr2) {
  for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    arr1.push(element);
  }
  let arr3 = arr1;
  return arr3;
}
