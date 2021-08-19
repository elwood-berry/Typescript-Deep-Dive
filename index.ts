// -------------------------------------------------------

const myName: string = 'Elwood Steven Berry'; //  We expect the variable, 'myName', to always be a string.

// --
const couldBeAnything: any = undefined;
const iAmANumber: number = 100; // "-1000", "10.00"
const yes: boolean = true;
const no: boolean = false;
const nothingHere: null = null;
const noDefinition: undefined = undefined;
// --
const notSure: any = undefined;
const appDiv: HTMLElement = document.getElementById('app'); // The div

// -------------------------------------------------------

/*
TS W/ FUNCTIONS  
*/

// #1
const addNumbers = (a: number, b: number): number => {
  return a + b;
};

// #2
const addStrings = (a: string, b: string): string => {
  return a + b;
};

// -------------------------------------------------------

/*
TS W/ KEYWORD FUNCTIONS  
*/

// #1
function add(a: number, b: number): number {
  return a + b;
}

// #2
const joinString = function(a: string, b: string): string {
  return a + b;
};

// -------------------------------------------------------
// Import stylesheets
import './style.css';

//
appDiv.innerHTML = `
I was talking to <strong>${myName}</strong>
`;

console.log('Elwood Is Here');
