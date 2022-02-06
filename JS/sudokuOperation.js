export class SudokuOperation {
  checkArrayGroup(array, number) {
    for (var index = 0; index < array.length; index++) {
      if (array[index].indexOf(number) !== -1) {
        return true;
      }
    }

    return false;
  }

  checkRowOfArray(array, number, rownumber) {
    for (let index = rownumber; index < array.length; index++) {
      for (let j = 0; j < array[index].length; j++) {
        if (array[rownumber][j] == number) return true;
      }
    }

    return false;
  }

  checkCoulmnOfArray(array, number, colNumber) {
    for (let rowNum = 0; rowNum < array.length; rowNum++) {
      if (array[rowNum][colNumber] == number) return true;
    }

    return false;
  }
}
