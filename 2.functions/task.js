function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let i;
	for (i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}
		if (max < arr[i]) {
			max = arr[i];
		}
		sum += arr[i];
	}
	let avg = sum / i;
	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};
}


function summElementsWorker(...arr) {
	let i;
	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return (max - min);
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let i;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			sumOddElement += arr[i];
		} else {
			sumEvenElement += arr[i];
		}
	}
	return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let i;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return (sumEvenElement / countEvenElement);
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (const arr of arrOfArr) {
    const result = func(...arr);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}