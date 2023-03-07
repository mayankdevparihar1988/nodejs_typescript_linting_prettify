import { value } from "./index.js";

const test = "test";

const helloNew = "Hello to test husky liniting";

console.log("Value  : ", value);

console.log("Test husky", helloNew);

console.log("Test the test", test);

function greetName(name = "anonymous") {
  if (name) {
    console.log(name);
  }

  console.log("HI" + name.toLowerCase());
}

greetName("Mayank");
