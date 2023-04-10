// Iteration 1: Names and Input

// 1.1 
const hacker1 = "Lucas"
// 1.2
console.log("The driver's name is " + hacker1);

// 1.3
const hacker2 = "Renato";
// 1.4
console.log("The navigator's name is " + hacker2);



// Iteration 2: Conditionals

// 2.1
const biggestName = hacker2.length
//console.log(biggestName);
//console.log('The driver has the longest name, it has 6 characters')

const driver = hacker1.length
const navigator = hacker2.length

if (driver > navigator){
    console.log(`The driver has the longest name, it has ${driver} characters.`)
} else if( navigator > driver){
    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${driver} characters!`)
}


// Iteration 3: Loops

// 3.1
const name = "Lucas";
let capitalName = "";

for (let i = 0; i < name.length; i++) {
  capitalName += name[i].toUpperCase() + " ";
}

console.log(capitalName);

// 3.2
const Name = "Renato";
let reversedName = "";

for (let i = Name.length -1; i >= 0; i--){
    reversedName += Name[i];
}

console.log(reversedName);

// 3.3

let order = hacker1.localeCompare(hacker2);

if (order === 1){
    console.log("The driver's name goes first.")
}else if (order === -1){
    console.log("Yo, the navigator goes first definitely.")
}else {
    console.log("What?! You both have the same name?")
}

// Bonus 1
let spaceCount = 0;
let wordEtCount = 0;

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada leo nec pretium aliquet. Suspendisse in nisi ac quam hendrerit congue. Sed consequat, nisl eget pulvinar laoreet, risus ante finibus sapien, eu interdum velit mi in nisl. Nulla pretium ex sit amet efficitur pharetra. Nulla ipsum nisl, gravida eget faucibus vel, tempor posuere nunc. Aenean gravida accumsan eros ac efficitur. Donec scelerisque nunc turpis, quis ultricies ligula lacinia nec. Pellentesque ornare eros ac nunc fermentum pharetra. In hac habitasse platea dictumst. Fusce ullamcorper magna tellus, placerat porttitor diam cursus nec. Morbi tristique, nisl ac vestibulum fermentum, ipsum felis varius odio, eget faucibus nunc lorem vitae nisl. Mauris rhoncus tempor ex, viverra gravida felis pretium nec. Mauris malesuada dui nec interdum euismod. Sed ligula elit, interdum vel turpis sed, pharetra porta lacus. Nullam tincidunt mattis imperdiet. Suspendisse sollicitudin metus in mi porta facilisis. Donec tortor enim, elementum ac dolor vitae, blandit facilisis sapien. Proin faucibus malesuada est et porttitor. Pellentesque feugiat orci eget nisl feugiat, id fringilla dolor pretium. Suspendisse mollis fringilla dolor. Maecenas et ullamcorper risus, ac lacinia ante. Sed id nibh libero. Vivamus vel leo aliquam, porta metus nec, lacinia diam. Aliquam et enim ultricies, placerat dolor vitae, dictum metus. Morbi tellus velit, molestie ut nisl vel, egestas iaculis leo. Cras congue auctor egestas. Aenean vulputate eleifend felis ut iaculis. Vestibulum nec enim quis lacus dictum ornare. Etiam consectetur, lorem tincidunt iaculis maximus, libero tortor hendrerit nulla, et luctus leo est vitae nunc. Suspendisse mollis ligula porta, bibendum turpis a, imperdiet erat. Morbi tempus, diam vel condimentum rutrum, leo sapien congue massa, mattis scelerisque massa leo nec lorem. Phasellus efficitur sed diam vel rhoncus. Pellentesque ullamcorper sapien ultricies tempor lobortis. Ut urna orci, consequat in risus in, tempor porta lorem. Ut mollis libero eget mollis consequat. Sed sit amet suscipit nunc, ac mattis ante. Vivamus eros nulla, tincidunt ut volutpat at, ultricies a nisi. Nam tempus auctor lorem et tempor."

for ( let i = 0; i < longText.length; i++){
    const char = longText[i];
    if (char === " ") {
        spaceCount ++
    }
};


for ( let i = 0; i < longText.length; i++){
    const char = longText[i] + longText[i + 1];
    if (char === 'et') {
        wordEtCount ++
    }
};

console.log(`The string has ${spaceCount + 1} spaces and ${wordEtCount} "et" words`);
  







