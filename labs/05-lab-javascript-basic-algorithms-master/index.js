// Iteration 1: Names and Input

let hacker1 = "Angela";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Einar";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Variación 002 vista en clase (ternary), se usa para substituir if...else
// Syntax:
// condition ? expression1 : expression2

//si la condición es verdadera se ejecuta la expression1
//si la condición es falsa se ejecuta la expression2

//First Example - 50/50 conditonial- Ternary
hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
  : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );

//Multiple Use Cases - Ternary

hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
  : hacker1.length === hacker2.length
  ? console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    )
  : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );

// Iteration 3: Loops

upperCase = hacker1.toUpperCase();
let nameSpace = "";

for (let i = 0; i < upperCase.length; i++) {
  if (i !== upperCase.length - 1) {
    nameSpace += upperCase[i] + " ";
  } else {
    nameSpace += upperCase[i];
  }
}

console.log(nameSpace);

// In reverse order
let reversed = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  reversed += hacker1[i];
}

console.log(reversed);

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed mi luctus, condimentum nisl non, sagittis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed a ligula vulputate, scelerisque lorem nec, scelerisque tortor. Donec a risus quam. Donec neque felis, finibus a faucibus sed, finibus non augue. Curabitur varius sodales facilisis. Donec non felis quis tellus blandit posuere. Vestibulum feugiat est luctus velit imperdiet, ac ornare mi laoreet. Nulla fermentum, mi at efficitur mattis, tortor ex ultrices ligula, at bibendum lectus ligula in sapien. Duis scelerisque lectus vitae orci tincidunt, vitae pharetra metus finibus. Curabitur at dignissim erat. Aliquam erat volutpat. Sed et rhoncus mi.

Ut a auctor tellus, eu posuere metus. Quisque vel urna velit. Nunc nec nunc ut tortor finibus eleifend sit amet vitae ligula. In tempor, tellus vel hendrerit fringilla, metus elit posuere metus, vel sagittis magna nulla et purus. Maecenas consequat nisi et commodo tempor. Ut viverra sem in mi fermentum volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dapibus malesuada ornare. Integer consequat lorem pharetra, gravida neque id, ullamcorper erat. Nam interdum nibh mollis enim varius, vitae placerat ipsum bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sodales augue ex.

Integer placerat nunc eget sem efficitur, sed luctus purus faucibus. Quisque sit amet erat at lectus elementum pulvinar. In vitae magna ut tellus ullamcorper volutpat id sit amet ipsum. Fusce ullamcorper sed diam auctor ornare. Phasellus ante risus, convallis scelerisque ligula accumsan, convallis mollis sem. Vestibulum sed libero vitae urna blandit sodales. Nunc a consectetur augue.`;

let words = longText.split(" ");
let countWords = 0;
let countEt = 0;

for (let i = 0; i < words.length; i++) {
  countWords++;
  if (words[i].includes("et")) {
    countEt++;
  }
}

console.log(
  `El texto contiene un total de ${countWords} palabras y ${countEt} veces la palabra et`
);

// Bonus 2
let phraseToCheck = "race car";

console.log(phraseToCheck.length);

let middle = phraseToCheck.length / 2;
let inicio;
let final = "";

for (let i = 0; i < phraseToCheck.length / 2; i++) {
  inicio = phraseToCheck[i];
}

//reverse

for (let a = phraseToCheck.length / 2 - 1; a >= 0; a--) {
  final += phraseToCheck[a];
}

console.log(final); // "reward"

//Última comprobación una vez divida la frase
if (inicio === final) {
  console.log(`La frase ${phraseToCheck} SI es un palindromo`);
} else {
  console.log(`La frase ${phraseToCheck} NO es un palindromo`);
}

//No está bien este último ejercicio
