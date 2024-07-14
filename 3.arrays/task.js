"use strict"

function compareArrays(arr1, arr2) {

	const eq1_2 = arr1.every((item, i) => arr1[i] === arr2[i]);
	const eq2_1 = arr2.every((item, i) => arr2[i] === arr1[i]);

	return eq1_2 && eq2_1;
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(user => user.gender === gender).reduce((acc, item, i, arr) => {
		if (arr.length === 0) {
			return 0;
		} else if (i === arr.length - 1) {
			return (acc + item.age) / arr.length;
		} else {
			return acc + item.age;
		}

	}, 0);

	return result;
}