/**
 * Syllogism functions
 *
 * Homework #4
 */

// Is the man mortal?

function isMortalMan(name) {
  if (typeof name != 'string') return 'Input must be a string';
  const mortalMen = ['socrates', 'Hercules'];

  return mortalMen.includes(name) ? true : 'That name is not familiar';
}

console.log(isMortalMan('socrates'));
console.log(isMortalMan('bob'));
console.log(isMortalMan(25));

// What's the cake flavor?

function cakeFlavor (cakes, isChocolate) {
  return isChocolate ? `The cake is ${cakes[0]}.` : `The cake is ${cakes[1]}`;
}

const cakeTypes = ['chocolate', 'vanilla'];

console.log(cakeFlavor(cakeTypes, true));
console.log(cakeFlavor(cakeTypes, false));

