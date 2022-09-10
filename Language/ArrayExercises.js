//const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people.pop();
people.unshift('Matt');
people.push('Koby')
const copyPeople = people.slice(0, 2);
people.indexOf('Mary');
people.indexOf('Foo');
let people = ["Greg", "Mary", "Devon", "James"];
const splil = people.splice(2, 1, 'Elizabeth', 'Artie');
const withBob = people.concat('Bob');




console.log(people);
console.log(copyPeople);
console.log(withBob);
console.log(splil);