"use strict"

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let avg;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {

		if (min > arr[i]) {
			min = arr[i];
		};

		if (max < arr[i]) {
			max = arr[i];
		}

		sum += arr[i];

	}

	if (arr.length != 0) {
		avg = +(sum / arr.length).toFixed(2);
	}

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length == 0) {
		return 0;
	}

	var totalSumm = 0;
	totalSumm = arr.reduce(function(a, b) {
		return a + b;
	});
	return totalSumm;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length == 0) {
		return 0;
	}

	let min;
	let max;

	min = Math.min(...arr);
	max = Math.max(...arr);
	return max - min;

}

function differenceEvenOddWorker(...arr) {
	if (arr.length == 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
	if (arr.length == 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	if (countEvenElement != 0) {
		return sumEvenElement / countEvenElement;
	} else return 0;

}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let temporaryMax = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		temporaryMax = func(...arrOfArr[i]);
		if (temporaryMax > maxWorkerResult) {
			maxWorkerResult = temporaryMax;
		}
	}

	return maxWorkerResult;
}