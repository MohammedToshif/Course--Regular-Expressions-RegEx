
//-----(11) - Making RegEx in JavaScript

/*

var reg = /[a-z]/ig;

var reg2 = new RegExp(/[a-z]/,'i');    // create a new regular exp. this takes two parameters 1.) actual regular expression.. 2.) string of flags

// i flags = case insensetive match
// g(global) = Dont return after first match

*/



//-----(12) - Telephone RegEx

/*

const patterns = {
    telephone:/^\d{11}$/
};
// alphabetic didn't match only numeric value match 11 digits

*/



//-----(13) - Testing a RegEx pattern

/*

// 2
const inputs = document.querySelectorAll('input');



// 1
const patterns = {
    telephone:/^\d{11}$/
};


// create a validation function
// 4

function validate(field,regex) {
    // console.log(regex.test(field.value));
    if(regex.test(field.value)) {
        field.className = 'valid';
    }else {
        field.className = 'invalid'
    }
}


// 3
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});

*/


//-----(14) - Matching a username & password

/*

// 2
const inputs = document.querySelectorAll('input');



// 1
const patterns = {
    telephone:/^\d{11}$/,
    username:/^[a-z\d]{5,12}$/i,
    password:/^[\w@-]{8,20}$/,
    slug:/^[a-z\d-]{8,20}$/
};


// create a validation function
// 4

function validate(field,regex) {
    // console.log(regex.test(field.value));
    if(regex.test(field.value)) {
        field.className = 'valid';
    }else {
        field.className = 'invalid'
    }
}


// 3
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});

*/

//-----(15) - Matching an Email Address



// 2
const inputs = document.querySelectorAll('input');



// 1
const patterns = {
    telephone:/^\d{11}$/,
    username:/^[a-z\d]{5,12}$/i,
    password:/^[\w@-]{8,20}$/,
    slug:/^[a-z\d-]{8,20}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};


// create a validation function
// 4

function validate(field,regex) {
    // console.log(regex.test(field.value));
    if(regex.test(field.value)) {
        field.className = 'valid';
    }else {
        field.className = 'invalid'
    }
}


// 3
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});