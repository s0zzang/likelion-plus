// 03/math.js 복사

export type DataType = {
  a: number;
  b: number;
};

// named export : 낱개로 내보내기
export function sum(data: DataType) {
  return data.a + data.b;
}

export function substract(data: DataType) {
  return data.a - data.b;
}

export function divide(data: DataType) {
  return data.a / data.b;
}

// default export
export default { sum, substract, divide };
