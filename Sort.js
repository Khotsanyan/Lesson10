let array = [46, 25, 11, 36, 1];
SortBy(array);

function SortBy(array, string = "Asc") {
  if (string === "Asc") {
    let min;
    for (let i = 0; i < array.length; i++) {
      min = array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (min > array[j]) {
          min = array[j];
          array[j] = array[i];
          array[i] = min;
        }
      }
    }
    console.log(array);
  } else if (string === "Desc") {
    let max;
    for (let i = 0; i < array.length; i++) {
      max = array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (max < array[j]) {
          max = array[j];
          array[j] = array[i];
          array[i] = max;
        }
      }
    }
    console.log(array);
  }
}
