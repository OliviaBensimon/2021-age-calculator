function family(member, name, age, months_old) {
	return `My ${member}, ${name} is ${age} (${months_old} months).`;
}

function months_old(age) {
	return parseInt(age) * 12;
}

family("mom", "Vanessa", "52", months_old(52));

function family_d(member, name, age, months_old) {
	return `My ${member}, ${name} is ${age} (${months_old} months).`;
}

function months_old(age) {
	return parseInt(age) * 12;
}

family_d("dad", "Laurent", "63", months_old(62));

family("brother", "David", "21", months_old(21));