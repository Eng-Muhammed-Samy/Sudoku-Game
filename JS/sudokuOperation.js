export class SudokuOperation {


    
checkArrayGroup(array, number) {

	for (var index = 0; index < array.length; index++) {
		if (array[index].indexOf(number) !== -1) {
			return true
		}
	}

	return false;

}

checkRowOfArray(array, number) {

  for (let index = 0 ; index<array.length; index++){
	  for(let j = 0 ; j<array[index].length;j++){
		  if (array[index][j]==number)
			 return true;
	  }
  }
 
  return false;

}


 checkCoulmnOfArray(array,number){

	let len = 0;
	for(let colNum = 0 ; colNum < array[len].length ; colNum++){
		for( let rowNum = 0 ; rowNum<array.length;rowNum++){
			 if (array[rowNum][colNum]== number)
			 return true; 
		}			
	}

	
	return false;
}





}

