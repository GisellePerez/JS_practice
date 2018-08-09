///// ARROW FUNCTIONS
var fn1 = function (a) {
    return 2 * a
}
console.log('fn1',fn1(2));

var fn2 = a => 2*a; // no parenthesis cause there's only a single argument 
console.log('fn2',fn2(2));

//for multiple arguments:
var fn3 = (a,b) => a + b;
console.log('fn3',fn3(2,4));

// Incorrect implicit return of object literal notation: var fn4 = () => { name: 'Bob' };
// Correct implicit return of object literal notation:
var fn4 = () => ({ name: 'Giselle' });
console.log('fn4',fn4())


///// REST PARAMETERS: a way of capturing any number of arguments passed into a funtion in an array. Similar to arguments, but gives an array
var fn7 = (a,b, ...more) => {
    console.log(a);
    console.log(b);
    console.log(more); //final parameter in the list of parameters
}
fn7('a','b','c','d','e','f','g');

// TEMPLATE LITERALS
var name = 'Giselle';
console.log(`Hi! My name is ${name}.`);

class Monster {
    constructor(name){
        this.name = name;
    }

    greetings() {
        console.log(`Hi, i'm ${this.name}.`);
    }
}

var ogre = new Monster ('Shrek');
ogre.greetings();

///// PROMISES
// promises alow you to promise that one day the value you'll get from a server will exist. Then you do something with the value after it resolves.
// if there's an error, the promise can reject and you can catch the error

const isMomHappy = true;

const willGetNewPhone = new Promise (

    (resolve,reject) => {

        if (isMomHappy) {

            const phone = {
                brand: 'Sony',
                color:'white'
            };
            resolve (phone);

        }else{
            const reason = new Error('mom is not happy');
            reject(reason);
        }
    }
);

const showOff = function (phone) {
    const message = `Hi friend! I have a new ${phone.color} ${phone.brand} phone`;
    return Promise.resolve(message);
};

//now we call the proise

const askMom = function() {
    willGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled))
        .catch(err => console.log('error',message))
}

askMom();


const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(i_two) { //needs an inner argument

    return function(){
        console.log('Index: ' + i_two);
    }

  }(i), 1000); //need to get i back here
}

const array = [10, 12, 15, 21];
for (let i = 0; i < array.length; i++) { //let creates a variable :D
  setTimeout(function() { 
    console.log('Index: ' + i + ' - Number: '+ array[i] );
  }, 1000); //need to get i back here
}

for(var i = 0; i < 3 ; i++ ){
    setTimeout(function(i_local){
        return function() { console.log(i_local) }
    }(i),2000 + i)
}

function createBase(x) {
    return function (number) {
        return x + number;
    }
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

