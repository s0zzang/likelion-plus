const data = { a: 10, b: 30 };

// named export : 구조분해할당으로 가져오기
import { sum, divide, substract } from "./math.js";
console.log(sum(data), divide(data), substract(data));

// default export
import MyMath from "./math.js";
console.log(MyMath.sum(data), MyMath.divide(data), MyMath.substract(data));
