const regex = /\b(Apple)+\b/g;

const fruit = "apple, banana, kiwi, Apple, orange";

for (const match of fruit.matchAll(regex)) {
    console.log(match);
} 