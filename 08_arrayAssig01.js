console.log(">>>>>>>>>> Question 1 <<<<<<<<<");

const fruitSeasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Firstelement is ${fruitSeasonal [0]} and Last element is ${fruitSeasonal[fruitSeasonal.length-1]}`);

console.log(">>>>>>>>>> Question 2 <<<<<<<<<");

fruitSeasonal.unshift("Papaya");
console.log(fruitSeasonal);

console.log(">>>>>>>>>> Question 3 <<<<<<<<<");

fruitSeasonal.splice(4,1);
console.log(fruitSeasonal);

console.log(">>>>>>>>>> Question 4 <<<<<<<<<");

fruitSeasonal.push("pineapple");
console.log(fruitSeasonal);

console.log(">>>>>>>>>> Question 5 <<<<<<<<<");

fruitSeasonal.splice(4,0,"DragonFruit");
console.log(fruitSeasonal);

console.log(">>>>>>>>>> Question 6 <<<<<<<<<");

fruitSeasonal.splice(2,1,"Kiwi");
console.log(fruitSeasonal);

console.log(">>>>>>>>>> Question 7 <<<<<<<<<");

const select=fruitSeasonal.slice(1,4);
console.log(select);

console.log(">>>>>>>>>> Question 8 <<<<<<<<<");

const last=fruitSeasonal.slice(-3)
console.log(last);


