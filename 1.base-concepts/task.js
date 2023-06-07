"use strict"

function solveEquation(a, b, c) {
	let arr;
	let d = (Math.pow(b, 2)) - (4 * a * c);
	if (d < 0) {
		arr = [];
	}
	if (d === 0) {
		arr = [-b / (2 * a)];
	}
	if (d > 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}
	return arr
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentT, sum, result, toEqual = 0;
	if (contribution >= amount) {
		return 0;
	} else {
		if (countMonths <= 12) {
			percentT = (percent / countMonths) / 100;
		} else {
			percentT = (percent / 12) / 100;
		}
		sum = amount - contribution;
		result = sum * (percentT + (percentT / ((Math.pow((1 + percentT), countMonths)) - 1)));
		toEqual = contribution + (result * countMonths);
		console.log('Ввод: ' + percent + ', ' + contribution + ', ' + amount + ', ' + countMonths + '. Вывод: ' + (Math.floor(toEqual * 100) / 100))
	}
	return Number(toEqual.toFixed(2));
}