/* Pretend there there is no Array.map() method, only Array.reduce().
   The below code demonstrates one way that Array.reduce() could be used to
   mimic the map method. It takes an array, and creates a new array where
   every string in the array is prefixed with the string 'hello '. You can
   see the result logged in the console. 
*/
const names = ['Nucamp', 'React', 'JavaScript'];
const helloNames = names.reduce((acc, cur) => { 
    acc.push(`hello ${cur}`);
    return acc;
}
, []);
console.log(helloNames);


/* CHALLENGE 1
   Pretend there there is no Array.filter() method, only Array.reduce().
   How would you use Array.reduce() to mimic the filter method, thus that
   from the array below, you can create a new array composed of only the objects
   from the original array that contain a price property of 10 and over?
   Part of the code has been completed for you. 
   Complete the rest by uncommenting the return statement on line 36
   and writing the code for what to return when cur.price is >= 10. 
*/

const gems = [
    { type: 'amethyst', price: 8 },
    { type: 'turquoise', price: 50 },
    { type: 'selenite', price: 2 },
    { type: 'topaz', price: 10 },
    { type: 'emerald', price: 500 }
]

const gemsOverTen = gems.reduce((acc, cur) => {
  if (cur.price < 10) {
    return acc;
  }
  acc.push(cur);
  return acc
}, []);

console.log(gemsOverTen)

/* CHALLENGE 2
   Examine the code below, then delete the line indicated inside the 
   definition of the reducer function. In its place, write a switch
   statement with a case for the 'update_hp' and 'update_pos' action 
   types, as well as a default case.
   Your goal is to have the state variable, when logged at the end, contain
   an object with the content of: { hp: 800, xPosition: 205, yPosition: 190 }
*/

const actions = [
    { type: 'update_hp', payload: -200 },
    { type: 'update_pos', payload: { x: 5, y: -10 } }
];

const initialState = {
    hp: 1000,
    xPosition: 200,
    yPosition: 200
};

const reducer = (state, action) => {
    switch (action.type) {
      case 'update_hp':
        state.hp = state.hp + action.payload;
        break;
      case 'update_pos':
        state.xPosition = state.xPosition + action.payload.x;
        state.yPosition = state.yPosition + action.payload.y;
        break;
    }

    return state;

};

const state = actions.reduce(reducer, initialState);
console.log(state);