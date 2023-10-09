<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### A: `{}` ?

<i>```let greeting``` declares  using the let keyword, It initially undefined because no value is assigned to it at this point,```greeting = {}``` assigns an empty object Now greeting is an object if prints the value of greeting to the console it will display ```{}``` in the console. The variable ```let greeting``` count  this```{}``` as a value so it will show  ```{}``` as a result. </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### C: `"12"` ?

<i>Javascript is Dynamically typed language,JavaScript allows type coercion, it will attempt to convert the number 1 to a string to make the addition possible, situation of addition js give priority to ```String```, on other situation like subtraction, multiplication and division js give priority to ```Number``` type .   </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### A:`['🍕', '🍫', '🥑', '🍔']` ?

<i>Arrays and objects in JavaScript are reference types, but the assignment ``info.favoriteFood`` = "🍝" changes the value of the favoriteFood property of the info object, not the food array. Therefore, when we log the food array, it remains unchanged, and we get ["🍕", "🍫", "🥑", "🍔"] as the output. if we directly change the value of an array or object it will effect the main array or object and if we modify the array or object via other sometimes  it can be changed and sometime  it can't be changed depend on the reference. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### B: `Hi there, undefined` ?

<i>When we call ```sayHi()``` without passing any arguments, the name parameter inside the function will undefined so it will return ```Hi there, undefined``` . so avoid  this kind of error always we have to  be careful to provide ```Argument```, or we can set default parameter,using default parameter we can avoid this kind of error. </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### C:``` 3 ```?

<i>Initially Count is 0, ```nums``` Array has four value we iterate over ```nums``` array by ForEach Method Inside the callback function (num) => {...}, we checked if the current num is truthy using the if (num) condition,In JavaScript, 0 is considered falsy, and any non-zero number is considered truthy. So, the if (num) condition will be true for 1, 2, and 3, For each truthy value ```count``` variable is incremented by 1, so for three truthy value ```count``` variable incremented 3 and the result is 3.  </i>

</p>
</details>
